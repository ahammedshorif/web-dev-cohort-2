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
const dotenv = require("dotenv");
dotenv.config();
const client = new Client({
    // for local connection
    // host: "",
    // port: 5334,
    // database: "",
    // user: "",
    // password: "",
    // for neno connection
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});
function clientConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
    });
}
clientConnect();
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
// insertUserTable()
function findData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const allUserData = yield client.query(`
                SELECT * FROM users;
        
        `);
        const oneUserData = yield client.query(`
                SELECT * FROM users WHERE id=3;
        
        `);
        console.log(oneUserData);
    });
}
// findData()
// async function updateRecord(){
//     const updateData = await client.query(`
//         UPDATE users SET username= 'shorif', email='xyz@gmail.com', password= '12345678' WHERE id=4;
//     `);
//     console.log(updateData);
// }
// updateRecord() 
//above way is not Rigth because of SQL injection ***********************
function insertUserTableW() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = [
                ['alice_wonder', 'alice@wonderland.com', 'teaTime987'],
                ['bob_builder', 'bob@construction.com', 'canWeFixIt123'],
                ['clara_oswald', 'clara@tardis.net', 'impossibleGirl456'],
                ['derek_shepherd', 'derek@seattlegrace.com', 'neurosurgeon321'],
                ['elsa_ice', 'elsa@arendelle.org', 'letItGo007']
            ];
            for (const user of users) {
                const insertQuery = `
                INSERT INTO users (username, email, password)
                VALUES ($1, $2, $3)
            `;
                yield client.query(insertQuery, user);
            }
            console.log('All users inserted successfully.');
        }
        catch (error) {
            console.error('Error inserting users:', error);
        }
        finally {
            yield client.end();
        }
    });
}
insertUserTableW();
function updateRecord() {
    return __awaiter(this, void 0, void 0, function* () {
        const updateQuery = `UPDATE users SET username= $1, email=$2, password= $3 WHERE id=$4;`;
        const value = ["ahamemd", "23@gmail.com", "45893948", "4"];
        const updateData = yield client.query(updateQuery, value);
        console.log(updateData);
    });
}
// updateRecord() 
