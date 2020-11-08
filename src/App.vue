<template>
  <Header />
  <router-view />
  <Rules />
  <RulesBtn />
</template>

<script>
  import { mapMutations } from 'vuex'

  import Header from "./components/Header";
  import Rules from "./components/Rules";
  import RulesBtn from "./components/RulesBtn";

  export default {
    components: {
      Header,
      Rules,
      RulesBtn,
    },
    created() {
      let score = this.$cookie.getCookie("score");
      if( score ) {
        this.setScore( score );
      }
    },
    methods: {
      ...mapMutations([
        'setScore',
      ])
    }
  }

</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap");

  $dark-text: hsl(229, 25%, 31%);
  $score-text: hsl(229, 64%, 46%);
  $header-outline: hsl(217, 16%, 45%);

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Barlow Semi Condensed", sans-serif;
    user-select: none;
  }

  #app {
    position: relative;
    background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    height: 100vh;
    width: 100vw;
    padding: 32px;
  }

  .picked-container {
    position: relative;
    width: 312px;
    height: 312px;
    margin: 100px auto 0;

    .choice:not(.ai-choice) {
      top: 0 !important;
      left: 0 !important;

      &.rock {
          bottom: auto;
          transform: translateX(0);
      }
    }
    
    .choice {
      div {
        position: relative;
      }

      div::after {
        display: block;
        position: absolute;
        bottom: -4em;
        left: 0;
        width: 135px;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        color: #FFF;
        letter-spacing: .15em;
        transform: translateX(-13%);
      }

      &:not(.ai-choice) div::after {
        content: "YOU PICKED";
      }

      &.ai-choice div::after {
        content: "THE HOUSE PICKED";
        width: 200px;
        transform: translateX(-25%);
      }
    }
  }

  button {
    transition: color 150ms linear, border 150ms linear;
    cursor: pointer;
  }
</style>
