<template>
  <div class="controlPanel">
    <div class="row">
      <div>推移指定</div>
      <div>
        <input
          type="radio"
          id="0"
          name="transitionSpecification"
          value="unspecified"
          :checked="transitionSpecification === 'unspecified'"
          @click="changeTransitionSpecification"
        />
        <label for="0">指定なし</label>

        <input
          type="radio"
          id="1"
          name="transitionSpecification"
          value="ascent"
          :checked="transitionSpecification === 'ascent'"
          @click="changeTransitionSpecification"
        />
        <label for="1">上昇のみ</label>

        <input
          type="radio"
          id="2"
          name="transitionSpecification"
          value="descent"
          :checked="transitionSpecification === 'descent'"
          @click="changeTransitionSpecification"
        />
        <label for="2">下降のみ</label>
      </div>
    </div>
    <div class="row">
      <div>範囲指定</div>
      <!-- TODO: value をステート管理する -->
      <select
        class="select"
        name="intervalRangeHigher"
        :value="intervalRangeHigher"
        @change="changeIntervalRangeHigher"
      >
        <option value="8">8度（1オクターブ）</option>
        <option value="7">7度</option>
        <option value="6">6度</option>
        <option value="5">5度</option>
        <option value="4">4度</option>
        <option value="3">3度</option>
      </select>
    </div>
    <div class="row buttonGroup">
      <button class="button" type="button" @click="startTraining">START</button>
      <button class="button" type="button" @click="listenAgain">
        LISTEN AGAIN
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  props: {
    transitionSpecification: {
      type: String,
      required: true,
    },
    intervalRangeHigher: {
      type: String,
      required: true,
    },
  },
  emits: [
    "startTraining",
    "listenAgain",
    "changeTransitionSpecification",
    "changeIntervalRangeHigher",
  ],
  setup(_props, context) {
    const startTraining = () => {
      context.emit("startTraining");
    };

    const listenAgain = () => {
      context.emit("listenAgain");
    };

    const changeTransitionSpecification = (ev) => {
      context.emit("changeTransitionSpecification", ev.target.value);
    };

    const changeIntervalRangeHigher = (ev) => {
      context.emit("changeIntervalRangeHigher", ev.target.value);
    };

    return {
      startTraining,
      listenAgain,
      changeTransitionSpecification,
      changeIntervalRangeHigher,
    };
  },
});
</script>

<style lang="scss" scoped>
.controlPanel {
  margin-top: 40px;

  .row {
    display: flex;
    align-items: center;
    gap: 32px;
    height: 32px;
    margin-top: 16px;

    &:first-of-type {
      margin-top: 0;
    }
  }

  .select {
    width: 180px;
    height: 32px;
    padding: 0 8px;
    font-size: 16px;
  }

  .buttonGroup {
    display: flex;
    gap: 16px;

    .button {
      width: 80px;
      height: 40px;
    }
  }
}
</style>