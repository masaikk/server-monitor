<template>
  <div id="holder">
    <div id="header">using {{ ip }} ...</div>
    <slot></slot>
    <div>{{ ip }}</div>
    <el-button @click="sendAxiosTest(ip)">click</el-button>
    <div v-for="(item, index) in out.data" :key="index">{{ item?.result }}</div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { reactive, toRef, onMounted } from "vue";
import type { fullInfo } from "@/types";
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
    let out: any = reactive({
      data: [],
    });
    onMounted(() => {
      setInterval(() => {
        sendAxiosTest(ip.value);
      }, 1000);
    });
    const sendAxiosTest = (ip: string) => {
      axios
        .get("http://" + ip + "/full", {
          params: {},
        })
        .then((res) => {
          console.log(res.data);
          out.data = res.data;
        });
    };

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ip,
      sendAxiosTest,
      out,
    };
  },
};
</script>

<style scoped lang="less">
#holder {
  border: 2px dashed black;
  background: aquamarine;
  width: 80%;
  margin: 20px auto;
}
</style>
