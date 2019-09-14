console.log(`ORM, ready for duty...`);

const connection = require('./connection.js');
// const server = require("./keys")

const orm = {
    select: (table, cb) => {

        let query = `SELECT * FROM ??`;

        // connection.query(query, [table], (err, results) => {
            connection.query('SELECT * FROM burgers',(err,results)=>{

            


            if (err) {
                throw err;
            }
            console.log(`This is the ORM - displaying all burgers`)
            console.log(results);
            cb(results);
        });
    },

    insert: (table, column, value) => {
        let insertQuery = `INSERT INTO ?? (??) VALUES(?)`

        connection.query(insertQuery, [table, column, value], (err, result) => {
            if (err) {
                throw err;
            }
            console.log(`This is the ORM - adding a burger to the database`)
            console.log(result);
        });
    },

    update: (table, column, newVal, whereCol, whereVal) => {
        let updateQuery = `UPDATE ?? SET ?? = ? WHERE ?? = ?`

        connection.query(updateQuery, [table, column, newVal, whereCol, whereVal], (err, result) => {
            if (err) {
                throw err;
            }
            console.log(`This is the ORM - updating burgers_db `)
            console.log(result);
        });
    },

    delete: (table, column, value) => {
        let deleteQuery = `DELETE FROM ?? WHERE ?? = ?`

        connection.query(deleteQuery, [table, column, value], (err, result) => {
            if (err) {
                throw err;
            }
            console.log(`This is the ORM deleting`)
            console.log(result);
        });
    }
}



module.exports = orm;