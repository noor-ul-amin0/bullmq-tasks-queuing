import express, { Express } from "express";
import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { ExpressAdapter } from "@bull-board/express";
import addJobs, { myQueue } from "./queue.server";

const app: Express = express();

const serverAdapter = new ExpressAdapter();
createBullBoard({
  queues: [new BullMQAdapter(myQueue)],
  serverAdapter: serverAdapter,
});
serverAdapter.setBasePath("/admin");

app.use("/admin", serverAdapter.getRouter());

(() => {
  addJobs()
    .then(() => console.log("Jobs added!"))
    .catch(console.log);
})();

app.listen(3000, () =>
  console.log("⚡️[server]: Server is running at http://localhost:3000")
);
