const mongoose = require('mongoose')

const ConnBD = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        })

        console.log(`Connection successfull: ${conn.connection.host}`)
    }
    catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

module.exports = ConnBD