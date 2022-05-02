import { Server, Response } from "miragejs";

export const getUsers = () => {
  return new Response(200, {}, ["user1", "user2"]);
};

export const startMockServer = (environment = "development") =>
  new Server({
    environment,
    routes() {
      // this.namespace = "api";
      this.get("http://some-dummy-api/api/users", getUsers);
    },
  });
