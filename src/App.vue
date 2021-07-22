<template>
  <div id="app">
    <router-view></router-view>

    <div class="copyright">
      <p>Developed by <a href="https://imkinagana.com" target="_blank">imkinagana</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', 'Lato', sans-serif;
  background-color: rgba(21, 21, 21, 1.0);
  color: rgba(255, 255, 255, 1.0);
}

#app {
  width: 100vw;
  min-height: 100vh;
  height: auto;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  overflow-x: hidden;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  .copyright {
    padding: 30px 0 30px 0;

    text-align: center;
    font-family: 'Open Sans', sans-serif;
    color: rgba(255, 255, 255, 1.0);

    p {
      a {
        color: rgba(255, 255, 255, 1.0);
        text-decoration: none;
        border: 2px solid rgba(255, 255, 255, 1.0);
        padding: 2px 5px;
      }

      a:hover {
        color: rgba(0, 0, 0, 1.0);
        border: 2px solid rgba(255, 255, 255, 1.0);
        background-color: rgba(255, 255, 255, 1.0);
        transition: 150ms;
      }
    }
  }
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background-color: rgba(21, 21, 21, 1.0);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 1.0);
}
</style>
