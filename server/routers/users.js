import { Router } from "express";
import User from "../models/users.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.post('/', async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        let user = new User({
            name: req.body.name,
            email: req.body.email
        });

        user = await user.save();
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

export default router;