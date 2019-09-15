console.log(`This is burger-controller, ready for duty...`)

const express = require("express");
const router = express.Router();

const burger = require("../models/burger");


router.get("/", (req, res) => {
    console.log('hi')

    burger.select(function (data) {
        let hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    })
});

// new burger
router.post("/api/burger", (req, res) => {
    let newBurger = req.body.name;

    burger.create("burger_name", newBurger, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
});

// router.put("/api/burger/:id", (req, res) => {
//     let status = Boolean(req.body.burger_id, function(result){
//         res.redirect('/');
//     });
    // console.log("burger status", status);

    // burger.update("devoured", status, "id", req.params.id, (result) => {
    //     if (result.changedRows === 0) {
    //         return res.status(404).end();
    //     }
    //     res.status(200).end();
    // });
// });

router.put('/burger/update', function(req,res){
    burger.update(req.body.burger_id, function(result){
        res.redirect('/');
    });
});



module.exports = router;