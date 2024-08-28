"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const generateToken = (user, secretKey) => {
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        isManager: user.isManager,
    };
    console.log('Token Payload:', payload);
    const token = jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn: '1h' });
    return token;
};
exports.default = generateToken;
