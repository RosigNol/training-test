<template>
  <div
    class="card xs:h-24 xs:w-20 xs:justify-center xs:m-2 sm:h-26"
    style="height: 100%; background: #2D3092; border-radius: 15px; border: 4px solid white; justify-content: center;
    align-items: center;"
    :class="{'flipped' : active}"
    @click="clickHandler"
  >
  <div class=" h-full w-full front flex items-center justify-center">
    <div
      class="h-full w-full object-full xs:h-4/5 xs:w-4/5"
      style="width: 100%; height: 100%; color: white; padding: 10px;"
    >
        <div class="text-card-game"> {{card.text}} </div>
    </div>
  </div>
    <div
      class="h-full w-full back"
      style="background: #2D3092; width: 100%; height: 100%; border-radius: 15px; display: flex;
      justify-content: center;
      align-items: center;"
    >
        <!-- <div style="color: #D91378;
        font-size: 2em;
        font-weight: bold;
        padding: 5px 20px;
        background: white;
        border: solid;
        border-radius: 15px;"> {{card.id}} </div> -->
        <b-img :src="card.img_svg" style="width: 50%; height: 50%;"rounded alt="Rounded image"></b-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['card', 'active'],
  methods : {
    clickHandler(){
      if(!this.active){
        this.$emit('click', this.card);
      }
    }
  }
};
</script>

<style scoped>
.front {
  transform: rotateY(90deg);
  transition: all ease-in 0.2s;
  position: absolute;
}
.flipped .front {
  transform: rotateY(0deg);
  transition-delay: 0.2s;
}
.back {
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
}
.flipped .back {
  transform: rotateY(90deg);
  transition-delay: 0s;
}
</style>
