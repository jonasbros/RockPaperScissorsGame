<template>
    <div class="picked-container">
        <div class="choice" :class="[ choice ]">
            <div></div>
        </div>
        <Result />
        
        <AIChoice :pchoice="choiceNumber"/>
    </div>
</template>

<script>
    import Result from "./../components/Result";
    import AIChoice from "./../components/AIChoice";

    export default {
        components: {
            Result,
            AIChoice,
        },
        props: [
            'choice',
        ],
        computed: {
            choiceNumber() {
                if( this.choice == 'rock' ) {
                    return 0;
                }

                if( this.choice == 'paper' ) {
                    return 1;
                }

                return 2;
            }
        },
    }
</script>

<style lang="scss">
    $dark-text: hsl(229, 25%, 31%);
    $score-text: hsl(229, 64%, 46%);
    $header-outline: hsl(217, 16%, 45%);

    @media only screen and (min-width: 1365px) {
        .picked-container {        
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            width: 100%;
            height: 312px;
            margin: 145px auto 0;

            .choice {
                position: relative !important;
                width: 300px;
                height: 300px;
            }

            .choice:not(.ai-choice) {
                margin: 0 50px 0 auto !important;
            }

            .ai-choice {
                position: absolute !important;
            }

            div::after {
                left: 50% !important;
                top: -5.5em;
                width: 235px !important;
                font-size: 20px !important;
                transform: translateX(-50%) !important;
            }
            
        }

        .result {
            position: relative !important;
            width: 312px;
            transform: translateX(0) !important;
            left: 0;
            top: 50px;

            button {
                height: 48px;
                width: 222px;
            }
        }

        .AIChoice__container {
            position: relative;
            height: 300px;
            width: 300px;
            margin: 0 auto 0 50px;            
        }
    }


</style>
