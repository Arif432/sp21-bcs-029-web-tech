const express = require('express');
const router = express.Router();
const UserModal = require('../models/Users');
const { query } = require('express-validator');
const { userDataValidateChainableAPI } = require('../validations/UserValidations');
const { validationResult } = require("express-validator");


router.get('/index', (req, res) => {
    UserModal.find().exec()
        .then(users => {
            console.log("users", users);
            res.render("index", {
                "title": "Users",
                users: users,
            });
        })
        .catch(err => {
            console.error(err);
            res.send("error");
        });
});

router.get('/add', (req, res) => { 
    res.render("add-user" , {
        "title": "Add User",
    });
});

router.post('/add', userDataValidateChainableAPI, (req, res) => {
    const errors = validationResult(req);
    console.log("errors", errors);
    if (!errors.isEmpty()) {
        return res.render('add-user', { errors: errors.array() });
    }

    let user = new UserModal({
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    });
    user.save()
        .then(result => {
            res.redirect("/index");
        })
        .catch(err => {
            console.log("err", err);
            res.status(500).send("Internal Server Error");
        });
});

router.get('/edit/:id', (req, res) => {
    UserModal.findById(req.params.id).exec()
        .then(user => {
            res.render("edit-user", {
                "title": "Edit User",
                user: user,
            });
        })
        .catch(err => {
            console.error(err);
            res.send("error");
        });
});

router.post('/update/:id', (req, res) => {
    UserModal.findByIdAndUpdate(req.params.id, {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    }).exec()
        .then(user => {
            res.redirect("/index");
        })
        .catch(err => {
            console.error(err);
            res.send("error");
        });
});

router.get('/delete/:id', (req, res) => {
    UserModal.findByIdAndDelete(req.params.id).exec()
        .then(user => {
            res.redirect("/index");
        })
        .catch(err => {
            console.error(err);
            res.send("error");
        });
});

module.exports = router;