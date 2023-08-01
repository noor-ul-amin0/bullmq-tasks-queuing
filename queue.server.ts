import { Job, Queue } from "bullmq";

// redis connection config
const connection = {
  host: "localhost",
  port: 6379,
};

export const myQueue = new Queue("foo", { connection });

export default async function addJobs() {
  await myQueue.add("myJobName", { foo: "bar" });
}
import { Worker } from "bullmq";

const worker = new Worker(
  "foo",
  async (job: Job) => {
    // Will print { foo: 'bar'} for the first job
    // and { qux: 'baz' } for the second.
    console.log(job.data);

    // you can perform you async or any tasks here.
    // e.g send emails, create logs, send notifications etc
    // emailService.sendEmail({to:job.data.to, subject:job.data.subject, text:job.data.text})
  },
  { connection }
);
worker.on("completed", (job) => {
  console.log(`${job.id} has completed!`);
});

worker.on("failed", (job, err) => {
  console.log(`${job} has failed with ${err.message}`);
});
