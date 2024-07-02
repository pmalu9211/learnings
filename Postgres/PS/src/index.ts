import { Client } from "pg";
import fs from "fs";

// Async function to fetch user data from the database given an email

const client = new Client({
  connectionString:
    "postgresql://test_owner:hIE2rswZyR1A@ep-divine-king-a147dkim.ap-southeast-1.aws.neon.tech/medium?sslmode=require",
});

const createTable = async () => {
  const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
    `);
};

async function insertData() {
  await client.connect();
  try {
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ('username3', 'user4@example.com', 'user_password');";
    const res = await client.query(insertQuery);
    console.log("Insertion success:", res); // Output insertion result
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    await client.end(); // Close the client connection
  }
}
// insertData();
// createTable();

const betterWay = async (
  username: string,
  email: string,
  password: string
): Promise<void> => {
  try {
    await client.connect(); // Ensure client connection is established
    // Use parameterized query to prevent SQL injection
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log("Insertion success:", res); // Output insertion result
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    await client.end(); // Close the client connection
  }
};

async function getUser(email: string): Promise<void> {
  try {
    await client.connect(); // Ensure client connection is established
    const query = "SELECT * FROM users";
    const values = [email];
    const result = await client.query(query);

    if (result.rows.length > 0) {
      console.log("User found:", result); // Output user data
      //   return result.rows[0]; // Return the user data
    } else {
      console.log("No user found with the given email.");
      //   return null; // Return null if no user was found
    }
  } catch (err) {
    console.error("Error during fetching user:", err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }
}

// createTable();
betterWay("pratham21", "abc22", "12342");
