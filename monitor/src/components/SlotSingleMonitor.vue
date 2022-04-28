<template>
  <div id="holder">
    <div id="header">using {{ ip }} ...</div>

    <el-button @click="getFullInfo(ip)">强制刷新信息</el-button>
    <div v-for="(item, index) in out.data" :key="index">{{ item?.result }}</div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { reactive, toRef, onMounted } from "vue";
import type { fullInfo } from "@/types";

export default {
  name: "SlotSingleMonitor",
  props: {
    ip: String,
  },
  // eslint-disable-next-line
  setup(props: any) {
    const ip = toRef(props, "ip");
    let outRawData: { data: Array<fullInfo> } = {
      data: [],
    };
    // eslint-disable-next-line
    let out: any = reactive(outRawData);

    // 在挂载之后每过5000ms就自动询问信息
    onMounted(() => {
      getFullInfo(ip.value);
      setInterval(() => {
        getFullInfo(ip.value);
      }, 5000);
    });
    const getFullInfo = (ip: string) => {
      axios
        .get(ip + "/full", {
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
      getFullInfo,
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
