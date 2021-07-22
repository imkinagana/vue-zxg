<template>
  <div id="hometraphouserecord">
    <div class="details">
      <div class="detail">
        <div class="title">
          <div class="title-left">
            <h1>Enregistrement</h1>
            <h2>Rode NT1</h2>
          </div>
          <div class="title-right">
            <img src="../../assets/img/icon/microphone.png" alt="">
          </div>
        </div>
        <div class="tarifs">
          <div class="tarif">
            <span>1H00</span>
            <span>10€</span>
          </div>
          <hr>
          <div class="tarif">
            <span>2H00</span>
            <span>15€</span>
          </div>
          <hr>
          <div class="tarif">
            <span>3H00</span>
            <span>20€</span>
          </div>
          <hr>
          <div class="tarif">
            <span>4H00</span>
            <span>25€</span>
          </div>
        </div>
      </div>
      <div class="detail">
        <div class="title">
          <div class="title-left">
            <h1>Mixage / Mastering</h1>
            <h2>Mix. by<img src="../../assets/img/logo/starz.png" alt="">STARZBEATS</h2>
          </div>
          <div class="title-right">
            <img src="../../assets/img/icon/mixer.png" alt="">
          </div>
        </div>
        <div class="tarifs">
          <div class="tarif">
            <span>SOLO</span>
            <span>15€</span>
          </div>
          <hr>
          <div class="tarif">
            <span>FEAT</span>
            <span>25€</span>
          </div>
        </div>
      </div>
      <div class="detail">
        <div class="title">
          <div class="title-left">
            <h1>Instru / Beats</h1>
            <h2>Prod. by<img src="../../assets/img/logo/starz.png" alt="">STARZBEATS</h2>
          </div>
          <div class="title-right">
            <img src="../../assets/img/icon/piano.png" alt="">
          </div>
        </div>
        <div class="tarifs">
          <div class="tarif">
            <span>SIMPLE</span>
            <p>WAV / MP3 / MP4</p>
            <span>40€</span>
          </div>
          <hr>
          <div class="tarif">
            <span>EXCLU</span>
            <p>Projet FL Studio <img src="../../assets/img/icon/fl-studio.png" alt=""></p>
            <span>50€</span>
          </div>
        </div>
      </div>
      <div class="logo-traphouserecord">
        <img src="../../assets/img/logo/traphouserecord.png" alt="logo-traphouserecord">
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "HomeTraphouseRecord",
}
</script>

<style lang="scss" scoped>
#hometraphouserecord {

  .details {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;


    .detail {
      margin: 20px;
      max-width: 475px;
      flex: 1 1 50%;

      .title {
        position: relative;
        top: 20px;
        width: 75%;
        padding: 15px;
        background-color: rgba(33, 33, 33, 1.0);

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .title-left {
          h1 {
            text-transform: uppercase;
            font-size: 1em;
            line-height: 28px;
            font-weight: 500;
            margin: 0;
            padding: 0;
          }

          h2 {
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            margin: 0;
            padding: 0;
            text-transform: uppercase;
            color: rgba(155, 155, 155, 1.0);

            img {
              position: relative;
              top: 2px;
              width: auto;
              height: 12px;
              padding: 0 5px;
            }
          }
        }

        .title-right {
          img {
            width: 38px;
            height: auto;
          }
        }
      }

      .tarifs {
        display: flex;
        flex-direction: column;

        background-color: rgba(84, 84, 84, 0.8);

        padding: 40px 20px 20px 20px;

        hr {
          width: 100%;
          border-left: 1px solid rgba(255, 255, 255, 1.0);
          border-right: 1px solid rgba(255, 255, 255, 1.0);
          border-radius: 5px;
        }

        .tarif {
          display: flex;
          justify-content: space-between;
          align-items: center;

          span {
            font-size: 14px;
            line-height: 28px;
            text-transform: uppercase;
            font-weight: 600;
          }

          p {
            font-size: 10px;
            line-height: 16px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.9);

            img {
              position: absolute;
              width: 16px;
              height: auto;
            }
          }
        }
      }
    }

    .logo-traphouserecord {
      margin: 10px;
      width: 50%;
      max-width: 500px;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin: 20px;
        width: 80vw;
        max-width: 450px;
        height: auto;
      }
    }
  }

}

</style>