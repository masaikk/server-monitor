<template>
  <div id="holder">
    <div id="header">using {{ ip }} ...</div>
    <slot></slot>
    <div>{{ ip }}</div>
    <el-button @click="sendAxiosTest(ip)">click</el-button>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { toRef } from "vue";
// eslint-disable-next-line
import type { Ref } from "vue";

export default {
  name: "SlotSingleMonitor",
  props: {
    ip: String,
  },
  // eslint-disable-next-line
  setup(props: any) {
    const ip = toRef(props, "ip");
    const sendAxiosTest = (ip: string) => {
      axios
        .get("http://" + ip, {
          params: {},
        })
        .then((res) => {
          console.log(res);
        });
    };
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ip,
      sendAxiosTest,
    };
  },
};
</script>

<style scoped lang="less">
#holder {
  border: 2px dashed black;
  background: aquamarine;
  width: 50%;
  margin: 20px auto;
}
</style>
