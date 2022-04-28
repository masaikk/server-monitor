import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      msg: "请在下方添加您的服务器ip及端口",
      ips: ["http://127.0.0.1:3000"],
    };
  },
  getters: {},
  actions: {},
});
