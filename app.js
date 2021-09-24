const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost/demo")
// .then(() => {console.log('Connect to mongodb')})
// .catch(() => {console.log('Connect to mongodb')})



// Connect to DB (Atlas)

 mongoose.connect("mongodb+srv://e-commerce:e-commerce@cluster0.ngvph.mongodb.net/e-commerce?retryWrites=true&w=majority",
 {useNewUrlParser: true,
useUnifiedTopology: true})
 .then(() => {console.log('Connect to mongodb')})
 .catch((err) => {console.log(err)})

const port = 3001;

// Import Routes

const shopRoutes = require('./routes/shop.js')
const adminRoutes = require('./routes/admin.js')

// Route Middlewares

app.use(express.static('uploads'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", shopRoutes.routes);
app.use("/admin", adminRoutes.routes);


app.listen(port, () => {
    console.log(`server listening on ${port}`);
})