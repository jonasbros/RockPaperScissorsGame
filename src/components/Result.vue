<template>
    <div class="result">
        <h2>YOU {{ result }}</h2>

        <router-link :to="{ name: 'Home' }">
            <button>PLAY AGAIN</button>
        </router-link>        
    </div>
</template>

<script>
    export default {
        data: () => ({
            result: null,
        }),
        watch: {
            result(n) {
                if( n !== null ) {
                    document.querySelector('.result').classList.add('active');
                }
            }
        },
        created() {
            this.unsubscribe = this.$store.subscribe((mutation) => {
                if( mutation.type == 'changeResult' ) {
                    this.result = mutation.payload;
                }
            });
        },
        beforeUnmount() {
            this.unsubscribe();
        }
    }
</script>

<style lang="scss">
  $dark-text: hsl(229, 25%, 31%);
  $score-text: hsl(229, 64%, 46%);
  $header-outline: hsl(217, 16%, 45%);

  .result {
    display: none;
    position: absolute;
    width: 312px;
    bottom: -75px;
    left: 50%;
    transform: translateX(-50%);
    text-transform: uppercase;
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    color: #FFF;
    letter-spacing: .015em;

    button {
        height: 48px;
        width: 222px;
        border-radius: 10px;
        outline: none;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: .15em;
        color: $dark-text;
        border: none;

        &:hover {
            color: crimson;
        }

        @media only screen and (min-width: 1365px) {
            height: 50px;
        }
    }

    &.active {
        display: block;
    }
  }
</style>
