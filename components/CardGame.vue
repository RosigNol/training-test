<template>
  <b-container fluid style="background: #00223F; padding: 0px;">
      <b-row class="vh-100 vw-100 text-center" align-v="center" style="flex-direction: column; justify-content: center;">
          <b-row style="color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 2em;
            font-weight: bold;"
            class="vw-100">

            <b-col cols="12" style="display: flex; justify-content: center; align-items: center;">
                <div style="position: absolute; cursor: pointer;" :style="'left:' + width/17 + 'px'" @click="$bvModal.show('bv-modal-tutor')">
                    <b-avatar src='~/assets/img/quantIcon.svg' :size="this.height / 9 + 'px'"></b-avatar>
                </div>
                <div>
                    Задание 1. <br>
                    Принципы квантовой механики
                </div>
            </b-col>

          </b-row>
          <!-- <b-row class="vw-100 vh-50" style="background: grey; padding: 10px 10px; margin: 10px 10px;">
            <b-col class="vw-30 vh-10" :style='"margin: 10px 10px; height: " + this.height / 4 + "px"'>
                <Card :number="1" :text="asd"/>
            </b-col>
            <b-col class="vw-30 vh-10" :style='"margin: 10px 10px; height: " + this.height / 4 + "px"'>2</b-col>
            <b-col class="vw-30 vh-10" :style='"margin: 10px 10px; height: " + this.height / 4 + "px"'>3</b-col>
          </b-row>
          <b-row class="vw-100 vh-50"  style="background: white; padding: 10px 10px; margin: 10px 10px;">
            <b-col class="vw-30 vh-10" :style='"margin: 10px 10px; height: " + this.height / 4 + "px"'>4</b-col>
            <b-col class="vw-30 vh-10" :style='"margin: 10px 10px; height: " + this.height / 4 + "px"'>5</b-col>
            <b-col class="vw-30 vh-10" :style='"margin: 10px 10px; height: " + this.height / 4 + "px"'>6</b-col>
          </b-row> -->
          <b-row class="vw-100 vh-50" style="padding: 10px 10px; margin: 10px 10px; justify-content: center;" :class="!active ? 'no-click' : ''">
              <Card
                :style='"margin: 10px 10px; height: " + height / 4 + "px; width: " + width / 3.5 + "px"'
                v-for="villager in villagers"
                :key="villager.id"
                :card="villager"
                @click="handleClick"
                :active="
                  firstPick === villager || secondPick === villager || villager.matched
                "
              />
         </b-row>
      </b-row>

      <b-modal id="bv-modal-tutor" centered  hide-footer hide-header modal-class="about">
        <div class="d-block text-center">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <div style="font-size: 1.4em">Чтобы пройти дальше, надо открыть все карточки. Там есть пары - название принципа и его определение. Открой все карточки по очереди и найди верные пары! Если тебе понадобится помощь, я рядом. Просто нажми на моё изображение в углу экрана!</div>
        </div>
        <b-button class="mt-3" style="background-color: #00184b" block @click="$bvModal.hide('bv-modal-tutor')">Понял!</b-button>
      </b-modal>

      <b-modal id="bv-modal-finish1" centered  hide-footer hide-header v-model="show1"  @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center" @click="showModal1()">
          <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
              :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
          ></b-avatar>
          <h3>Верно! Это один из основных принципов для квантовой физики!</h3>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih2" centered  hide-footer hide-header v-model="show2"  @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center"  @click="showModal2()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h3>Правильно! Принцин суперпозиции формулируется так именно для квантовой физики. Для других областей науки вы можете встретить разные формулировки!</h3>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih3" centered  hide-footer hide-header v-model="show3"  @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center" @click="showModal3()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h3>Точно! Это интереснейший эксперимент, который давно используется в литературе, популярных статьях и даже стал мемом!</h3>
        </div>
      </b-modal>

      <b-modal id="bv-modal-error" centered  hide-footer hide-header v-model="error" modal-class="error">
        <div class="d-block text-center" @click="error=false">
            <b-avatar src='~/assets/img/quant_sad.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h3>Попробуй еще раз найти пару!</h3>
        </div>
      </b-modal>

      <b-modal id="bv-modal-success" centered  hide-footer hide-header @hidden="end" modal-class="success">
        <div class="d-block text-center" @click="$bvModal.hide('bv-modal-success')">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h3>Молодец! Идем дальше!</h3>
        </div>
      </b-modal>
  </b-container>

</template>


