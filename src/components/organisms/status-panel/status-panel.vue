<template>
  <div class="statusPanel">
    <div>{{ firstNote }} → {{ testNoteDisplay }}</div>
    <div v-if="testResult == 'OK'">Great</div>
    <div v-if="testResult == 'NG'">Wrong</div>
    <div>正解数 {{ correctAnswerCount }} / {{ testCount }}</div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    isTraining: {
      type: Boolean,
      required: true,
    },
    firstNote: {
      type: String,
      required: true,
    },
    testNote: {
      type: String,
      required: true,
    },
    testCount: {
      type: Number,
      required: true,
    },
    correctAnswerCount: {
      type: Number,
      required: true,
    },
    testResult: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const testNoteDisplay = computed(() =>
      !!props.isTraining ? "?" : props.testNote
    );

    return { testNoteDisplay };
  },
});
</script>

<style lang="scss" scoped>
.statusPanel {
  display: flex;
  justify-content: space-between;
  width: 740px;
  height: 48px;
  padding: 16px;
  border: 2px solid #202020;
  color: #202020;
  font-size: 32px;
  font-weight: bold;
}
</style>