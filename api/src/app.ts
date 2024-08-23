import express from "express"
import routes from "./routes";
import { config } from 'dotenv';
config();

const url = process.env.DATABASE_URL 

console.log(url)

const app = express()
const PORT = 3000;

app.use(express.json());
app.use("/api/v1",routes)


app.listen(PORT, () =>{
        console.log("Server is running on port 3000")
})