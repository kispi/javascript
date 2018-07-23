<template>
    <div id="app">
        <ShortestPaths/>
    </div>
</template>

<script>
import ShortestPaths from './components/ShortestPaths'

export default {
    name: 'App',
    components: {
        ShortestPaths
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 16px;
}
</style>
