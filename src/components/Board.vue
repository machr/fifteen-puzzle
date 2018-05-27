<template>
    <div class="board-frame">
        <tile 
            v-for="tile in tilesArray" 
            :key="tile.id"
            :tile="tile"
            @clicked="moveTiles"
        >
        </tile>
    </div>
</template>

<script>
import Tile from './Tile';

export default {
    name: 'board',
    components: {
        Tile
    },
    data() {
        return {
            // TODO: create a function that makes a tilesArray with the given argument**2 (squared). For now:  Hardcode tiles in array
            tilesArray: [
                { value: '3',     position: [1, 1] },
                { value: '2',     position: [1, 2] },
                { value: '1',     position: [1, 3] },
                { value: '7',     position: [2, 1] },
                { value: '5',     position: [2, 2] },
                { value: '6',     position: [2, 3] },
                { value: '4',     position: [3, 1] },
                { value: '8',     position: [3, 2] },
                { value: 'blank', position: [3, 3] }
            ],

            blankTile: {}
        }
    },

    methods: {
        // get current coordinates of the blank tile from the hardcoded array
        getBlankTile: function() {
            this.blankTile = this.tilesArray.find( tile => tile.value == 'blank');
        },

        moveTiles: function(tileValue) {
            this.blankTile = this.tilesArray.find( tile => tile.value == 'blank');
            let clickedTile = this.tilesArray.find(tile => tile.value == tileValue);
            
            this.blankTile.value = clickedTile.value;
            clickedTile.value = 'blank';

            this.checkCorrectOrder(this.tilesArray)
        },

        checkCorrectOrder: function(arr) { 
            const IN_ORDER = "1,2,3,4,5,6,7,8,blank";
            let currentOrder = arr.map( elem => elem.value).join();

            if (currentOrder == IN_ORDER ) {
                console.log('you win');
            }
        }

    },

    mounted() {
        this.getBlankTile();
    },
     
}
</script>

<style lang="scss">
    .board {
        &-frame {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;

            border: 2px solid red;
        }
        &-tile {
            width: calc(100% / 3);
            height: 33.33%;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: 1px solid gainsboro;
            font-size: 1.25rem;
            &:focus {
                outline: none;
            }
        }
    }
</style>

