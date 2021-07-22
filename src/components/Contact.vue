<template>
  <div id="contact">
    <div class="social">
      <h2><span>@</span>zxg_team</h2>
      <span>Compte officiel</span>
      <a href="https://instagram.com/zxg_team/" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
    <div class="social">
      <h2><span>@</span>traphouse_record</h2>
      <span>Compte officiel</span>
      <a href="https://instagram.com/traphouse_record/" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
    <div class="social">
      <h2><span>@</span>starzbeats</h2>
      <span>Producteur</span>
      <a href="https://instagram.com/starzbeats/" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
    <div class="social">
      <h2><span>@</span>imkinagana_</h2>
      <span>Développeur</span>
      <a href="https://instagram.com/imkinagana_/" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
}
</script>

<style lang="scss" scoped>
#contact {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .social {
    flex: 0 0 33%;
    min-width: 400px;
    margin: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      span {
        color: rgba(255, 0, 0, 1.0);
      }
    }

    a {
      text-decoration: none;
      color: #fff;
      margin: 10px;
      padding: 10px;

      i {
        font-size: 44px;
      }
    }
  }

}

</style>