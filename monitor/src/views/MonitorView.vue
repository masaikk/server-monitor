<template>
  <div id="mainMonitor">
    <h1>Monitor</h1>
    <h2>{{ msg }}</h2>
    <slot-single-monitor v-for="(ip, index) in ips" :key="index" :ip="ip">
    </slot-single-monitor>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { mainStore } from "@/store";
import { defineComponent } from "vue";
import slotSingleMonitor from "@/components/SlotSingleMonitor.vue";

export default defineComponent({
  name: "MonitorView",
  setup() {
    const store = mainStore();
    let { msg, ips } = storeToRefs(store);
    return {
      msg,
      ips,
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
</style>
