<template>
    <div class="AIChoice__container">
        <div class="choice rock ai-choice active">
            <div></div>
        </div>

        <div class="choice paper ai-choice">
            <div></div>
        </div>

        <div class="choice scissors ai-choice">
            <div></div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    props: [
        'pchoice',
    ],
    data: () => ({      
        number: 0,
        rollInterval: null,
    }),
    mounted() {
        this.roll();

        setTimeout( () => {
            clearInterval(this.rollInterval);
            this.results();
            console.log(this.pchoice);
            console.log(this.number);
            this.$cookie.setCookie("score", this.$store.state.score, { expire: '-1' });
        }, 1750);
    },
    methods: {
        roll() {
            let hands = document.querySelectorAll('.ai-choice');
            this.rollInterval = setInterval(() => {
                hands[this.number].classList.toggle('active');
                this.number = Math.floor(Math.random() * 3);
                hands[this.number].classList.toggle('active');
            }, 250);
        },
        results() {
            switch(true) {
                case this.pchoice == 0: //rock
                    if( this.number == 1 ) { 
                        //paper
                        this.lose();
                        this.changeResult('lose');
                    }else if( this.number == 2 ) {
                        //scissor
                        this.win();
                        this.changeResult('win');
                    }else if ( this.number == 0 ) {
                        //rock
                        this.changeResult('drew');
                    }
                break;

                case this.pchoice == 1: //paper
                    if( this.number == 2 ) { 
                        //scissor
                        this.lose();
                        this.changeResult('lose');
                    }else if( this.number == 0 ) {
                        //rock
                        this.win();
                        this.changeResult('win');
                    }else if ( this.number == 1 ) {
                        //paper
                        this.changeResult('drew');
                    }
                break;

                case this.pchoice == 2: //paper
                    if( this.number == 0 ) { 
                        //rock
                        this.lose();
                        this.changeResult('lose');
                    }else if( this.number == 1 ) {
                        //paper
                        this.win();
                        this.changeResult('win');
                    }else if ( this.number == 2 ) {
                        //scissors
                        this.changeResult('drew');
                    }
                break;
            }
        },
        ...mapMutations([
            'win',
            'lose',
            'changeResult',
        ])
    }
}
</script>

<style lang="scss">
    $dark-text: hsl(229, 25%, 31%);
    $score-text: hsl(229, 64%, 46%);
    $header-outline: hsl(217, 16%, 45%);

    .ai-choice {
        display: none;
        top: 0;
        right: 0;
        left: auto !important;
        transform: translate(0,0) !important;

        &.active {
            display: block;
        }
    }

</style>
