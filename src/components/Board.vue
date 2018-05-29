<template>
    <div>
        <h2 class="solved" v-if="isSolved">You Solved It!</h2>
        <div class="board-frame">
            <tile 
                v-for="tile in tilesArray" 
                :key="tile.id"
                :tile="tile"
                @clicked="moveTiles"
            >
            </tile>
        </div>
        <div @click="randomizeBoard" class="reset-board">Shuffle Board</div>
        
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
                { value: '1',     position: [1, 1] },
                { value: '2',     position: [1, 2] },
                { value: '3',     position: [1, 3] },
                { value: '4',     position: [2, 1] },
                { value: '5',     position: [2, 2] },
                { value: '6',     position: [2, 3] },
                { value: '7',     position: [3, 1] },
                { value: 'blank', position: [3, 2] },
                { value: '8',     position: [3, 3] }
            ],

            blankTile: {},
            isSolved: false
        }
    },

    methods: {
        // get current coordinates of the blank tile from the hardcoded array
        getBlankTile: function() {
            this.blankTile = this.tilesArray.find( tile => tile.value == 'blank');
        },

        checkIfValidMove: function(blankTile, clickedTile) {
            let blankCol = blankTile.position[0];
            let blankRow = blankTile.position[1];
            let clickedCol = clickedTile.position[0];
            let clickedRow = clickedTile.position[1];
            

            if( (blankCol === clickedCol) && (blankRow - clickedRow === 1 || blankRow - clickedRow == -1 )) {
                this.blankTile.value = clickedTile.value;
                clickedTile.value = 'blank';
                this.checkCorrectOrder(this.tilesArray);
            } else if ( (blankRow === clickedRow) && (blankCol - clickedCol === 1 || blankCol - clickedCol == -1 )) {
                this.blankTile.value = clickedTile.value;
                clickedTile.value = 'blank';
                this.checkCorrectOrder(this.tilesArray);         
            } else {
                console.log("Not valid move");      
            }

        },

        moveTiles: function(tileValue) {
            this.blankTile = this.tilesArray.find( tile => tile.value == 'blank');
            let clickedTile = this.tilesArray.find(tile => tile.value == tileValue);
            
            if ( this.checkIfValidMove(this.blankTile, clickedTile) ) {
                this.blankTile.value = clickedTile.value;
                clickedTile.value = 'blank';
                this.checkCorrectOrder(this.tilesArray)
            }
        },

        checkCorrectOrder: function(arr) { 
            const IN_ORDER = "1,2,3,4,5,6,7,8,blank";
            let currentOrder = arr.map( elem => elem.value).join();
            if (currentOrder === IN_ORDER) { this.isSolved = true }
        },

        randomizeBoard: function(arr) {
            arr.sort( () => Math.random() - 0.5 );
        }

    },

    mounted() {
        //this.randomizeBoard(this.tilesArray);
        this.getBlankTile();
    },
     
}
</script>

<style lang="scss">
    .board {
        &-frame {
            position: relative;
            width: 500px;
            height: 500px;
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
            outline: 1px solid gainsboro;
            font-size: 1.25rem;
            &:focus {
                outline: none;
            }
        }
    }
    .reset-board {
        text-align: center;
        margin: 0.5rem 0;
        color: black;
        border: 1px solid gainsboro;
        padding: 0.5rem;
        transition: all .3s;
        &:hover {
            background-color: whitesmoke;
            border: 1px solid whitesmoke;
            transition: all .3s;
        }
    }
</style>

