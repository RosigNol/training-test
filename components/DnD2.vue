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
            font-weight: bold;
            margin-bottom: 10px;"
            class="vw-100"
            :style='this.height < 400 ? "height: " + this.height / 5 + "px" : ""'>

            <b-col cols="12" style="display: flex; justify-content: center; align-items: center;">
                <div style="position: absolute; cursor: pointer;" :style="'left:' + width/17 + 'px'" @click="$bvModal.show('bv-modal-tutor')">
                    <b-avatar src='~/assets/img/quantIcon.svg' :size="this.height / 9 + 'px'"></b-avatar>
                </div>
                <div>
                    Задание 2. <br>
                    Язык науки
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
          <b-row style="padding: 5px 10px; margin: 5px 0px; justify-content: center; width: 100%;">
              <b-col cols="3" style="
              display: flex;
              justify-content: center; align-items: center;">
                  <b-row style="width: 100%; align-items: center; display: flex; justify-content: center;
                  border-radius: 15px; border: 4px solid white; background: #FFD491;"
                  :style="column1.length == 1 ? 'background-image: linear-gradient(to right, rgb(4, 120, 21) 50%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%, rgb(4, 120, 21) 100%);' :
                  column1.length == 2 ? 'background: rgb(4, 120, 21); pointer-events: none;' : 'background: #FFD491;'">
                      <draggable v-model="columnFill" group="cards"
                      :style='"height: " + this.height / 4 + "px; width: 100%; border: 1px dashed; border-radius: 15px;"'
                      id="column1"
                      style="display: flex; justify-content: center; align-items: center;"
                      :options="{group:{ name:'cards',  pull:'clone', put:false }, sort: false }"
                      >
                          <div
                            class="text-title"
                            style="color: white; padding: 10px; color: black;
                            font-weight: bold; pointer-events: none; position: absolute;"
                          >
                              <div class="text-title"> Криптография </div>
                          </div>
                      </draggable>
                  </b-row>
              </b-col>
              <b-col cols="3" style="
              display: flex;
              justify-content: center; align-items: center;">
                  <b-row style="width: 100%; align-items: center; display: flex; justify-content: center;
                  border-radius: 15px; border: 4px solid white; background: #FFD491;"
                  :style="column2.length == 1 ? 'background-image: linear-gradient(to right, rgb(4, 120, 21) 50%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%, rgb(4, 120, 21) 100%);' :
                  column2.length == 2 ? 'background: rgb(4, 120, 21); pointer-events: none;' : 'background: #FFD491;'">
                      <draggable v-model="columnFill" group="cards"
                      :style='"height: " + this.height / 4 + "px; width: 100%; border: 1px dashed; border-radius: 15px;"'
                      id="column2"
                      style="display: flex; justify-content: center; align-items: center;"
                      :options="{group:{ name:'cards',  pull:'clone', put:false }, sort: false }">
                      <div
                        class="text-title"
                        style="color: white;  padding: 10px; color: black;
                        font-weight: bold; pointer-events: none; position: absolute;"
                      >
                          <div class="text-title"> Фармацевтика </div>
                      </div>
                      </draggable>
                  </b-row>
              </b-col>
              <b-col cols="3" style="
              display: flex;
              justify-content: center; align-items: center;">
                  <b-row style="width: 100%; align-items: center; display: flex; justify-content: center;
                  border-radius: 15px; border: 4px solid white; background: #FFD491;"
                  :style="column3.length == 1 ? 'background-image: linear-gradient(to right, rgb(4, 120, 21) 50%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%, rgb(4, 120, 21) 100%);' :
                  column3.length == 2 ? 'background: rgb(4, 120, 21); pointer-events: none;' : 'background: #FFD491;'">
                      <draggable v-model="columnFill" group="cards"
                      :style='"height: " + this.height / 4 + "px; width: 100%; border: 1px dashed; border-radius: 15px;"'
                      id="column3"
                      style="display: flex; justify-content: center; align-items: center;"
                      :options="{group:{ name:'cards',  pull:'clone', put:false }, sort: false }">
                      <div
                        class="text-title"
                        style="color: white;  padding: 5px; color: black;
                        font-weight: bold; pointer-events: none; position: absolute;"
                      >
                          <div class="text-title"> Компьютерное </br> моделирование </div>
                      </div>
                      </draggable>
                  </b-row>
              </b-col>
              <b-col cols="3" style="
              display: flex;
              justify-content: center; align-items: center;">
                  <b-row style="width: 100%; align-items: center; display: flex; justify-content: center;
                  border-radius: 15px; border: 4px solid white; background: #FFD491;"
                  :style="column4.length == 1 ? 'background-image: linear-gradient(to right, rgb(4, 120, 21) 50%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%, rgb(4, 120, 21) 100%);' :
                  column4.length == 2 ? 'background: rgb(4, 120, 21); pointer-events: none;' : 'background: #FFD491;'">
                      <draggable v-model="columnFill" group="cards"
                      :style='"height: " + this.height / 4 + "px; width: 100%; border: 1px dashed; border-radius: 15px;"'
                      id="column4"
                      style="display: flex; justify-content: center; align-items: center;"
                      :options="{group:{ name:'cards',  pull:'clone', put:false }, sort: false }">
                      <div
                        class="text-title"
                        style="color: white;  padding: 10px; color: black;
                        font-weight: bold; pointer-events: none; position: absolute;"
                      >
                          <div class="text-title"> Машинное </br> обучение </div>
                      </div>
                      </draggable>
                  </b-row>
              </b-col>
          </b-row>
          <!-- <b-row class="vw-100 vh-20" style="padding: 10px 10px; margin: 10px 10px; justify-content: center;"> -->
              <!-- <b-col cols="6">
                  <section id="drag" style="height: 100px;">
                     <div v-draggable.cards="cards[0]"
                     style="background: #2D3092; width: 100%; height: 100%; border-radius: 15px; display: flex;
                     justify-content: center;
                     align-items: center; color: white; cursor: pointer;">
                       {{ cards[0].text }}
                     </div>
                   </section>
              </b-col> -->

          <b-row class="vw-100" style="padding: 10px 10px; margin: 0px 10px; justify-content: center;" :style='"height: " + height / 4 + "px;"'>

              <draggable v-model="cards" @start="isDragging=true" @end="onEnd"  :key="cards.id"
              :style='"height: " + height / 2.5 + "px;"' style="width: 100%;  display: contents;"
              :options="{group:{ name:'cards',  pull:'clone',  put:false }, sort: false }">
                     <span v-for="card in cards"
                     :style='"margin: 10px 10px; height: " + height / 4.3 + "px; width: " + width / 5.5 + "px"'
                     style="background: #2D3092; width: 100%; height: 100%; border-radius: 15px;
                     justify-content: center; padding: 2px 3px; color: white; cursor: pointer;
                     position: absolute;"
                     class="text-card text-card-2"
                     v-bind:class="{ active: card.matched }"
                     >
                       <b-img :src="card.img_svg" :style="'width: 50%; height: 50%; position: absolute; left: -25%;'"rounded alt="Rounded image"></b-img>
                       <span style="padding-left: 4vw; padding-right: 1vw; text-align: left;"> {{ card.text }} </span>
                   </span>
           </draggable>
         </b-row>
         <!-- </b-row> -->
      </b-row>

      <b-modal id="bv-modal-tutor" hide-footer hide-header centered modal-class="about">
        <div class="d-block text-center">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <div style="font-size: 1.4em">
             Часто за сложными непонятными словами скрывается интересный мир. Попробуй сопоставить научное название разных задач и их примеры!
         </div>
        </div>
        <b-button class="mt-3" style="background-color: #00184b" block @click="$bvModal.hide('bv-modal-tutor')">Понял!</b-button>
      </b-modal>

      <b-modal id="bv-modal-finish1" hide-footer hide-header v-model="show1" @hidden="checkIfCompleted" centered modal-class="success">
        <div class="d-block text-center" @click="showModal1()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Верно. Криптогра́фия — наука о методах обеспечения конфиденциальности, целостности данных, аутентификации, шифрования.</h5>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih2" hide-footer hide-header v-model="show2"  @hidden="checkIfCompleted" centered modal-class="success">
        <div class="d-block text-center"  @click="showModal2()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Все правильно! Фармацевтическая промышленность — отрасль промышленности, связанная с исследованием, разработкой, массовым производством, изучением рынка и распределением лекарственных средств, преимущественно предназначенных для профилактики, облегчения и лечения болезней.</h5>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih3" hide-footer hide-header v-model="show3"  @hidden="checkIfCompleted" centered modal-class="success">
        <div class="d-block text-center" @click="showModal3()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Правильно. Компьютерное моделирование — процесс создания компьютерной модели, который реализует представление объекта, системы, понятия в форме, отличной от реальной, но приближенной к алгоритмическому описанию.</h5>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih4" hide-footer hide-header v-model="show4"  @hidden="checkIfCompleted" centered modal-class="success">
        <div class="d-block text-center" @click="showModal4()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Верно! Машинное обучение — класс методов искусственного интеллекта, характерной чертой которых является не прямое решение задачи, а обучение за счет применения решений множества сходных задач.</h5>
        </div>
      </b-modal>


      <b-modal id="bv-modal-error" hide-footer hide-header v-model="error" centered modal-class="error">
        <div class="d-block text-center" @click="error=false">
            <b-avatar src='~/assets/img/quant_sad.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Неправильно, попробуй еще раз!</h5>
        </div>
      </b-modal>

      <b-modal id="bv-modal-success" hide-footer hide-header @hidden="end" centered modal-class="success">
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

