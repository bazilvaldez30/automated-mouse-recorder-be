const express = require('express')
const app = express()
const port = 3000

// Import routes
const mouseRoutes = require('./routes/mouseRoutes')

// Use routes
app.use('/', mouseRoutes)

app.listen(port, () => {
  console.log(`RobotJS API listening at http://localhost:${port}`)
})
