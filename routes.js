module.exports = () => {

  let express = require('express');
  let router = express.Router();

  router.get('/api/weather',(req, res)=>{
    console.log('/api/weather');
    res.json('weather infos test');
  });

};