import draggable from 'vuedraggable'
export default {
  name: "App",
  components: {
    draggable,
  },
  data() {
    return {
        height: document.documentElement.clientHeight < document.documentElement.clientWidth ? document.documentElement.clientHeight : document.documentElement.clientWidth,
        width: document.documentElement.clientHeight > document.documentElement.clientWidth ? document.documentElement.clientHeight : document.documentElement.clientWidth,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      error: false,
      success: false,
      isDragging: false,
      cards: [
        { id: 1, col_id: 1, text: "Методы создания паролей и шифров", matched: false, img_svg: 'icon_mini.svg'},
        { id: 2, col_id: 3, text: "Создание моделей реальных объектов, например машины", matched: false, img_svg: 'icon_mini.svg'},
        { id: 3, col_id: 4, text: "Создание моделей и алгоритмов, направленных на улучшение способностей компьютера", matched: false, img_svg: 'icon_mini.svg'},
        { id: 4, col_id: 3, text: "Имитация реальных процессов на компьютере", matched: false, img_svg: 'icon_mini.svg'},
        { id: 5, col_id: 2, text: "Производство лекарственных средств", matched: false, img_svg: 'icon_mini.svg'},
        { id: 6, col_id: 2, text: "Производство лекарственных веществ на промышленных предприятиях", matched: false, img_svg: 'icon_mini.svg'},
        { id: 7, col_id: 4, text: "Использование данных и алгоритмов для имитации человеческого мышления", matched: false, img_svg: 'icon_mini.svg'},
        { id: 8, col_id: 1, text: "Способы обеспечения конфиденциальности", matched: false, img_svg: 'icon_mini.svg'},
      ],
      villagers: [],
      firstPick: null,
      secondPick: null,
      turns: 0,
      done: false,
      columnFill: [],
      column1: [],
      column2: [],
      column3: [],
      column4: [],
      score: 0
    };
  },
  methods: {

      send1: function (index) {
        let elem = this.cards[index];
        console.log('ELEM: ', elem, index)
        if (elem.col_id==1){
            this.column1.push(elem);
            this.cards[index].matched = true;
            console.log('column1: ', this.column1)
            if (this.column1.length == 2) {
                this.show1 = true
            }
        } else {
            this.error = true;
            this.score++
        }

      },

      onEnd: function(evt, node) {
          window.console.log(evt, evt.to.id, evt.oldIndex);
          switch (evt.to.id) {
              case "column1":
                this.send1(evt.oldIndex)
                break;
              case "column2":
                this.send2(evt.oldIndex)
                break;
              case "column3":
                this.send3(evt.oldIndex)
                break;
              case "column4":
                this.send4(evt.oldIndex)
                break;
            }
      },

      send2: function (index) {
          let elem = this.cards[index];
          console.log('ELEM: ', elem, index)
          if (elem.col_id==2){
              this.column2.push(elem);
              this.cards[index].matched = true;
              console.log('column2: ', this.column1)
              if (this.column2.length == 2) {
                  this.show2 = true
              }
          } else {
              this.error = true;
              this.score++
          }
      },

      send3: function (index) {
          let elem = this.cards[index];
          console.log('ELEM: ', elem, index)
          if (elem.col_id==3){
              this.column3.push(elem);
              this.cards[index].matched = true;
              console.log('column3: ', this.column1)
              if (this.column3.length == 2) {
                  this.show3 = true
              }
          } else {
              this.error = true;
              this.score++
          }
      },

      send4: function (index) {
          let elem = this.cards[index];
          console.log('ELEM: ', elem, index)
          if (elem.col_id==4){
              this.column4.push(elem);
              this.cards[index].matched = true;
              console.log('column4: ', this.column1)
              if (this.column4.length == 2) {
                  this.show4 = true
              }
          } else {
              this.error = true;
              this.score++
          }
      },



    checkIfCompleted(){
      console.log("checkIfCompleted", this.cards)
      if(this.cards.every(card => card.matched))
      {
          // setTimeout(() => {
            console.log("bv-modal-success")
            this.$bvModal.show('bv-modal-success')
        // }, 1000);
      }
    },


    end(){
        this.$emit('endCardGame', this.score, 3);
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
    showModal4(){
        this.show3=false;
    },

    setData(dataTransfer) {
        dataTransfer.setDragImage(document.createElement('div'), 0, 0);
    }
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


.active{
    display: none!important;
    pointer-events: none;
}

.text-card-2{
    display: flex;
    align-items: center;
}

.sortable-ghost {
    /* opacity: 0; */
}

.text-title{
    line-height: 1;
}

</style>
