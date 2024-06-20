import { Router } from "express";
import User from "../models/users.js";
import { validateCreateUser } from "../validations/users.js";

const router = Router();

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        console.log("users", users);
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Create a new user
router.post('/', async (req, res) => {
    try {
        const { error } = validateCreateUser(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        const newUser = await User.create(req.body);
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
});



export default router;