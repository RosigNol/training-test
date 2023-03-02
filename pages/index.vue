<template>
  <training v-if='orientation=="landscape-primary"'/>
  <b-container v-else style="background: black;">
      <b-row class="vh-100 text-center" align-v="center" style="flex-direction: column;">
          <div style="margin:auto">
              <b-row style="margin:auto; justify-content: center;">
                  <div class="phone"/>
              </b-row>
              <b-row class="message">
                  Пожалуйста поверните Ваш девайс!
              </b-row>
          </div>
      </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      orientation: 'landscape-primary',
      componentKey: 0,
    }
  },

  created() {
    this.handleOrientationChange();
  },

  mounted() {
      window.addEventListener(
        "orientationchange",
        this.handleOrientationChange
      )
  },

  methods: {
    handleOrientationChange() {
      let orientation = window.screen.orientation.type
      if (orientation === "portrait-primary") {
        console.log('portrait-primary')
        this.orientation = "portrait-primary"
      } else if (orientation === "landscape-primary") {
        console.log('landscape-primary')
        this.orientation = "landscape-primary"
        // this.$nextTick(() => {
        //     this.forceRerender()
        // });
      }
   },

   forceRerender() {
      this.componentKey += 1;
   },

  },

}
</script>

<style>

.phone {
  height: 50px;
  width: 100px;
  border: 3px solid white;
  border-radius: 10px;
  animation: rotate 1.5s ease-in-out infinite alternate;
}

.message {
  color: white;
  font-size: 1em;
  margin-top: 40px;
}

@keyframes rotate {
  0% {
		transform: rotate(0deg)
	}
	50% {
		transform: rotate(-90deg)
	}
	100% {
		transform: rotate(-90deg)
	}
}

body {
    font-size: 2.8vh!important;
}

.text-card-game{
    font-size: 2.3vh!important;
}

.text-card-2{
    font-size: 2.3vh!important;
}

.text-card-4{
    font-size: 2.3vh!important;
}


@media only screen
and (min-device-width: 1000px)
and (max-device-width: 1100px)
and (orientation: landscape) {

    .text-card-game{
        font-size: 2.2vh!important;
    }

    .dialogName{
        font-size: 3vh!important;
    }

    .dialogText{
        font-size: 2.2vh!important;
    }

    .text-card-2{
        font-size: 2vh!important;
        padding-left: 3.5vw!important;
    }

    .text-card-3{
        font-size: 2vh!important;
        padding-left: 2vw!important;
    }

    .text-card-4{
        font-size: 2vh!important;
        padding-left: 4vw!important;
    }

    .text-card-5{
        font-size: 2vh!important;
    }

}

@media only screen
and (min-device-width: 1100px)
and (max-device-width: 1400px)
and (orientation: landscape) {

    .text-card-game{
        font-size: 2.2vh!important;
    }

    .dialogName{
        font-size: 3vh!important;
    }

    .dialogText{
        font-size: 2.2vh!important;
    }

    .text-card-2{
        font-size: 2vh!important;
        padding-left: 3vw!important;
    }

    .text-card-3{
        font-size: 2vh!important;
        padding-left: 3vw!important;
    }

    .text-card-4{
        font-size: 2vh!important;
        padding-left: 3vw!important;
    }

    .text-card-5{
        font-size: 2vh!important;
    }

}

@media only screen
and (min-device-width: 1366px)
and (max-device-width: 1500px) {
    .dialogName{
        font-size: 4vh!important;
    }

    .dialogText{
        font-size: 2.8vh!important;
    }
}

@media only screen
and (min-width: 1500px) {
    .dialogName{
        font-size: 3vh!important;
    }

    .dialogText{
        font-size: 2.8vh!important;
    }
}

</style>
