const express = require("express");
const app = express();
const port = 4001;
const { Recipe_Table } = require("./models");
require("dotenv").config();


app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  res.on("finish", () => {
    // the 'finish' event will be emitted when the response is handed over to the OS
    console.log(`Response Status: ${res.statusCode}`);
  });
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Job App Tracker API!!!!");
});
// Get all the jobs
app.get("/rec", async (req, res) => {
  try {
    const Allrecipe_table = await Recipe_Table.findAll();
    res.status(200).json(Allrecipe_table);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});
// Get a specific job
app.get("/rec/:id", async (req, res) => {
  const receipeId = parseInt(req.params.id, 10);
  try {
    const rec = await Recipe_Table.findOne({ where: { id: receipeId } });
    if (rec) {
      res.status(200).json(rec);
    } else {
      res.status(404).send({ message: "Job not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});
// Create a new job

app.post("/rec", async (req, res) => {

  console.log(req.body)
  const newrec = await Recipe_Table.create(req.body);
  try {
    res.status(201).json(newrec);
    console.log('yes')
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      return res.status(422).json({ errors: err.errors.map((e) => e.message) });
    }
    console.log('is not working')
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});
// Update a specific job
app.patch("/rec/:id", async (req, res) => {
Id = parseInt(req.params.id, 10);
  try {
    const [numberOfAffectedRows, affectedRows] = await Recipe_Table.update(
      req.body,
      { where: { id: Id }, returning: true }
    );
    if (numberOfAffectedRows > 0) {
      res.status(200).json(affectedRows[0]);
    } else {
      res.status(404).send({ message: "Job not found" });
    }
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      return res.status(422).json({ errors: err.errors.map((e) => e.message) });
    }
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});
// Delete a specific job
app.delete("/rec/:id", async (req, res) => {
  const Id = parseInt(req.params.id, 10);
  try {
    const deleteOp = await Recipe_Table.destroy({ where: { id: Id } });
    if (deleteOp > 0) {
      res.status(200).send({ message: "Job deleted successfully" });
    } else {
      res.status(404).send({ message: "Job not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});