<template>
  <div id="copyright">
    <p>Developed by <a href="http://imkinagana.com" target="_blank">imkinagana</a> with <span class="heart"><i
        class="fas fa-heart"></i></span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Copyright"
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

#copyright {
  color: rgba(255, 255, 255, 1.0);
  font-family: 'Open Sans', sans-serif;

  margin: 25px;

  p {
    margin: 0;
    font-weight: 300;
  }

  a {
    color: inherit;
    text-decoration: inherit;
    font-weight: 600;
  }

  .heart {
    font-size: 22px;
    color: #b71540;
  }
}

@media only screen and (min-width: 640px) {

}

@media only screen and (min-width: 1224px) {
  #copyright {
    position: absolute;
    left: 0;
    bottom: 0;

    color: rgba(255, 255, 255, 1.0);
    font-family: 'Open Sans', sans-serif;

    margin: 20px;
    padding: 0 10px;

    p {
    }

    a {
    }

    .heart {
    }
  }
}
</style>