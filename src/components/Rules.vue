<template>
  <div class="rules">
    <h1>RULES</h1>

    <button class="desktop" @click="closeRules()">
        <img src="./../assets/images/icon-close.svg" alt="Close Rules!" draggable="false">
    </button>

    <img src="./../assets/images/image-rules.svg" alt="Rules!" draggable="false">

    <button class="mobile" @click="closeRules()">
        <img src="./../assets/images/icon-close.svg" alt="Close Rules!" draggable="false">
    </button>
  </div>
</template>

<script>
    export default {

        methods: {
            closeRules() {
              document.querySelector('.rules').classList.remove('active');
            }
        }
    }
</script>

<style lang="scss">
    $dark-text: hsl(229, 25%, 31%);
    $score-text: hsl(229, 64%, 46%);
    $header-outline: hsl(217, 16%, 45%);

    .rules {
        position: absolute;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 100px 0 67px 0;
        background-color: #fff;
        text-align: center;
        color: $dark-text;
        z-index: 1;
        opacity: 0;
        pointer-events: none;
        transition: opacity 90ms linear;

        @media only screen and (min-width: 1365px) {
            display: block;
            top: 50%;
            left: 50%;
            bottom: auto;
            right: auto;
            transform: translate(-50%, -50%);
            width: 418px;
            height: 418px;
            padding: 35px;
            border-radius: 10px;

            h1 {
                width: 50%;
                text-align: left;
                margin: 0;
                display: inline-block;
            }
        }

        &.active {
            opacity: 1;
            pointer-events: auto;
        }

        img {
            font-family: "Barlow Semi Condensed", sans-serif;
            height: 270px;
            width: 300px;
            margin: 0;

            @media only screen and (min-width: 1365px) {
                margin: 35px auto 0 auto;
            }
        }

        button {       
            height: 20px;
            width: 20px;
            background: transparent;
            border: none;
            outline: none;
            cursor: auto;

            img {
                height: 20px;
                width: 20px;
                transition: filter 150ms linear;
            }

            img:hover  {
                cursor: pointer;
                filter: brightness(20%);
            }
        }

        button.mobile {
            display: block;

            @media only screen and (min-width: 1365px) {
                display: none;
            }
        }

        button.desktop {
            display: none;
            width: 50%;
            text-align: right;     
        

            @media only screen and (min-width: 1365px) {
                display: inline-block;
            }

            img {
                margin: 0;            
            }
        }
    }
  
</style>
