const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const methodOverride=require('method-override')
const path=require('path');

const app=express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(__dirname,'public')));

const mainroute=require('./routes/routes')

app.use(mainroute)
app.use(methodOverride('_method'))

mongoose.connect(   
    `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-shard-00-00-qlsts.mongodb.net:27017,cluster0-shard-00-01-qlsts.mongodb.net:27017,cluster0-shard-00-02-qlsts.mongodb.net:27017/${process.env.MONGO_DATABASE}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`
).then(result=>{
    app.listen(8080)
})
.catch(err=>{console.log(err)})