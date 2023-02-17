import app from "./app.mjs";

process.env.TZ = "Asia/Karachi";

//resolving
const port = 4000;
// const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
//new branch
// module.exports = server;
