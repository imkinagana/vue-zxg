<template>
    <div id="waitingtimer">
        <div class="background"></div>
        <div class="fog-container">
            <div class="fog-img fog-img-first"></div>
            <div class="fog-img fog-img-second"></div>
        </div>

        <div class="content">
            <div class="title">
                <img src="../assets/img/2020.png" alt="2020">
            </div>
            <div class="logo">
                <img src="../assets/img/zxg.png" alt="zxg">
            </div>

            <Countdown
                    :year="2020"
                    :month="11"
                    :date="9"
                    :hour="0"
                    :minute="0"
                    :second="0"
                    :millisecond="0"
            />

            <div class="advisory">
                <img src="../assets/img/advisory.png" alt="advisory">
            </div>

            <div class="collaborators">
                <img src="../assets/img/666.png" alt="666">
                <img src="../assets/img/target.png" alt="groupe3">
                <img src="../assets/img/starz.png" alt="starz">
            </div>
        </div>

    </div>
</template>

<script>
    import Countdown from "@/components/Countdown";

    export default {
        name: "WaitingTimer",
        components: {
            Countdown
        }
    }
</script>

<style lang="scss" scoped>
    #waitingtimer {
        .background {
            z-index: -1000;
            position: absolute;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            background: url("../assets/img/background.png") no-repeat center;
            background-size: cover;
            overflow: hidden;
        }

        .fog-container {
            position: absolute;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            z-index: 1;

            .fog-img {
                position: absolute;
                width: 300vw;
                height: 100vh;
                z-index: 2;
            }

            .fog-img-first {
                background: url('../assets/img/fog-1.png') repeat-x center;
                background-size: contain;
                animation: marquee 90s linear infinite;
            }

            .fog-img-second {
                background: url('../assets/img/fog-2.png') repeat-x center;
                background-size: contain;
                animation: marquee 60s linear infinite;
            }

            @keyframes marquee {
                0% {
                    transform: translate3d(0, 0, 0);
                }

                100% {
                    transform: translate3d(-200vw, 0, 0);
                }
            }
        }

        .content {
            height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            .title {
                img {
                    padding: 20px;
                    height: 75px;
                }
            }

            .logo {
                img {
                    padding: 20px;
                    height: 100px;
                }
            }

            .advisory {
                img {
                    height: 100px;

                }
            }

            .collaborators {
                display: flex;

                img {
                    margin: 5px;
                    padding: 5px;
                    height: 50px;
                }
            }
        }
    }
</style>