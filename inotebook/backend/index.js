const connTOMongo = require("./db");
const express = require('express')
connTOMongo();
const app = express()
const port = 5000

app.use(express.json());

// Available routes
app.use('/api/auth', require('./routes/auth')); // endpoints--> /api/auth , handler--> require('./routes/auth')
app.use('/api/notes', require('./routes/notes')); // endpoints--> /api/notes , handler--> require('./routes/notes') 

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})