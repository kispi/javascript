import Vue from 'vue'

var Path = {
    const: {
        UNAVAILBLE: -1
    },
    map: [],
    initMap: function(X, Y) {
        this.map = [];
        for (var y = 0; y < Y; y++) {
            var row = [];
            for (var x = 0; x < X; x++) {
                if (x == 0 || y == 0) {
                    row.push(1);
                } else {
                    row.push(0);
                }
            }
            this.map.push(row);
        }
    },
    fillNumberOfShortestPaths: function() {
        for (var y = 0; y < this.map.length; y++) {
            for (var x = 0; x < this.map[y].length; x++) {
                if (this.map[y][x] === 0) {
                    if (this.map[y - 1][x] === this.const.UNAVAILBLE && this.map[y][x - 1] > 0) {
                        this.map[y][x] = this.map[y][x - 1];
                    } else if (this.map[y - 1][x] > 0 && this.map[y][x - 1] === this.const.UNAVAILBLE) {
                        this.map[y][x] = this.map[y - 1][x];
                    } else {
                        this.map[y][x] = this.map[y - 1][x] + this.map[y][x - 1];
                    }
                }
            }
        }
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
    }
}

Path.install = function(Vue, options) {
    Vue.prototype.$Path = Path;
}

export default Path;