<template>
  <div id="album2020">
    <div class="title">
      <img src="../assets/img/logo/2020.png" alt="2020">
    </div>

    <div class="profil">
      <div class="collaborator" v-for="artiste in artistes" :key="artiste.name">
        <div class="collaborator-avatar">
          <img :src="artiste.avatar">
        </div>
        <div class="collaborator-socials">
          <a :href="social.url" target="_blank" rel="noopener" v-for="social in artiste.socials" :key="social.name">
            <i class="fab" :class="social.name"></i>
          </a>
        </div>
        <div class="collaborator-details">
          <p>{{ artiste.name }}</p>
          <span>{{ artiste.location }}</span>
        </div>
      </div>
    </div>

    <div class="profil">
      <div class="founder collaborator" v-for="founder in founders" :key="founder.name">
        <div class="collaborator-avatar">
          <img :src="founder.avatar">
        </div>
        <div class="collaborator-socials">
          <a :href="social.url" target="_blank" rel="noopener" v-for="social in founder.socials" :key="social.name">
            <i class="fab" :class="social.name"></i>
          </a>
        </div>
        <div class="collaborator-details">
          <p>{{ founder.name }}</p>
          <span>{{ founder.location }}</span>
        </div>

        <div class="logo-starz">
          <img src="../assets/img/logo/starz.png" alt="starz">
        </div>
      </div>
    </div>

    <div class="album-links">
      <div class="album-link" v-for="albumLink in albumLinks" :key="albumLink.name">
        <a :href="albumLink.url" target="_blank"><i class="fab" :class="albumLink.name"></i></a>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "Album2020",
  data() {
    return {
      albumLinks: [
        {
          name: 'fa-spotify',
          url: 'https://open.spotify.com/album/1Zo5WtdscbYu3GsGVitc2K?si=TlDkTEbzRSeLIFefv75u3Q',
        },
        {
          name: 'fa-soundcloud',
          url: 'https://soundcloud.com/zxg_team/sets/zxg-2020',
        },
        {
          name: 'fa-apple',
          url: 'https://music.apple.com/us/album/zxg-2020/1531802853',
        }
      ],
      founders: [{
        name: 'starzbeats',
        location: 'lille, france',
        avatar: require('../assets/img/avatar/starzbeats.png'),
        socials: [
          {
            name: 'fa-instagram',
            url: 'https://instagram.com/starzbeats',
          },
          {
            name: 'fa-snapchat-ghost',
            url: 'https://www.snapchat.com/add/starzbeats',
          },
          {
            name: 'fa-soundcloud',
            url: 'https://soundcloud.com/starzbeats',
          },
        ]
      }],
      artistes: [
        {
          name: 'ajt_3pp',
          location: 'lyon, france',
          avatar: require('../assets/img/avatar/ajt_3pp.png'),
          socials: [
            {
              name: 'fa-youtube',
              url: 'https://www.youtube.com/channel/UCwdiYk2OfctJUSljbzalUmw',
            },
            {
              name: 'fa-instagram',
              url: 'https://instagram.com/ajt_3pp',
            },
            {
              name: 'fa-soundcloud',
              url: 'https://soundcloud.com/ajt3pp',
            },
          ]
        },
        {
          name: 'kiwiikush',
          location: 'lille, france',
          avatar: require('../assets/img/avatar/kiwiikush.png'),
          socials: [
            {
              name: 'fa-snapchat-ghost',
              url: 'https://www.snapchat.com/add/kiwiikush',
            },
            {
              name: 'fa-instagram',
              url: 'https://instagram.com/kiwiikush_',
            },
            {
              name: 'fa-soundcloud',
              url: 'https://soundcloud.com/kiwiikush-og',
            },
          ]
        },
        {
          name: 'leopurpp',
          location: 'lille, france',
          avatar: require('../assets/img/avatar/leopurpp.png'),
          socials: [
            {
              name: 'far fa-envelope',
              url: 'mailto:purpp2hl@gmail.com',
            },
            {
              name: 'fa-instagram',
              url: 'https://instagram.com/purpp19',
            },
            {
              name: 'fa-soundcloud',
              url: 'https://soundcloud.com/leopurpp',
            },
          ]
        },
        {
          name: 'br',
          location: 'perpignan, france',
          avatar: require('../assets/img/avatar/br.png'),
          socials: [
            {
              name: 'fa-instagram',
              url: 'https://instagram.com/br.izanagi',
            },
            {
              name: 'fa-soundcloud',
              url: 'https://soundcloud.com/br_izanagi',
            },
          ]
        },
        {
          name: 'arsaphe',
          location: 'lyon, france',
          avatar: require('../assets/img/avatar/arsaphe.png'),
          socials: [
            {
              name: 'fa-instagram',
              url: 'https://instagram.com/vrsaphe',
            },
            {
              name: 'fa-soundcloud',
              url: 'https://soundcloud.com/arsaphe',
            },
          ]
        },
        {
          name: 'broklessmvr',
          location: 'lyon, france',
          avatar: require('../assets/img/avatar/broklessmvr.png'),
          socials: [
            {
              name: 'fa-instagram',
              url: 'https://instagram.com/broklessmvar',
            },
            {
              name: 'fa-snapchat-ghost',
              url: 'https://snapchat.com/add/xv_spartiate',
            },
            {
              name: 'fa-twitter',
              url: 'https://twitter.com/kembe_n',
            },
          ]
        },
        {
          name: 'loki',
          location: 'lille, france',
          avatar: require('../assets/img/avatar/loki.png'),
          socials: [
            {
              name: 'fa-instagram',
              url: 'https://instagram.com/loki2hl',
            },
          ]
        },
        {
          name: 'sioux',
          location: 'marseille, france',
          avatar: require('../assets/img/avatar/sioux.png'),
          socials: [
            {
              name: 'fa-youtube',
              url: 'https://www.youtube.com/channel/UC_zWw7Pufq7CVuPDVcgZiaQ',
            },
            {
              name: 'fa-soundcloud',
              url: 'https://soundcloud.com/siouuxx',
            },
            {
              name: 'fa-instagram',
              url: 'https://instagram.com/so_sioux',
            },
          ]
        },
        {
          name: 'clone',
          location: 'marseille, france',
          avatar: require('../assets/img/avatar/clone.png'),
          socials: [
            {
              name: 'fa-youtube',
              url: 'https://www.youtube.com/channel/UC_zWw7Pufq7CVuPDVcgZiaQ',
            },
            {
              name: 'fa-soundcloud',
              url: 'https://soundcloud.com/siouuxx',
            },
            {
              name: 'fa-instagram',
              url: 'https://instagram.com/so_clone',
            },
          ]
        },
        {
          name: 'ouail',
          location: 'marseille, france',
          avatar: require('../assets/img/avatar/ouail.png'),
          socials: [
            {
              name: 'fa-instagram',
              url: 'https://instagram.com/slimiouail',
            },
            {
              name: 'fa-snapchat-ghost',
              url: 'https://www.snapchat.com/add/o-slimi',
            },
          ]
        },
        {
          name: 'shenzi',
          location: 'barcelone, espagne',
          avatar: require('../assets/img/avatar/shenzi.png'),
          socials: [
            {
              name: 'fa-youtube',
              url: 'https://www.youtube.com/channel/UCNOTkaYidd2siDvMRbdBQ0A',
            },
            {
              name: 'fa-soundcloud',
              url: 'https://soundcloud.com/shenzi-africa',
            },
            {
              name: 'fa-instagram',
              url: 'https://instagram.com/shenziafrica',
            },
          ]
        },
        {
          name: 'stlr',
          location: 'marseille, france',
          avatar: require('../assets/img/avatar/stlr.png'),
          socials: [
            {
              name: 'fa-soundcloud',
              url: 'https://soundcloud.com/stlr_kush_sama',
            },
            {
              name: 'fa-instagram',
              url: 'https://instagram.com/stlr_pharaon_nwar',
            },
          ]
        },
        {
          name: 's.low',
          location: 'marseille, france',
          avatar: require('../assets/img/avatar/s.low.png'),
          socials: [
            {
              name: 'fa-snapchat-ghost',
              url: 'https://www.snapchat.com/add/s.lowwww',
            },
            {
              name: 'fa-instagram',
              url: 'https://instagram.com/s.loww_',
            },
          ]
        },
        {
          name: 'elkaa',
          location: 'besancon, france',
          avatar: require('../assets/img/avatar/elkaa.png'),
          socials: [
            {
              name: 'fa-soundcloud',
              url: 'https://soundcloud.com/elkaaprod',
            },
            {
              name: 'fa-instagram',
              url: 'https://instagram.com/lx.k2a',
            },
          ]
        },
        {
          name: 'nana',
          location: 'lille, france',
          avatar: require('../assets/img/avatar/nana.png'),
          socials: [
            {
              name: 'fa-instagram',
              url: 'https://instagram.com/hakimpng',
            },
            {
              name: 'fa-twitter',
              url: 'https://twitter.com/gt1boiavantcsur',
            },
          ]
        },
        {
          name: 'climako',
          location: 'marseille, france',
          avatar: require('../assets/img/avatar/climako.png'),
          socials: [
            {
              name: 'fa-youtube',
              url: 'https://www.youtube.com/channel/UCcRBaJbS5sG9DMm-nMCAC2g',
            },
            {
              name: 'fa-instagram',
              url: 'https://instagram.com/climako.heyobi',
            },
            {
              name: 'far fa-envelope',
              url: 'mailto:heyobi.mgmt@gmail.com',
            },
          ]
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#album2020 {
  display: flex;
  flex-direction: column;
  max-width: 85vw;

  .title {
    margin: 60px 0;
    text-align: center;

    img {
      width: 80vw;
      max-width: 450px;
      height: auto;
    }
  }

  .profil {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .collaborator {
      flex: 0 auto;
      width: 400px;
      height: auto;

      margin: 25px 0;

      display: flex;
      align-items: center;

      .collaborator-avatar {
        img {
          width: 125px;
          height: auto;
          border-radius: 5px;
          border: 2px solid rgba(255, 255, 255, 1.0);
        }
      }

      .collaborator-socials {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        margin: 0 20px;

        a {
          text-decoration: none;
          color: rgba(255, 255, 255, 1.0);

          i {
            font-size: 28px;
          }
        }
      }

      .collaborator-details {

        p {
          margin: 0;
          padding: 0;

          font-family: "Lato", sans-serif;
          font-weight: bold;
          font-size: 18px;
          line-height: 20px;
          text-transform: uppercase;
        }

        span {
          font-family: "Caviar Dreams", sans-serif;
          font-size: 11px;
          line-height: 12px;
          text-transform: uppercase;
        }
      }
    }

    .founder {
      width: 400px;
      max-width: 400px;
      height: auto;
      margin: 100px 0;
      padding: 20px 30px;

      background-color: rgba(30, 30, 30, 1.0);
      border-radius: 10px;

      .logo-starz {
        margin: 0 20px;
        text-align: center;

        img {
          width: 50px;
          height: auto;
        }
      }
    }
  }

  .album-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .album-link {
      margin: 10px;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(255, 255, 255, 1.0);

        text-decoration: none;

        width: 75px;
        height: 75px;

        transition: 0.5s;

        i {
          font-size: 42px;
        }

      }
    }
  }
}
</style>