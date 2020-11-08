<template>
    <div class="rules-btn__container">
        <button @click="openRules()" class="rules-btn">RULES</button>
    </div>
</template>

<script>
  export default {
    methods: {
      openRules() {
        document.querySelector('.rules').classList.add('active');
      } 
    }
  }
</script>

<style lang="scss">
  $dark-text: hsl(229, 25%, 31%);
  $score-text: hsl(229, 64%, 46%);
  $header-outline: hsl(217, 16%, 45%);

  .rules-btn__container {
    text-align: center;
  }
    
  .rules-btn {
    position: relative;
    height: 44px; 
    width: 130px;
    margin: 125px 0 0;
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    color: rgba(255, 255 ,255, 0.9);
    outline: none;
    font-size: 18px;
    letter-spacing: .15em;
    z-index: 0;    

    &:hover {
        color: $header-outline;
        border-color: $header-outline;
    }

    @media only screen and (min-width: 1365px) {
        position: absolute;
        bottom: 32px;
        right: 32px;
    }
  }
</style>