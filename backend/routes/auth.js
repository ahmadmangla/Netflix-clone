import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import user from '../models/User.js';
import jsonwebtoken from 'jsonwebtoken';


const router = Router();
const jwt = jsonwebtoken;




router.post("/register",
    body('firstName', "Please Enter first Name").notEmpty(),
    body('secondName', "Please Enter Second Name").notEmpty(),
    body('email', "Please enter a valid email").isEmail(),
    body('password', "Please enter password of minimum 5 characters").isLength({ min: 5 }),
    async (req, res) => {
        let success = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { firstName, secondName, email, password } = req.body;

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);


            const newUser = await user.create({
                firstName: firstName,
                secondName: secondName,
                email: email,
                password: hash,
            })

            newUser.save();
            success = true;

            const data = {
                user: {
                    id: newUser.id
                }
            }

            const token = jwt.sign(data, 'shhhhhsdsd2323232332');

            res.status(200).json({success, token});

        } catch (error) {
            res.status(500).json({ error: error })
        }


    })


export default router;