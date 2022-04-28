<template>
  <div id="mainMonitor" class="affix-container">
    <h1>Monitor</h1>
    <h2>{{ msg }}</h2>
    <el-affix target=".affix-container" :offset="80">
      <div id="ipsHolder">
        <div class="mt-4">
          <el-input
            v-model="inputIP"
            placeholder="请输入ip"
            class="input-with-select"
          >
            <template #prepend>
              <el-select
                v-model="selectHttp"
                placeholder="选择网络协议"
                style="width: 140px"
              >
                <el-option label="http://" value="http://" />
                <el-option label="https://" value="https://" />
              </el-select>
            </template>
            <template #append>
              <el-select
                v-model="selectAddr"
                placeholder="选择端口号"
                style="width: 115px"
              >
                <el-option label="3000" value="3000" />
                <el-option label="4000" value="4000" />
              </el-select>
            </template>
          </el-input>
        </div>
        <el-button @click="addIpAndAddr">添加ip及端口</el-button>
      </div>
    </el-affix>

    <slot-single-monitor v-for="(ip, index) in ips" :key="index" :ip="ip">
    </slot-single-monitor>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { mainStore } from "@/store";
import { defineComponent, ref } from "vue";
import type { Ref } from "vue";
import slotSingleMonitor from "@/components/SlotSingleMonitor.vue";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "MonitorView",
  setup() {
    const store = mainStore();
    let { msg, ips } = storeToRefs(store);
    const defaultIP = "127.0.0.1";
    let inputIP: Ref<string> = ref(defaultIP);
    let selectHttp: Ref<string> = ref("http://");
    let selectAddr: Ref<string> = ref("3000");
    const addIpAndAddr = () => {
      let needToAddIPAndAddr: string =
        selectHttp.value + inputIP.value + ":" + selectAddr.value;
      ElMessage({
        message: "添加" + needToAddIPAndAddr,
        type: "success",
      });
      store.ips.push(needToAddIPAndAddr);
    };
    return {
      msg,
      ips,
      addIpAndAddr,
      inputIP,
      selectHttp,
      selectAddr,
    };
  },
  components: {
    slotSingleMonitor,
  },
});
</script>

<style scoped lang="less">
#mainMonitor {
  //align-content: center;
}

#ipsHolder {
  display: flex;
  justify-content: space-around;
}
.affix-container {
  text-align: center;
  height: 600px;
  border-radius: 4px;
}
</style>
