<template>
    <div class="shortest-paths">

        <div class="display-block">
            <input type="number" v-model="width" class="map-size" min="2" max="20" :placeholder="'WIDTH' | translate">
            <input type="number" v-model="height" class="map-size" min="2" max="20" :placeholder="'HEIGHT' | translate">
        </div>

        <div class="display-block">
            <button class="btn btn-primary" @click="initMap()">{{ 'INIT' | translate }}</button>
            <button class="btn btn-primary" @click="populate()">{{ 'POPULATE' | translate }}</button>
        </div>

        <div class="map m-t-20">
            <div class="map-row display-block" v-for="(row, rowIndex) in renderedMap" :key="rowIndex">
                <div class="map-col map-loc display-inline-block" v-for="(col, colIndex) in row" :key="colIndex" @click="toggleBlocker(rowIndex, colIndex)">
                    {{ col }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShortestPaths',
    data: () => ({
        width: 2,
        height: 2,
        map: [],
    }),
    computed: {
        renderedMap() {
            return this.map;
        }
    },
    methods: {
        initMap() {
            this.$Path.setSize(this.width, this.height);
            this.$Path.initMap();
            this.map = this.$Path.map;
        },
        populate() {
            this.$Path.setSize(this.width, this.height);
            this.map = this.$Path.fillNumberOfShortestPaths();
            this.map = this.$Path.map;
        },
        toggleBlocker(rowIndex, colIndex) {
            this.$Path.toggleBlocker(rowIndex, colIndex);
            this.map = this.$Path.map;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.shortest-paths {
    input, button {
        margin: 4px;
    }
}

.map-row {
    overflow: hidden;
    height: 48px;
}

.map-loc {
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-overflow: ellipsis;
    overflow: hidden;
    background: rgba(122, 189, 234, 0.75);
    border: solid 1px #fff;
    color: #444;
    font-weight: 700;
    padding: 8px;
    font-size: 12px;
}
</style>
