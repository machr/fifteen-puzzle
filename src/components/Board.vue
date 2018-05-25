<template>
    <div class="board-frame">
        <tile 
            v-for="tile in tilesArray" 
            :key="tile.id"
            :tile="tile" 
        >
        </tile>
    </div>
</template>

<script>

import makeMoves from '../lib/makeTileMoves';
import Tile from './Tile';

export default {
    name: 'board',
    components: {
        Tile
    },
    data() {
        return {

            // TODO: create a function that makes a tilesArray with the given argument**2 (squared)
            // For now:  Hardcode tiles in array
            tilesArray: [
                { value: '1',     position: [1, 1] },
                { value: '2',     position: [1, 2] },
                { value: '3',     position: [1, 3] },
                { value: '4',     position: [2, 1] },
                { value: '5',     position: [2, 2] },
                { value: '6',     position: [2, 3] },
                { value: '7',     position: [3, 1] },
                { value: '8',     position: [3, 2] },
                { value: null,    position: [3, 3] }
            ]
        }
    },

    mounted () {
        makeMoves(); // Should console.log if imported and called correctly
    }
     
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

