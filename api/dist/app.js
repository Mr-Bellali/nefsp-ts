"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const url = process.env.DATABASE_URL;
console.log(url);
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use("/api/v1", routes_1.default);
app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});
