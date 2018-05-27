<template>
    <div class="board-frame">
        <tile 
            v-for="tile in tilesArray" 
            :key="tile.id"
            :tile="tile"
            @clicked="getClickedTile" 
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
            tilesArray: [
                { value: '1',     position: [1, 1], moveable: false },
                { value: '2',     position: [1, 2], moveable: false },
                { value: '3',     position: [1, 3], moveable: false },
                { value: '4',     position: [2, 1], moveable: false },
                { value: '5',     position: [2, 2], moveable: false },
                { value: '6',     position: [2, 3], moveable: false },
                { value: '7',     position: [3, 1], moveable: false },
                { value: '8',     position: [3, 2], moveable: false },
                { value: null,    position: [3, 3], moveable: true }
            ],

            // TODO: create a function that makes a tilesArray with the given argument**2 (squared). For now:  Hardcode tiles in array
        
            activeTile: '',
            blankTile: ''
        }
    },

    methods: {
        // get current coordinates of the blank tile from the hardcoded array

        getBlankTile: function() {
        
            // Filter tilesArray for the blank tile with the value of null
            let blankTile = this.tilesArray.filter( tile => tile.value == null);
            // tilesArray.filter returns an Array with 1 element. Reassign blankTile to that only element.
            blankTile = blankTile[0];

            let col = blankTile.position[0];
            let row = blankTile.position[1];

            console.log( `Blank tile: ${ col }, ${ row }`);
            this.blankTile = `${ col }, ${ row }`;   
        },

        getClickedTile: function(value) {
            let clickedTileValue = value;
            console.log(`Active tile: ${clickedTileValue}`);
            this.activeTile = clickedTileValue
            
        },

        compareTiles: function() {
            // make computed properties for each
            blankTile: getBlankTile();
            activeTile: this.getActiveTile();
            console.log(`active tile: ${this.activeTile}, blank tile: ${getBlankTile}`)        
        }

        
    },

    mounted () {
     this.getBlankTile();
    },
     
}
</script>

<style lang="scss">
    .board {
        &-frame {
            height: 500px;
            width: 500px;
            border: 2px solid whitesmoke;
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
        }
        &-tile {
            width: calc(100% / 3);
            height: 33.33%;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid gainsboro;
            font-size: 1.25rem;
        }
    }
</style>

