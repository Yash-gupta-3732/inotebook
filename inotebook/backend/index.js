const connTOMongo = require("./db");
const express = require('express')
const cors = require('cors')
connTOMongo();
const app = express()
const port = 5000
app.use(cors()) // to allow access to backend from frontend

app.use(express.json());

// Available routes
app.use('/api/auth', require('./routes/auth')); // endpoints--> /api/auth , handler--> require('./routes/auth')
app.use('/api/notes', require('./routes/notes')); // endpoints--> /api/notes , handler--> require('./routes/notes') 

app.listen(port, () => {
  console.log(`inotebook website listening on port http://localhost:${port}`)
})
