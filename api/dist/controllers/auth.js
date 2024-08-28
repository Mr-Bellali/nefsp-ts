"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.signUpController = void 0;
const uuid_1 = require("uuid");
const hashPassword_1 = __importDefault(require("../utils/hashPassword"));
const auth_1 = require("../models/auth");
const comparePasswords_1 = __importDefault(require("../utils/comparePasswords"));
const jwt_1 = __importDefault(require("../utils/jwt"));
const signUpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const userId = (0, uuid_1.v4)();
        const { name, email, password, phonenumber, adress, cityId, profiletype } = req.body;
        console.log("id", userId);
        console.log("received data:", name, email, password, phonenumber, adress, cityId, profiletype);
        // Check if all required fields exist
        if (!name || !email || !password || !phonenumber) {
            return res.status(400).json({ error: "The fields are required!" });
        }
        // Check if profiletype is "admin", and deny if it is
        if ((profiletype === null || profiletype === void 0 ? void 0 : profiletype.toLowerCase()) === "admin") {
            return res
                .status(400)
                .json({ error: "You are not allowed to be an admin!" });
        }
        // Hash the password
        const hashedPass = yield (0, hashPassword_1.default)(password);
        console.log("\n\n\n\nhashed pass: ", hashedPass, "\n\n\n\n\n\n\n\n");
        // Create the user
        const createdUser = yield (0, auth_1.createUser)(userId, name, email, hashedPass, phonenumber, adress, cityId, profiletype);
        return res.status(201).json({ user: createdUser });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: error });
    }
});
exports.signUpController = signUpController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(403).json({ error: "please fill all the fields" });
        }
        let user;
        user = yield (0, auth_1.getUser)(email);
        if (!user) {
            res.status(404).json({ error: "incorrect email or password" });
        }
        const passwordMatch = yield (0, comparePasswords_1.default)(password, user.Password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Incorrect email or password" });
        }
        const token = (0, jwt_1.default)({ user: user }, process.env.ACCESS_TOKEN_SECRET);
        return res.status(200).json({ token });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "something in the server is wrong" });
    }
});
exports.loginController = loginController;
