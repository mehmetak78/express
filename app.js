
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('This always runs....');
  next();
})

//app.use(bodyParser.urlencoded());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/add-product',(req, res, next) => {
  res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button> </form>');
});

app.use('/product',(req, res, next) => {
  console.log(req.body)
  res.redirect('/');
});

app.use('/',(req, res, next) => {
  res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);
