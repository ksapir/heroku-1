const express = require('express');
const path = require('path')

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send(
    `<h2> My First Server!!</h2>`
  );
});

app.get('/api', (req, res) => {
  res.json({
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
