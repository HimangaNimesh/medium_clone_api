import express from 'express';

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes)

app.listen(8000, () => {
    console.log("connected to server!");
})