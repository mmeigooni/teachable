const sequelize = require('sequelize')

// Please create a credential.json file with your username and password for your cloud DB.
// Refer to sampleCredentials.json
// const creds = require('./credentials')

// Database connection
// const DBConnection = new sequelize('postgres://dtsjjtzz:LQWdLNzmw7RTddMuSLQQkTQ4IqFr77_G@babar.elephantsql.com:5432/dtsjjtzz')
const DBConnection = new sequelize('postgres://dtsjjtzz:q00usl2X1H2ICB_I7vn5tTITABU4a-ip@babar.elephantsql.com:5432/dtsjjtzz')

// Connection testing
DBConnection
    .authenticate()
    .then(() => {
      console.log('DB connection successful')
    })
    .catch((err) => {
      console.log('DB connection ERROR: ', err)
    })

module.exports = DBConnection;

