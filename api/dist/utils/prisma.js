"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class DbCnx {
}
DbCnx.dbInstance = null;
DbCnx.getDbInstance = () => {
    if (DbCnx.dbInstance) {
        return DbCnx.dbInstance;
    }
    DbCnx.dbInstance = new client_1.PrismaClient();
    return DbCnx.dbInstance;
};
const prisma = DbCnx.getDbInstance();
exports.default = prisma;
