const express = require('express')
const cors = require('cors')
const app = express();

const PORT = 3001;
const BASE_PATH = '/api'

//routes
var indexRoutes = require('./routes/index.js');
var companyRoutes = require('./routes/companies.js');


app.use(express.json())
app.use(BASE_PATH, indexRoutes);
app.use(BASE_PATH, companyRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});
  
app.listen(PORT, () => {
  console.log(`running on port ${PORT}.`)
})