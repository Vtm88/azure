const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(function(req, res, next) {
  console.log('Handling: %s %s', req.method, req.url);
  next();
})

app.use(express.static('public'));

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});
