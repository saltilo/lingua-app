import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("mock/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
