const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "HEYLOYASH@123$^$3";// it ensure that the data should be not tempered when the token is given to the user means the user cannot change the data to access someone else data. if any cases are found then this can be caught through the JWT_SECRET.
const fetchuser = require('../MiddleWare/fetchuser.js');

const router = express.Router();

// creating user using POST '/api/auth/createuser'. login doesn't required.
//this request is executed in the sequence means firstly the end point will hit then the middleware will be executed which contains the validation rules and then finally the handler function will work.

//ROUTE:1-CREATE USER
router.post(
    '/createuser',
    [
        // The body validation rules are now passed as an array of middleware before the route handler function. This ensures that the validation is applied to the incoming request before the handler logic is executed.
        body('name', 'Enter a valid name').isLength({ min: 3 }),
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Password should contain more than 5 characters').isLength({ min: 6 }),  
    ],
    async (req, res) => {
        console.log(req.body);

        const errors = validationResult(req); //The validationResult(req) function is used to check for validation errors after the middleware has run.

        // if there are errors it returns the bad request and the error
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        try {
            // check whether the user with this email already exists
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ Error: "User with this email already exists" });
            }
            // hashing the password
            const salt = await bcrypt.genSalt(10); // it generates a string which is added to the password to make it more secure
            const secpass = await bcrypt.hash(req.body.password, salt); // secret password and we await it because it returns a promise

            // creating the user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secpass,
            });
            let data = {
                id: user.id
            }
            const authtoken = jwt.sign(data, JWT_SECRET);
            console.log(authtoken)
            res.json({ authtoken })
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error"); // this message is typed because data are sending to the user which is are deliver by the server
        }
    }
);
//ROUTE:2
// Authenticate user using POST '/api/auth/login'. login doesn't required.
router.post(
    '/login',
    [
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Password should contain more than 5 characters').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        // if there are errors it returns the bad request and the error
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ error: "Please try to login with valid credential" });
            }
            const passwordcompare = await bcrypt.compare(password, user.password);
            if (!passwordcompare) {
                return res.status(400).json({ error: "Please try to login with valid credential" });
            }
            let data = {
                id: user.id
            }
            const authtoken = jwt.sign(data, JWT_SECRET);
            console.log(authtoken)
            res.json({ authtoken })

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error"); // this message is typed because data are sending to the user which is are deliver by the server
        }
    })
//ROUTE:3
// get loggedin user detail using POST '/api/auth/login'.LOGIN REQUIRED
router.post('/getuser', fetchuser,async (req, res) => {
        try {
            const userId = req.user.id;
            const user = await User.findById(userId).select("-password");
            res.send(user);
      } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    })

module.exports = router;