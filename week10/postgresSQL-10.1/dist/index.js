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
const { Client } = require("pg");
const client = new Client({
    // for local connection
    // host: "",
    // port: 5334,
    // database: "",
    // user: "",
    // password: "",
    // for neno connection
    connectionString: "postgresql://neondb_owner:npg_ZvUDfxL73cJy@ep-crimson-sound-a87hggrl-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
    ssl: {
        rejectUnauthorized: false,
    },
});
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const userTable = yield client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

        
        `);
        console.log(userTable);
    });
}
// createUserTable();
function insertUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const insertTable = yield client.query(`
    INSERT INTO users (username, email, password)
VALUES ('john_doe', 'john@example.com', 'hashedpassword123');

INSERT INTO users (username, email, password)
VALUES ('jane_smith', 'jane@example.com', 'securepass456');

INSERT INTO users (username, email, password)
VALUES ('mike_ross', 'mike@example.com', 'lawyerlife789');

INSERT INTO users (username, email, password)
VALUES ('rachel_green', 'rachel@example.com', 'fashionista321');

INSERT INTO users (username, email, password)
VALUES ('harvey_specter', 'harvey@example.com', 'suitup007');

        
        `);
        console.log(insertTable);
    });
}
insertUserTable();
