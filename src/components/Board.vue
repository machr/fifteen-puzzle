<template>
    <div class="board-frame">
        <tile v-for="tile in tilesArray" :key="tile.position">
            {{ tile.value }}
        </tile>
    </div>
</template>

<script>
import Tile from './Tile'
export default {
    name: 'board',
    components: {
        Tile
    },
    data(){
        return {
            msg: 'Hi',

            tilesArray: [
                { value: 1,  position: 1 },
                { value: 2,  position: 2 },
                { value: 3,  position: 3 },
                { value: 4,  position: 4 },
                { value: 5,  position: 5 },
                { value: 6,  position: 6 },
                { value: 7,  position: 7 },
                { value: 8,  position: 8 },
                { value: '', position: 9 }

            ]
        }
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
        }
    }
</style>

