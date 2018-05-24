<template>
    <div class="board-frame">
        <tile>{{msg}}</tile>

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
            msg: 'Hi'
        }
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
        }
    }
</style>

