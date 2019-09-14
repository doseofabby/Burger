const orm = require('../config/orm');

const burger = {
    select: (cb) => {
        orm.select("burger", (results) => {
            cb(results);
        });
    },
    create: (column, values, cb) => {
        orm.insert("burger", column, values, (results) => {
            cb(results);
        });
    },
    update: (column, newVal, whereCol, whereVal, cb) => {
        orm.update("burger", column, newVal, whereCol, whereVal, (results) => {
            console.log("hello"); 
            cb(results);
        });
    },

}


module.exports = burger;