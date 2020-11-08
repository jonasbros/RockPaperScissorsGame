<template>
  <div class="picker">
    <router-link :to="{ name: 'Paper' }" class="choice paper">
        <div></div>
    </router-link>
    <router-link :to="{ name: 'Scissors' }" class="choice scissors">
        <div></div>
    </router-link>
    <router-link :to="{ name: 'Rock' }" class="choice rock">
        <div></div>
    </router-link>
  </div>
</template>

<script>

</script>

<style lang="scss">
    $dark-text: hsl(229, 25%, 31%);
    $score-text: hsl(229, 64%, 46%);
    $header-outline: hsl(217, 16%, 45%);

    .picker {
        position: relative;
        width: 312px;
        height: 312px;
        background-image: url(./../assets/images/bg-triangle.svg);
        background-size: 312px 80%;
        background-position: center;
        background-repeat: no-repeat;
        margin: 100px auto 0;
        
        @media only screen and (min-width: 1365px) {
            width: 480px;
            height: 432px;
        }
    }

    .choice {
        position: absolute;
        height: 135px;
        width: 135px;
        border-radius: 69%;
        padding: 18px;
        box-shadow: inset 0px -8px 2px 0px rgba(0, 0, 0, 0.25);
        margin: 0;

        @media only screen and (min-width: 1365px) {
            width: 200px;
            height: 200px;
            padding: 25px;
            box-shadow: inset 0px -9px 2px 0px rgba(0, 0, 0, 0.3);
        }

        div {
            background-color: #FFF;
            height: 100%;
            width: 100%;
            border-radius: 69%;
            box-shadow: inset 0px 5px 2px 0px rgba(0, 0, 0, 0.25);

            @media only screen and (min-width: 1365px) {
                background-size: 45%;
                box-shadow: inset 0px 8px 2px 0px rgba(0, 0, 0, 0.25);
            }
        }
        
        &.rock {
            background-image: linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);

            div {
                background-image: url(./../assets/images/icon-rock.svg);
                background-repeat: no-repeat;
                background-position: center;
            }

        }

        &.paper {
            background-image: linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));
                
            div {
                background-image: url(./../assets/images/icon-paper.svg);
                background-repeat: no-repeat;
                background-position: center;
            }
        }

        &.scissors {
            background-image: linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%));
            top: 0;
            right: 0;

            div {
                background-image: url(./../assets/images/icon-scissors.svg);
                background-repeat: no-repeat;
                background-position: center;
            }
        }
    }

</style>
