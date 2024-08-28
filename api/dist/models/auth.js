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
exports.getUser = exports.createUser = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const uuid_1 = require("uuid");
const createUser = (idUser, name, email, password, phoneNumber, addressData, cityId, profileType) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma_1.default.user.create({
            data: {
                idUser,
                name,
                email,
                password,
                phoneNumber,
                profile: {
                    create: {
                        idProfile: (0, uuid_1.v4)(),
                        role: profileType,
                    },
                },
                adresses: {
                    create: {
                        addressData,
                        cityId,
                    },
                },
            },
        });
        return user;
    }
    catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Failed to create user.");
    }
});
exports.createUser = createUser;
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma_1.default.user.findUnique({
            where: {
                email
            }
        });
        return user;
    }
    catch (error) {
        return error;
    }
});
exports.getUser = getUser;
