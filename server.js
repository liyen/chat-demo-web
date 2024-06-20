const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'view')));

app.get( "/", ( req, res ) => {
  // send the HTML file in the API response
  res.sendFile( path.join( __dirname + "/view/index.html" ));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})