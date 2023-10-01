import express from 'express';
import usersRoutes from './server/users/users.Routes.js';

const app = express();

app.use(express.json());

app.use("/api/users", usersRoutes)


app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message
    })
})

app.listen(8000, () => {
    console.log("connected to server!");
})