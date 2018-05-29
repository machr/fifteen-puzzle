<template>
    <button @click="getTileCoordinates()" class="board-tile"
            :class="{ 'blank': !showTileValue }"
    >
        {{ showTileValue }}
    </button>
</template>

<script>
export default {
    name: 'Tile',
    props: {
        'tile': Object
    },

    data() {
        return {
        }
    },

    computed: {
        showTileValue: function() {
           if(this.tile.value != 'blank') {
               return this.tile.value
           }  
        },
    },

    methods: {
        getTileCoordinates: function(event) {
            // send back tile's object (coordinates, value, position etc)
            this.$emit('clicked', this.tile.value)
        }     
    },
    
};
</script>

<style lang="scss" scoped>
    .board-tile {
        background-color: whitesmoke;
    }
    .blank {
        background-color: mistyrose;
    }
</style>

