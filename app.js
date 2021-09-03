const express = require('express');
const app = express();
const path = require('path');

const port = 3001;
const shopRoutes = require('./routes/shop.js')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.use("/", shopRoutes.routes);

app.listen(port, () => {
    console.log(`server listening on ${port}`);
})