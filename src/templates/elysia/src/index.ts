import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => ({
    message: "Welcome to Elysia.js",
    status: "success"
  }))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);