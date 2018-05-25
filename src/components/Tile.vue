<template>
    <button 
        @click="getCoordinates()" 
        :class=" !tile.value ? 'blank' : 'board-tile'"   
        class="board-tile">

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
           if(this.tile.value) {
               return this.tile.value
           }  
        },    

        coordX: function () {
            return this.tile.position[0];
        },

        coordY: function () {
            return this.tile.position[1];
        },

        coordinates: function () {
            return `${this.coordX}, ${this.coordY}`
        }
    },

    methods: {
        getCoordinates: function() {
            console.log( this.coordinates );
        }     
    },
    
};
</script>

<style lang="scss" scoped>
    .board-tile {
        background-color: rgba(100,0,0, 0.3);
    }
    .blank {
        background-color: #10181F;
        color: gainsboro;    
    }
</style>

