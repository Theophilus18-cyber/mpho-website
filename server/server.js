import express from 'express';
import connection from './config.js';

const app = express();

app.get('/',(req,res)=>{
    connection.query('SELECT * FROM users', (err,rows) => {
        if(err){
            console.log(err)
        } else {
            res.send(rows)
        }
    })
})




app.listen(5000, () => {
    console.log('Server is running on port 5000')
} )

