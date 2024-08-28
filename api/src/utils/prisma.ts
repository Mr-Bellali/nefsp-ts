import { PrismaClient } from "@prisma/client";

class DbCnx {
    static dbInstance: PrismaClient | null = null;
    static getDbInstance = () =>{
        if (DbCnx.dbInstance) {
            return DbCnx.dbInstance
        }
        DbCnx.dbInstance =  new PrismaClient();

        return DbCnx.dbInstance
    }
}

const prisma = DbCnx.getDbInstance()

export default prisma;
