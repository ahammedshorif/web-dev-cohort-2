const { Client } = require("pg");
const dotenv =require("dotenv")

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




async function createUserTable() {
  await client.connect();

  const userTable = await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

        
        `);

  console.log(userTable);
}

// createUserTable();


async function insertUserTable() {
  
await client.connect();
const insertTable = await client.query(`
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
}

insertUserTable()


