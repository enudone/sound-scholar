<template>
  <div class="octave">
    <div class="keyUnit">
      <KeyNote
        :note="'C' + octaveNumber"
        :firstNote="firstNote"
        @strike="strike"
      />
      <KeyNote
        class="keyBlackOuter"
        :note="'C#' + octaveNumber"
        :firstNote="firstNote"
        @strike="strike"
      />
    </div>
    <div class="keyUnit">
      <KeyNote
        :note="'D' + octaveNumber"
        :firstNote="firstNote"
        @strike="strike"
      />
      <KeyNote
        class="keyBlackOuter"
        :note="'D#' + octaveNumber"
        :firstNote="firstNote"
        @strike="strike"
      />
    </div>
    <div class="keyUnit">
      <KeyNote
        :note="'E' + octaveNumber"
        :firstNote="firstNote"
        @strike="strike"
      />
    </div>
    <div class="keyUnit">
      <KeyNote
        :note="'F' + octaveNumber"
        :firstNote="firstNote"
        @strike="strike"
      />
      <KeyNote
        class="keyBlackOuter"
        :note="'F#' + octaveNumber"
        :firstNote="firstNote"
        @strike="strike"
      />
    </div>
    <div class="keyUnit">
      <KeyNote
        :note="'G' + octaveNumber"
        :firstNote="firstNote"
        @strike="strike"
      />
      <KeyNote
        class="keyBlackOuter"
        :note="'G#' + octaveNumber"
        :firstNote="firstNote"
        @strike="strike"
      />
    </div>
    <div class="keyUnit">
      <KeyNote
        :note="'A' + octaveNumber"
        :firstNote="firstNote"
        @strike="strike"
      />
      <KeyNote
        class="keyBlackOuter"
        :note="'A#' + octaveNumber"
        :firstNote="firstNote"
        @strike="strike"
      />
    </div>
    <div class="keyUnit">
      <KeyNote
        :note="'B' + octaveNumber"
        :firstNote="firstNote"
        @strike="strike"
      />
    </div>
    <div v-if="hasHigherC" class="keyUnit">
      <KeyNote
        :note="'C' + (octaveNumber + 1)"
        :firstNote="firstNote"
        @strike="strike"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import KeyNote from "/src/components/organisms/keyboard/key-note.vue";

export default defineComponent({
  components: {
    KeyNote,
  },
  props: {
    octaveNumber: {
      type: Number,
      required: true,
    },
    hasHigherC: {
      type: Boolean,
      default: false,
    },
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
.octave {
  display: flex;
  gap: 4px;

  .keyUnit {
    position: relative;

    .keyBlackOuter {
      position: absolute;
      top: 0;
      left: 34px;
    }
  }
}
</style>