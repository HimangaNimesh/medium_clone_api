import bcrypt from 'bcrypt';
import { db } from "../../db.js";

const saltRounds = 12;


export const singin = async () => {

}

export const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
                console.error(err);
            }

            const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
            const values = [username, email, hash];

            db.query(q, [values], (err,data) => {
                if(err) return res.status(500).json(err)
                return res.status(201).json("User has been created successfully!")
            })
        });
    } catch (error) {
        next(error);
    }
};
