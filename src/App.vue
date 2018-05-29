<template>
  <div id="app">
    <h1>{{ msg}}</h1>
    <div class="container">
      <Board/>
    </div>
  </div>
</template>

<script>
import Board from './components/Board.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: '15 Puzzle'
    }
  },
  components: {
    Board
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #2c3e50;
    height: 100vh;
    width: 100vw;
  }


  .solved {
      color: black;
      text-align: center;
      background: yellow;
      padding: 0.5rem 0;
  }
  h1, h2 {
    margin: 0.5rem;
  }


</style>
