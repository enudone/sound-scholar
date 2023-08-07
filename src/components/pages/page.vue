<template>
  <div class="container">
    <StatusPanel
      :isTraining="state.isTraining"
      :firstNote="state.firstNote"
      :testNote="state.testNote"
      :testCount="state.testCount"
      :correctAnswerCount="state.correctAnswerCount"
      :testResult="state.testResult"
    />
    <Keyboard :firstNote="state.firstNote" @strike="strike" />
    <ControlPanel
      :transitionSpecification="state.transitionSpecification"
      :intervalRangeHigher="state.intervalRangeHigher"
      @startTraining="startTraining"
      @listenAgain="listenAgain"
      @changeTransitionSpecification="changeTransitionSpecification"
      @changeIntervalRangeHigher="changeIntervalRangeHigher"
    />
  </div>
</template>

<script>
import * as Tone from "tone";

import { defineComponent, reactive } from "vue";

import Keyboard from "/src/components/organisms/keyboard/keyboard.vue";
import StatusPanel from "/src/components/organisms/status-panel/status-panel.vue";
import ControlPanel from "/src/components/organisms/control-panel/control-panel.vue";

export default defineComponent({
  components: { Keyboard, StatusPanel, ControlPanel },
  setup(_props) {
    const state = reactive({
      isTraining: false,
      firstNote: "",
      testNote: "",
      transitionSpecification: "unspecified", // TODO: 定数を定義して利用する
      intervalRangeHigher: "8",
      testCount: 0,
      correctAnswerCount: 0,
      testResult: "",
    });

    // テストに使用する音のリスト
    const optionNoteList = [
      "C4",
      "D4",
      "E4",
      "F4",
      "G4",
      "A4",
      "B4",
      "C5",
      "D5",
      "E5",
      "F5",
      "G5",
      "A5",
      "B5",
      "C6",
    ]; // TODO: 定数を定義して利用する

    const synth = new Tone.Synth().toDestination();

    const startTraining = () => {
      // トレーニングを開始
      console.log("startTraining");
      state.isTraining = true;
      state.testResult = "";

      // TODO: キーボードを非活性にする

      setTestNotes();
      soundTestNotes(state.firstNote, state.testNote);

      // TODO: キーボードを活性にする
    };

    const listenAgain = () => {
      // トレーニング中ではない時は何もしない
      if (!state.isTraining) return;

      soundTestNotes(state.firstNote, state.testNote);
    };

    const setTestNotes = () => {
      // テストする音の跳躍の範囲 8で1オクターブ
      const intervalRangeHigher = parseInt(state.intervalRangeHigher, 10);

      const testNotesObj = selectTwoTestNotes(intervalRangeHigher);

      if (state.transitionSpecification === "ascent") {
        setTestNotesAscent(testNotesObj);
      } else if (state.transitionSpecification === "descent") {
        setTestNotesDescent(testNotesObj);
      } else {
        // ランダムで上昇・下降パターンを振り分ける
        const OneOrZero = Math.floor(Math.random() * 2);

        if (OneOrZero === 1) {
          setTestNotesAscent(testNotesObj);
        } else {
          setTestNotesDescent(testNotesObj);
        }
      }

      console.log(`testNotesObj`, testNotesObj);
      console.log(`state.firstNote`, state.firstNote);
      console.log(`state.testNote`, state.testNote);
    };

    // 音が上昇するパターン
    const setTestNotesAscent = (testNotesObj) => {
      state.firstNote = testNotesObj.lowerNote;
      state.testNote = testNotesObj.higherNote;
    };

    // 音が下降するパターン
    const setTestNotesDescent = (testNotesObj) => {
      state.firstNote = testNotesObj.higherNote;
      state.testNote = testNotesObj.lowerNote;
    };

    // テストする2音を度数の範囲指定の中から選択する
    const selectTwoTestNotes = (intervalRangeHigher) => {
      // テストする度数の配列を作成
      // - 範囲が1オクターブ(8)の場合、1~8の並びから1を除外した配列 [2, 3, 4, 5, 6, 7, 8] となる
      const digreeArray = [...Array(intervalRangeHigher).keys()]
        .map((i) => ++i)
        .slice(1);

      // テストする度数を取得
      const selectedDigree = getRandomElementFromArray(digreeArray);

      // テストする2音の内の低い音として設定できる音のリストを定義
      // - 範囲が1オクターブ(8)の場合、末尾から要素を7つ省く
      const sliceEndParamForLowerNote = -(selectedDigree - 1);
      const lowerNoteOptionList = optionNoteList.slice(
        0,
        sliceEndParamForLowerNote
      );

      // 低い音を取得
      const lowerNote = getRandomElementFromArray(lowerNoteOptionList);

      // 高い音を取得
      const lowerNoteIndex = optionNoteList.indexOf(lowerNote);
      const higherNote = optionNoteList[lowerNoteIndex + (selectedDigree - 1)];

      return {
        lowerNote,
        higherNote,
        selectedDigree,
      };
    };

    // 配列からランダムで1つを返す
    const getRandomElementFromArray = (array) => {
      const index = Math.floor(Math.random() * array.length);
      return array[index];
    };

    // 基準音とテスト音を鳴らす
    const soundTestNotes = (firstNote, testNote) => {
      const now = Tone.now();
      synth.triggerAttackRelease(firstNote, "8n", now);
      synth.triggerAttackRelease(testNote, "8n", now + 1);
    };

    const strike = (note) => {
      console.log(`note`, note);
      synth.triggerAttackRelease(note, "8n");

      if (state.isTraining === true) {
        checkNote(note);
      }
    };

    const checkNote = (note) => {
      console.log("checkNote");

      state.testCount++;

      if (note === state.testNote) {
        console.log("GOOD");
        state.correctAnswerCount++;
        state.testResult = "OK";
      } else {
        console.log("BAD");
        state.testResult = "NG";
      }

      // トレーニングを終了
      state.isTraining = false;
    };

    // 音の推移指定の変更
    const changeTransitionSpecification = (transitionSpecification) => {
      state.transitionSpecification = transitionSpecification;
      resetResult();
    };

    // 音の範囲指定の変更
    // TODO: 下限も設定できるようにする
    const changeIntervalRangeHigher = (intervalRangeHigher) => {
      state.intervalRangeHigher = intervalRangeHigher;
      resetResult();
    };

    const resetResult = () => {
      state.testCount = 0;
      state.correctAnswerCount = 0;
    };

    return {
      state,
      startTraining,
      listenAgain,
      changeTransitionSpecification,
      changeIntervalRangeHigher,
      strike,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  margin: 40px;
}
</style>