<template>
  <div id="portal">
    <router-link :to="{ name: 'zxg'}">
      <img src="../assets/img/logo/zxg.png" alt="logo zxg">
    </router-link>
    <router-link :to="{ name: 'traphouserecord'}">
      <img src="../assets/img/logo/traphouserecord.png" alt="logo traphouserecord">
    </router-link>
    <router-link :to="{ name: 'starz'}">
      <img src="../assets/img/logo/starz.png" alt="logo starz">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Portal',
}
</script>

<style lang="scss">
#portal {
  display: flex;
  flex: 1 1 auto;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: auto;
    max-height: 10vh;
  }
}
</style>
