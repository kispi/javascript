<template>
    <div class="shortest-paths">
        <input type="number" v-model="width" class="map-size" min="1" max="20" :placeholder="'WIDTH' | translate">
        <input type="number" v-model="height" class="map-size" min="1" max="20" :placeholder="'HEIGHT' | translate">
        <button class="btn btn-primary" @click="populate()">{{ 'CREATE' | translate }}</button>
    </div>
</template>

<script>
export default {
    name: 'ShortestPaths',
    data: () => ({
        width: 1,
        height: 1,
    }),
    methods: {
        populate() {
            this.$Path.initMap(this.width, this.height);
            this.$Path.printMap();
            this.$Path.fillNumberOfShortestPaths();
            this.$Path.printMap();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    color: #42b983;
}
</style>
