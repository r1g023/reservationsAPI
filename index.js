const server = require("./api/server");

//Server API up and running
server.use("/", (req, res, next) => {
  res.json({ message: "api up and running" });
});

//env 5000
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
