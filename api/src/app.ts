import express from "express"
import routes from "./routes";
import { config } from 'dotenv';
config();
import cors from 'cors';

const app = express()
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1", routes)

app.listen(PORT, () => {
        console.log("Access API on http://lohalhost:3000/api/v1")
})

export default app