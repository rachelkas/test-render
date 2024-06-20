// import { Router } from "express";
// import User from "../models/users.js";

// const router = Router();

// // router.get('/', async (req, res) => {
// //     try {
// //         const users = await User.find();
// //         res.json(users);
// //     } catch (err) {
// //         console.error(err);
// //         res.status(500).send('Server Error');
// //     }
// // });

// // router.post('/', async (req, res) => {
// //     const { error } = validateUser(req.body);
// //     if (error) return res.status(400).send(error.details[0].message);

// //     try {
// //         let user = new User({
// //             name: req.body.name,
// //             email: req.body.email
// //         });

// //         user = await user.save();
// //         res.json(user);
// //     } catch (err) {
// //         console.error(err);
// //         res.status(500).send('Server Error');
// //     }
// // });

// // Get all libraries
// router.get('/', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).send(users);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });


// // Create a new library
// router.post('/', async (req, res) => {
//     try {
//         const { error } = validateCreateLibrary(req.body);
//         if (error) {
//             return res.status(400).send(error.details[0].message);
//         }
//         const newLibrary = await Library.create(req.body);
//         res.status(201).send(newLibrary);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// });

// export default router;






import { Router } from "express";
import User from "../models/users.js";
import { validateCreateUser } from "../validations/users.js";

const router = Router();

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
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