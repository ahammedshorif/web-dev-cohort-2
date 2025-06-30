import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://neondb_owner:npg_ZvUDfxL73cJy@ep-crimson-sound-a87hggrl-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
});






async function connectDB() {
  await client.connect();
  console.log("DB is connected");
  
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


async function findUser(){
   const user = await client.query(`SELECT * FROM users`)
    console.log(user);
}

// findUser()


const insertAddress = async (userId:number, street:string, city:string, state:string, zipCode:string, country:string) => {
  const query = `
    INSERT INTO user_address (user_id, street, city, state, zip_code, country)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

  const values = [userId, street, city, state, zipCode, country];

  const result = await client.query(query, values);
};

insertAddress(1, '123 Main St', 'Dhaka', 'Dhaka Division', '1207', 'Bangladesh');



