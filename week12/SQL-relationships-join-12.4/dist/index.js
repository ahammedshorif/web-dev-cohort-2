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
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:npg_ZvUDfxL73cJy@ep-crimson-sound-a87hggrl-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
});
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        console.log("DB is connected");
    });
}
connectDB();
function createAddressTable() {
    const query1 = `CREATE user`;
    const response = client.query(`
 CREATE TABLE user_address (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    street VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    zip_code VARCHAR(20),
    country VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
 );

        
        `);
}
// createAddressTable()
function findUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.query(`SELECT * FROM users`);
        console.log(user);
    });
}
// findUser()
const insertAddress = (userId, street, city, state, zipCode, country) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
    INSERT INTO user_address (user_id, street, city, state, zip_code, country)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
    const values = [userId, street, city, state, zipCode, country];
    const result = yield client.query(query, values);
});
insertAddress(1, '123 Main St', 'Dhaka', 'Dhaka Division', '1207', 'Bangladesh');
