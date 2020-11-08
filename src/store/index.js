import { createStore } from "vuex";

export default createStore({
  state: {
    score: 0,
    result: null,
  },
  mutations: {
    win(state) {
      state.score++;
    },
    lose(state) {
      if( state.score > 0 ) {
        state.score--;
      }
    },
    changeResult(state, newResult) {
      state.result == newResult;
    },
    setScore(state, newScore) {
      state.score = newScore;
    }
  },
  actions: {},
  modules: {}
});
