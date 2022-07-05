const express= require('express');
const app= express();
const bodyparser=require('body-parser')
const path=require('path');
var mongoose =require('mongoose');
const port =process.env.PORT||8000


//public static path
// const s
// console.log(path.join(__dirname,"../public/js/index.html"));
const static_path = path.join(__dirname,"../public/js");//we add path yrr
app.use(express.static(static_path));


// mongoose.connect('mongodb://localhost/contactfood',{useNewUrlParser:true});
// const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/contactshop'  );
}


const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    firstname: String,
   
  },{versionKey:false});

  const Contact = mongoose.model('Contact',contactSchema);

  app.get('/contact', (req, res)=>{
   
    const params = {}
    res.status(200).render('contact.html', params);
});
app.get("*",(req,res)=>{
    
    res.send("404 error page")
})
app.post('/contact',(req,res)=>{
    var myData = new Contact(req.body);
 myData.save().then(()=> {
     res.send("saved  in database")
 }).catch(()=>{
     res.status(400).send("not saved");
 });
})


app.listen(port,()=>{
    console.log(`succesfully run at port${port}`)
})