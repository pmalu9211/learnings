const express = require("express");

const app = express();

app.use((req: any, res: any) => {
  res.json({ name: "Pratham" });
});

app.listen(3001, () => {
  console.log("Server started on port 3000");
});
