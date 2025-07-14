import { create, router as _router, defaults } from "json-server";
const server = create();
const router = _router("mock/db.json");
const middlewares = defaults();

server.use(middlewares);
server.use("/api", router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
