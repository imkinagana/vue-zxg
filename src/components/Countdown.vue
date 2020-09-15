<template>
    <div id="countdown" v-if="loaded">
        <div class="timer days">
            <span>{{displayDays}}</span>
            <div class="label">days</div>
        </div>
        <div class="timer hours">
            <span>{{displayHours}}</span>
            <div class="label">hours</div>
        </div>
        <div class="timer minutes">
            <span>{{displayMinutes}}</span>
            <div class="label">minutes</div>
        </div>
        <div class="timer seconds">
            <span>{{displaySeconds}}</span>
            <div class="label">seconds</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Countdown",
        props: ["year", "month", "date", "hour", "minute", "second", "millisecond"],
        data: () => ({
            displayDays: 0,
            displayHours: 0,
            displayMinutes: 0,
            displaySeconds: 0,
            loaded: false,
            expired: false
        }),
        computed: {
            _seconds: () => 1000,
            _minutes() {
                return this._seconds * 60
            },
            _hours() {
                return this._minutes * 60
            },
            _days() {
                return this._hours * 24
            },
            end() {
                return new Date(
                    this.year,
                    this.month,
                    this.date,
                    this.hour,
                    this.minute,
                    this.second,
                    this.millisecond
                )
            }
        },
        mounted() {
            this.showRemaining();
        },
        methods: {
            formatNumber: number => (number < 10 ? "0" + number : number),

            showRemaining() {
                const timer = setInterval(() => {
                    const now = new Date();
                    now.setDate(now.getDate() + 30);
                    const end = new Date(2020, 9, 11, 0, 0, 0);
                    const distance = end.getTime() - now.getTime();

                    if (distance < 0) {
                        clearInterval(timer);
                        this.expired = true;
                        return
                    }

                    const days = Math.floor(distance / this._days);
                    const hours = Math.floor((distance % this._days) / this._hours);
                    const minutes = Math.floor((distance % this._hours) / this._minutes);
                    const seconds = Math.floor((distance % this._minutes) / this._seconds);
                    this.displaySeconds = this.formatNumber(seconds);
                    this.displayMinutes = this.formatNumber(minutes);
                    this.displayHours = this.formatNumber(hours);
                    this.displayDays = this.formatNumber(days);
                    this.loaded = true;
                }, 1000);
            }
        }
    }

</script>

<style lang="scss">
    #countdown {
        display: flex;
        align-content: center;
        text-align: center;

        .timer {
            padding: 10px;
            margin: 10px;
            font-family: Tahoma, Geneva, sans-serif;
            color: rgba(255, 255, 255, 1.0);

            span {
                font-size: 32px;
            }

            .label {
                font-size: 12px;
            }
        }
    }

    @media only screen and (max-width: 640px) {

    }
</style>