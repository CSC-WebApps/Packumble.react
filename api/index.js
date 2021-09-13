const e = require('express');
const express = require('express');
const app = express()
const port = 3030;

const generateUsers = require('./lib/data');

app.use(express.json());

const router = express.Router();
app.use('/api', router);

let data = [];
let me = {};

data = generateUsers();

router.get('/see', (req, res) => {

  if( data.length > 0 )
  {
    res.send( data[data.length-1] );  
  }
  else res.send({});

});

router.get('/no', (req, res) => {
  data.pop();
  res.send({});
});

router.post('/trymatch', (req, res) => {
  let card = data.pop();
  // console.log(me);
  // console.log(card);
  if( (card.language == req.body.language && card.match == true) ||
      card.luck == true ) {

    let email = Math.random().toString(36).substring(2);
    res.send({match: true, email: `${email}@ncsu.edu` });
  }
  else res.send({match: false });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})