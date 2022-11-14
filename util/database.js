const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback)=>{
  MongoClient.connect('mongodb+srv://IliyasOO7:82sbURUuKhe2iDRb@cluster0.xeqhbku.mongodb.net/?retryWrites=true&w=majority').then(client =>{
  console.log('connected!');
  callback(client)
}).catch(err=>{
  console.log(err);
})

}


module.exports = mongoConnect;
