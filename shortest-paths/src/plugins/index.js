import Vue from 'vue'

var Path = {
    const: {
        UNAVAILBLE: -1
    },
    map: [],
    setSize: function(width, height) {
        this.width = width;
        this.height = height;
    },
    initMap: function() {
        if (!this.width || !this.height) {
            console.error("call setSize(width, height) to set size first")
            return;
        }

        this.map = [];
        for (var y = 0; y < this.height; y++) {
            var row = [];
            for (var x = 0; x < this.width; x++) {
                if (x == 0 || y == 0) {
                    row.push(1);
                } else {
                    row.push(0);
                }
            }
            this.map.push(row);
        }
        this.save();
    },
    initMapWithBlockers: function() {
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                if (
                    this.map[y][x] !== this.const.UNAVAILBLE &&
                    (x !== 0 && y !== 0)
                ) {
                    this.map[y][x] = 0;
                }
            }
        }
        this.save();
    },
    fillNumberOfShortestPaths: function() {
        for (var y = 0; y < this.map.length; y++) {
            for (var x = 0; x < this.map[y].length; x++) {
                if (this.map[y][x] === 0) {
                    if (this.map[y - 1][x] === this.const.UNAVAILBLE && this.map[y][x - 1] > 0) {
                        this.map[y][x] = this.map[y][x - 1];
                    } else if (this.map[y - 1][x] > 0 && this.map[y][x - 1] === this.const.UNAVAILBLE) {
                        this.map[y][x] = this.map[y - 1][x];
                    } else if (this.map[y - 1][x] === this.const.UNAVAILBLE && this.map[y][x - 1] === this.const.UNAVAILBLE) {
                        this.map[y][x] = 0;
                    } else {
                        this.map[y][x] = this.map[y - 1][x] + this.map[y][x - 1];
                    }
                }
            }
        }
        this.save();
    },
    toggleBlocker: function(rowIndex, colIndex) {
        var target = this.map[rowIndex][colIndex];
        this.map[rowIndex][colIndex] = (target === this.const.UNAVAILBLE ? 0 : this.const.UNAVAILBLE);
        this.initMapWithBlockers();
        this.fillNumberOfShortestPaths();
        this.save();
    },
    printMap: function() {
        var col = "";
        for (var y = 0; y < this.map.length; y++) {
            var row = "";
            for (var x = 0; x < this.map[y].length; x++) {
                row += this.map[y][x].toString() + "\t";
            }
            col += row + "\n";
        }
        console.log(col);
    },
    save: function() {
        var map = [];
        for (var y = 0; y < this.height; y++) {
            var row = [];
            for (var x = 0; x < this.width; x++) {
                row.push(this.map[y][x]);
            }
            map.push(row);
        }
        this.map = map;
    }
}

Path.install = function(Vue, options) {
    Vue.prototype.$Path = Path;
}

export default Path;