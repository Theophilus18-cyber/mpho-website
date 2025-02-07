import mysql from 'mysql';


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2002@Theophilus',
    database: 'flaskandmysql'

})

connection.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected to the database')
    }
}) 

export default connection;