import express from "express"
import routes from "./routes";
import { config } from 'dotenv';
config();


const app = express()
const PORT = 3000;

app.use(express.json());
app.use("/api/v1",routes)


app.listen(PORT, () =>{
        console.log("Access API on http://lohalhost:3000/api/v1")
})