<script>
export default {
  name: "App",
  data() {
    return {
        height: document.documentElement.clientHeight < document.documentElement.clientWidth ? document.documentElement.clientHeight : document.documentElement.clientWidth,
        width: document.documentElement.clientHeight > document.documentElement.clientWidth ? document.documentElement.clientHeight : document.documentElement.clientWidth,
      show1: false,
      show2: false,
      show3: false,
      error: false,
      success: false,
      cards: [
        { card_id: 1, text: "Неопределенность Гейзенберга", finsih: "Верно! Это один из основных принципов для квантовой физики", img_svg: 'icon_example.svg'},
        { card_id: 2, text: "Принцип суперпозиции в квантовой физике", finish: "Правильно! Принцин суперпозиции формулируется так именно для квантовой физики. Для других областей науки вы можете встретить разные формулировки", img_svg: 'icon_example.svg'},
        { card_id: 1, text: "Чем точнее измеряется одна характеристика частицы, тем менее точно можно измерить вторую", finsih: "Верно! Это один из основных принципов для квантовой физики", img_svg: 'icon_example.svg'},
        { card_id: 3, text: "Мысленный эксперимент Шредингера", finish: "Точно! Это интереснейших эксперимент, который давно используется в литературе, популярных статьях и даже стал мемом", img_svg: 'icon_example.svg'},
        { card_id: 3, text: "Если над ядром атома не производится наблюдение, то его состояние описывается смешением двух состояний — распавшегося ядра и нераспавшегося ядра", finish: "Точно! Это интереснейших эксперимент, который давно используется в литературе, популярных статьях и даже стал мемом", img_svg: 'icon_example.svg' },
        { card_id: 2, text: "Если частица может достигать данного состояния двумя возможными путями, то общая амплитуда процесса представляет собой сумму амплитуд для обоих путей, рассматриваемых в отдельности", finish: "Правильно! Принцин суперпозиции формулируется так именно для квантовой физики. Для других областей науки вы можете встретить разные формулировки", img_svg: 'icon_example.svg'},
      ],
      villagers: [],
      firstPick: null,
      secondPick: null,
      turns: 0,
      done: false,
      active: true,
      score: 0,
    };
  },
  methods: {
    handleClick(card) {
      this.firstPick ? (this.secondPick = card) : (this.firstPick = card);
      if (this.firstPick && this.secondPick) {
        if (this.firstPick.card_id === this.secondPick.card_id) {
          const ind1 = this.villagers.indexOf(card);
          const ind2 = this.villagers.indexOf(this.firstPick);
          this.villagers[ind1].matched = true;
          this.villagers[ind2].matched = true;
          this.resetActiveTrue();
          switch (this.villagers[ind1].card_id) {
              case 1:
                this.show1 = true;
                break;
              case 2:
                this.show2 = true;
                break;
              case 3:
                this.show3 = true;
                break;
            }
        } else {
            this.resetActive();
            this.score++
        }
        this.turns++;
      }
    },
    resetActive() {
      this.active = false;
      setTimeout(() => {
        this.error = true;
        this.firstPick = null;
        this.secondPick = null;
        this.active = true;
    }, 3000);
    },
    resetActiveTrue() {
      setTimeout(() => {
        this.firstPick = null;
        this.secondPick = null;
    }, 500);
    },
    shuffle() {
      this.villagers.sort(() => Math.random() - 0.5);
    },
    checkIfCompleted(){
      console.log("checkIfCompleted", this.villagers)
      if(this.villagers.every(villager => villager.matched))
      {
          // setTimeout(() => {
            console.log("bv-modal-success")
            this.$bvModal.show('bv-modal-success')
        // }, 1000);
      }
    },
    resetGame(){
      this.firstPick = null;
      this.secondPick = null;
      this.turns = 0;
      this.done = false;
      this.villagers.forEach(v => v.matched = false);
      setTimeout(() => {
        this.shuffle();
      }, 3000);
    },
    end(){
        this.$emit('endCardGame', this.score, 2);
    },
    showModal1(){
        this.show1=false;
    },
    showModal2(){
        this.show2=false;
    },
    showModal3(){
        this.show3=false;
    },
  },
  mounted() {
    this.villagers = [...this.cards].map(
      (villager, index) => ({
        ...villager,
        matched: false,
        id: index,
      })
    );
  },
};
</script>

<style scoped>

/deep/ .about > .modal-dialog > .modal-content{
    border-image: linear-gradient(to right,#2fadff,#9215f1)!important;
    -moz-border-image: -moz-linear-gradient(to right,#2fadff,#9215f1)!important;
    -webkit-border-image: -webkit-linear-gradient(to right,#2fadff,#9215f1)!important;
    border-image-slice: 1!important;
    background: linear-gradient(125deg,#165487,#04042e);
    color: white;
    border: 4px solid;
}

/deep/ .error > .modal-dialog > .modal-content{
    border-image: linear-gradient(to right,#2fadff,#9215f1)!important;
    -moz-border-image: -moz-linear-gradient(to right,#2fadff,#9215f1)!important;
    -webkit-border-image: -webkit-linear-gradient(to right,#2fadff,#9215f1)!important;
    border-image-slice: 1!important;
    background-image: linear-gradient(315deg,#00184b,#c60f73)!important;
    color: white;
    border: 4px solid;
}

/deep/ .success > .modal-dialog > .modal-content{
    border-image: linear-gradient(to right,#2fadff,#9215f1)!important;
    -moz-border-image: -moz-linear-gradient(to right,#2fadff,#9215f1)!important;
    -webkit-border-image: -webkit-linear-gradient(to right,#2fadff,#9215f1)!important;
    border-image-slice: 1!important;
    background-image: linear-gradient(315deg,#00184b,#19b25f)!important;
    color: white;
    border: 4px solid;
}

.no-click{
    pointer-events: none;
}


</style>
