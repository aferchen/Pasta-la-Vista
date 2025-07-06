const express = require("express");
const db = require("./db.js");
const cors = require("cors");

const app = express();

//using fake users

const PORT = 8080;
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.get("/users", async (req, res) => {
  try {
    const query = "SELECT * FROM users";
    const [result] = await db.query(query);
    console.log("Success in Reading MySQL");
    res.status(200).send(result);
  } catch (err) {
    console.error("Error in Reading MySQL :", err);
    res.status(500).send({ error: "An error occurred while fetching items." });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const query = "SELECT * FROM users WHERE id = ?";
    const [result] = await db.query(query, [id]);
    console.log("Success in Reading MySQL");
    res.status(200).send(result);
  } catch (err) {
    console.error("Error in Reading MySQL :", err);
    res.status(500).send({ error: "An error occurred while fetching items." });
  }
});

app.post("/users", async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      const msg = "POST:Bad request: No data provided.";
      console.log(msg);
      return res.status(400).send({ error: msg });
    }
    const [tableExists] = await db.query(
      "SHOW TABLES LIKE 'users'"
    );
    if (tableExists.length === 0) {
      const msg = "POST:Table does not exist";
      console.log(msg);
      return res.status(404).send({ error: msg });
    }
    const itemId = req.body.id;
    const [productExists] = await db.query(
      "SELECT * FROM users WHERE id = ?",
      [itemId]
    );
    if (productExists.length > 0) {
      const msg = "POST:Item already exists";
      console.log(msg);
      return res.status(409).send({ error: msg });
    }
    const { name, password, email, birthday, points, phone } = req.body;
    const insertSql =
      "INSERT INTO users (name, password, email, birthday, points, phone) VALUES (?, ?, ?, ?, ?, ?)";
    const insertResult = await db.query(insertSql, [
        name,
        password,
        email,
        birthday,
        points,
        phone,
    ]);

    const msg = "POST:Success in Posting MySQL" + insertResult;
    console.log(msg);
    return res.status(200).send({ success: msg });
  } catch (err) {
    // Handle any error
    const msg = "POST: An error occurred while adding product " + err;
    console.error(msg);
    res.status(500).send({ error: msg });
  }
});
app.delete("/users/:id", async (req, res) => {
  try {
    // Read id from frontend
    const itemId = req.params.id;
    // Verify if item already exists
    console.log("DELETE DELETE DELETE ", itemId);
    const [rows] = await db.query(
      "SELECT * FROM users WHERE id = ?",
      [itemId]
    );
    if (rows.length <= 0) {
      // Item does NOT exist
      const msg = "DELETE:Item " + itemId + " does NOT exist";
      console.log(msg);
      return res.status(409).send({ error: msg });
    }
    // Proceed to delete it
    const id = req.params.id;
    const [deleteResult] = await db.query("DELETE FROM users WHERE id = ?", [id]);

    // success
    const msg = "Success in DELETE item :" + deleteResult;
    console.log(msg);
    return res.status(200).send({ success: msg });
  } catch (err) {
    // Handle any error
    const msg = "DELETE: An ERROR occurred in Delete" + err;
    console.error(msg);
    res.status(500).send({ error: msg });
  }
});
app.put('/users/:id/points', async (req, res) => {
    try {
      const { id } = req.params;
      const { points } = req.body;
  
      const [userExists] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
      if (userExists.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
  
      await db.query("UPDATE users SET points = ? WHERE id = ?", [points, id]);
      console.log(`Updated user ${id} to ${points} points`);
      res.status(200).json({ message: "Points updated" });
    } catch (error) {
      console.error("PUT error:", error);
      res.status(500).json({ error: "Failed to update points" });
    }
  });
  app.put("/users/:id", async (req, res) => {
    try {
      const itemId = req.params.id;
      const [userExists] = await db.query(
        "SELECT * FROM users WHERE id = ?",
        [itemId]
      );
  
      if (userExists.length <= 0) {
        return res.status(404).send({ error: "User not found" });
      }
  
      const fields = req.body;
      const updates = [];
      const values = [];
  
      for (const key in fields) {
        updates.push(`${key} = ?`);
        values.push(fields[key]);
      }
  
      if (updates.length === 0) {
        return res.status(400).send({ error: "No fields to update" });
      }
  
      const updateSql = `UPDATE users SET ${updates.join(", ")} WHERE id = ?`;
      values.push(itemId);
      await db.query(updateSql, values);
  
      res.status(200).send({ success: "User info updated" });
    } catch (err) {
      console.error("PUT: Error updating user info", err);
      res.status(500).send({ error: "Failed to update user info" });
    }
  });
