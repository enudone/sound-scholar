<template>
  <div class="keyboard">
    <Octave
      :octaveNumber="4"
      :hasHigherC="false"
      :firstNote="firstNote"
      @strike="strike"
    />
    <Octave
      :octaveNumber="5"
      :hasHigherC="true"
      :firstNote="firstNote"
      @strike="strike"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import Octave from "/src/components/organisms/keyboard/octave.vue";

export default defineComponent({
  components: { Octave },
  props: {
    firstNote: {
      type: String,
      required: true,
    },
  },
  emits: ["strike"],
  setup(_props, context) {
    const strike = (note) => {
      context.emit("strike", note);
    };

    return { strike };
  },
});
</script>

<style lang="scss" scoped>
.keyboard {
  margin-top: 40px;
  display: flex;
  gap: 4px;
}
</style>