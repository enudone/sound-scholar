<template>
  <div class="key" :class="[color, { isFirstNote }]" @click="strike" />
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    note: {
      type: String,
      required: true,
    },
    firstNote: {
      type: String,
      required: true,
    },
  },
  emits: ["strike"],
  setup(props, context) {
    const color = computed(() =>
      props.note.includes("#") ? "black" : "white"
    );

    const isFirstNote = computed(() => props.note === props.firstNote);

    const strike = () => {
      context.emit("strike", props.note);
    };

    return { color, isFirstNote, strike };
  },
});
</script>

<style lang="scss" scoped>
.key {
  box-sizing: border-box;
  border: 1px solid darkgray;
  border-radius: 8px;

  &.isFirstNote {
    background-color: #ccffcc;
  }

  &:hover {
    background-color: #ccffff;
  }

  &:active {
    background-color: #66ffff;
  }
}

.white {
  z-index: 1;
  width: 48px;
  height: 144px;
}

.black {
  z-index: 2;
  width: 32px;
  height: 96px;
  background-color: lightgray;
}
</style>