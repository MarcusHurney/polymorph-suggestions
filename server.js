const path = require('path');
const express = require('express');

const app = express();

const port = process.env.PORT ? process.env.PORT : 8181;
const dist = path.join(__dirname, 'dist');

app.use(express.static(dist));

app.get('*', (req, res) => {
  res.sendFile(path.join(dist, 'index.html'));
});

app.listen(port, error => {
  if (error) {
    console.log(error);
  }
  console.info('Express is listening on port ', port);
});
