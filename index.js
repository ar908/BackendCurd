const mongoose = require('mongoose')
const app = require('./app')

const DB_URI = "mongodb+srv://Artipatwa:sejal12345@cluster0.aqa1uwv.mongodb.net/?retryWrites=true&w=majority"
const PORT = 5000


mongoose.set('strictQuery', false)
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(app.listen(PORT, () => console.log(`CONNECTED WITH DATABASE & APP IS LISTENING ON PORT ~ ${PORT}`)))
    .catch((err) => console.error(err.message))
    