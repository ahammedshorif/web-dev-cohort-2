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
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
function insertUser(firstName, lastName, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.create({
            data: {
                email,
                firstName,
                lastName,
                password,
            },
            select: {
                id: true,
                lastName: true,
            }
        });
        console.log(response);
    });
}
// insertUser("ah","shorif","shorif10@gmail.com","4839580")
function updateUser(email_1, _a) {
    return __awaiter(this, arguments, void 0, function* (email, { firstName, lastName }) {
        const res = yield prisma.user.update({
            where: { email: email },
            data: {
                firstName,
                lastName,
            },
            select: {
                id: true,
            }
        });
        console.log(res);
    });
}
updateUser("shorif10@gmail.com", { firstName: "shorif", lastName: "ahammed" });
