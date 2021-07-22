<template>
  <div id="authtraphouserecord">
    <div class="title">
      <img src="../../assets/img/logo/traphouserecord.png" alt="traphouserecord">
    </div>

    <div class="password">
      <p>Pour accéder aux fonctionnalités du site, <br>veuillez nous contacter sur Instagram</p>
      <a href="https://www.instagram.com/traphouse_record/" target="_blank"><span>@</span>Traphouse_Record</a>

      <form v-on:submit.prevent="validateBeforeSubmit">
        <input type="password" name="password" v-model.trim="password" placeholder="ENTRER LE CODE PIN">
        <button type="submit">ENTRER</button>
        <div class="error" v-if="error"><p>Code PIN incorrect</p></div>
      </form>
    </div>

    <div class="social">
      <a href="https://www.instagram.com/traphouse_record/" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
</template>

<script>
import storageHelper from 'storage-helper'
import router from "@/router";

export default {
  name: "AuthTraphouseRecord",
  data() {
    return {
      error: null,
      password: null,
    }
  },
  methods: {
    validateBeforeSubmit() {
      if (this.password === '99408326') {
        this.error = false
        storageHelper.setItem('password', this.password)
        router.push({name: 'traphouserecord-home'})
      } else {
        this.error = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#authtraphouserecord {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    text-align: center;
    margin: 20px;

    img {
      width: 80vw;
      max-width: 450px;
      height: auto;
    }
  }

  .password {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    width: 80vw;
    max-width: 450px;

    margin: 20px;
    padding: 20px;

    p {
      font-size: 12px;
      text-transform: uppercase;
    }

    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 1.0);
      font-weight: bold;

      span {
        color: rgba(255, 0, 0, 1.0);
      }
    }


    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      margin: 10px;

      input {
        max-width: 200px;
        padding: 10px;
        margin: 40px 0 10px 0;

        background-color: rgba(66, 66, 66, 0.2);
        color: rgba(255, 255, 255, 1.0);

        border: 1px solid rgba(66, 66, 66, 0.2);
        border-radius: 5px;

        text-align: center;
      }

      button {
        width: 100%;
        max-width: 200px;
        padding: 10px;

        background-color: rgba(66, 66, 66, 0.2);
        color: rgba(255, 255, 255, 1.0);

        border: 1px solid rgba(66, 66, 66, 0.2);
        border-radius: 5px;

        text-align: center;
      }

      .error {
        font-size: 12px;
        line-height: 12px;
      }

    }
  }

  .social {
    font-size: 44px;
    display: flex;
    justify-content: center;

    a {
      text-decoration: none;
      color: #fff;
      margin: 10px;
      padding: 10px;
    }
  }
}
</style>