import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      msg: "hello pinia!",
      ips: ["127.0.0.1:3000", "0.0.0.0:3000", "127.0.0.1:3000"],
    };
  },
  getters: {},
  actions: {},
});
