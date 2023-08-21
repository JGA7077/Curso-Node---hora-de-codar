# NODE

## No .env

DATABASE_URL='mysql://g7vkjgb55msul7yqvjeb:pscale_pw_Nen9cMVou7NgvFDW7RwBCvNHfvGei0k0g4Gbgz4W2Ty@aws.connect.psdb.cloud/curso_mysql?ssl={"rejectUnauthorized":true}'

## No app.js

require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')
connection.end()

## No terminal

npm install dotenv mysql2

# MySQL CLI

mysql -h aws.connect.psdb.cloud -u g7vkjgb55msul7yqvjeb -ppscale_pw_Nen9cMVou7NgvFDW7RwBCvNHfvGei0k0g4Gbgz4W2Ty --ssl-mode=VERIFY_IDENTITY --ssl-ca=/etc/ssl/certs/ca-certificates.crt