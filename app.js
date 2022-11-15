const path = require('path');
const mongoose = require('mongoose');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const User = require('./models/user');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {


  User.findById('63735f510ebde7bb98593119')
    .then(user => {
      req.user =user; //mongoose model object user
      next();
    })
    .catch(err => console.log(err));

});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://IliyasOO7:ZMuZ9YdV6KXXzRG0@cluster0.xeqhbku.mongodb.net/shop?retryWrites=true&w=majority').then(result =>{
  console.log('started');

  User.findOne().then(user =>{
    if(!user){
      const user = new User({
        name:'Max',
        email:'max@test.com',
        cart:{
          items:[]
        }
      });
      user.save();

    }
  })

  app.listen(3000);
}).catch(err=>{
  console.log(err);
})


