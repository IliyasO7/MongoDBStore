const mongodb = require('mongodb');
//const { get } = require('../routes/admin');

let _db ;
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback)=>{
  MongoClient.connect('mongodb+srv://IliyasOO7:82sbURUuKhe2iDRb@cluster0.xeqhbku.mongodb.net/shop?retryWrites=true&w=majority').then(client =>{
  console.log('connected!');
  _db = client.db(); //connect to shop db if not create it in url / shop
  callback()
}).catch(err=>{
  console.log(err);
  throw err;
})

}


const getDb = ()=>{
  if(_db){
    return _db;
  }
  throw 'No db found';
}

exports.mongoConnect = mongoConnect;
exports.getDb =getDb;
