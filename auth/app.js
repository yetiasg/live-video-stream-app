const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post('/auth', (req, res) => {
  const key = req.body.key;

  if(key === "123456789"){
    console.log(key)
    res.status(200).send();
    return
  }
  console.log(key)
  res.status(403).send();
});


app.listen(8080, () => console.log("listening on port: 8080"));