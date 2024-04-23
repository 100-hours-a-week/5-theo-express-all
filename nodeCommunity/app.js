import express from 'express';

const app = express();
const port = 3000;

app.use(express.static("template"))
app.use(express.static("js"))
app.use(express.static("db"))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});