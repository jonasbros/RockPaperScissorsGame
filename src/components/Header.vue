<template>
  <div class="header">
    <router-link :to="{ name: 'Home' }">
        <img src="./../assets/images/logo.svg" alt="Rock, Paper, Scissors" draggable="false"/>

    </router-link>

    <div class="score-card">
        <p>SCORE</p>
        <span class="score">{{ score }}</span>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        score() {
            return this.$store.state.score;
        }
    }
}
</script>

<style lang="scss">
    $dark-text: hsl(229, 25%, 31%);
    $score-text: hsl(229, 64%, 46%);
    $header-outline: hsl(217, 16%, 45%);

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 3px solid $header-outline;
        border-radius: 8px;
        padding: 12px;
        max-width: 704px;
        margin: 0 auto;

        @media only screen and (min-width: 1365px) {
            height: 155px;
        }
    }

    img {
        margin-left: 12px;
        width: 84px;
        height: 48px;

        @media only screen and (min-width: 1365px) {
            width: 158px;
            height: 92px;
        }
    }

    .score-card {
        color: $dark-text;
        text-align: center;
        background-color: white;
        height: 72px;
        width: 80px;
        border-radius: 5px;
        padding: 12px;

        @media only screen and (min-width: 1365px) {
            width: 152px;
            height: 115px;
            margin-right: 12px;
            padding: 24px;
            border-radius: 8px;
        }

         p {
            color: $score-text;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: .1em;
            margin-bottom: -5px;

            @media only screen and (min-width: 1365px) {
                font-size: 16px;
                margin-bottom: 0;
            }


         }

         span {
            font-size: 36px;
            font-weight: 700;

            @media only screen and (min-width: 1365px) {
                font-size: 46px;
                margin-bottom: 0;
            }
         }
    }

</style>
