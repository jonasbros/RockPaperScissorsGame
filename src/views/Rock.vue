<template>
    <Picked choice="rock" />

</template>

<script>
    import Picked from "./../components/Picked";

    export default {
        components: {
            Picked,
        }
    }
</script>

<style lang="scss">
  $dark-text: hsl(229, 25%, 31%);
  $score-text: hsl(229, 64%, 46%);
  $header-outline: hsl(217, 16%, 45%);
</style>
