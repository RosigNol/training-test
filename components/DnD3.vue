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
                    Задание 3. <br>
                    Квантовые профессии
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
          <b-row class="vw-100" style="padding: 10px 10px; margin: 0px 10px; justify-content: center;">
              <b-col cols="4" style=" display: flex;
              justify-content: center; align-items: center;">
                  <b-row style="width: 100%; align-items: center; display: flex; justify-content: center;
                 border-radius: 15px; border: 4px solid white; background: #FFD491;"
                 :style="column1.length == 1 ? 'background-image: linear-gradient(to right, rgb(4, 120, 21) 50%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%, rgb(4, 120, 21) 100%);' :
                 column1.length == 2 ? 'background: rgb(4, 120, 21); pointer-events: none;' : 'background: #FFD491;'">
                      <draggable v-model="columnFill" group="cards"
                      :style='"height: " + this.height / 4 + "px; width: 100%; border: 1px dashed; border-radius: 15px;"'
                      id="column1"
                      style="display: flex; justify-content: center; align-items: center;"
                      :options="{group:{ name:'cards',  pull:'clone', put:false }, sort: false }">
                          <div
                            class="text-title"
                            style="color: white; padding: 10px; color: black;
                            font-weight: bold; pointer-events: none; position: absolute;"
                          >
                              <div class="text-title"> Уже существуют </div>
                          </div>
                      </draggable>
                  </b-row>
              </b-col>
              <b-col cols="4" style=" display: flex;
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
                            style="color: white; padding: 10px; color: black;
                            font-weight: bold; pointer-events: none; position: absolute;"
                          >
                              <div class="text-title"> Скоро появятся </div>
                          </div>
                      </draggable>
                  </b-row>
              </b-col>
              <b-col cols="4" style="display: flex;
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
                            style="color: white; padding: 5px; color: black;
                            font-weight: bold; pointer-events: none; position: absolute;"
                          >
                              <div class="text-title"> Возможно, появятся </br> в будущем </div>
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
              :options="{group:{ name:'cards',  pull:'clone', put:false }, sort: false }">
                     <span v-for="card in cards"
                     :style='"margin: 10px 10px; height: " + height / 4.3 + "px; width: " + width / 5.5 + "px"'
                     style="background: #2D3092; width: 100%; height: 100%; border-radius: 15px;
                     justify-content: center; padding-top: 5px; color: white; cursor: pointer;
                     position: absolute;"
                     class="text-card text-card-3"
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
          <div style="font-size: 1.4em">Раздели профессии, связанные с квантовыми вычислениями, на разные категории. Какие-то из этих профессий уже есть, какие-то скоро появятся, а некоторые могут появиться только в далеком будущем.</div>
        </div>
        <b-button class="mt-3" style="background-color: #00184b" block @click="$bvModal.hide('bv-modal-tutor')">Понял!</b-button>
      </b-modal>

      <b-modal id="bv-modal-finish1" hide-footer hide-header v-model="show1" centered  @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center" @click="showModal1()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Да, эта профессия уже существует. По сути это ученый, который, используя знания и принципы квантовой механики, а также физические явления, происходящие на уровне малых частиц, работает над созданием квантовых устройств.</h5>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih2" hide-footer hide-header v-model="show2" centered @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center"  @click="showModal2()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Верно, это  эксперт по созданию и управлению элементами квантовых компьютеров на основе отдельных атомов и кластеров в твердотельной матрице, а также сетями квантовых коммуникаций. Такие специалисты будут очень нужны в ближайшие годы</h5>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih3" hide-footer hide-header v-model="show3" centered @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center" @click="showModal3()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Да, квантовая крипрография — это метод защиты коммуникаций, основанный на принципах квантовой физики</h5>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih4" hide-footer hide-header v-model="show4" centered @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center" @click="showModal4()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Да, эта профессия в скором времени будет очень востребована</h5>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih5" hide-footer hide-header v-model="show5" centered  @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center"  @click="showModal5()">
            <b-avatar src='~/assets/img/quant_gaz.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
            <h5>Верно! Об этом говорилось на конференции ICQT, которую организовал Российский квантовый центр и госкорпорация «Росатом» при поддержке Газпромбанка.</h5>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih6" hide-footer hide-header v-model="show6" centered  @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center" @click="showModal6()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Эх, было бы здорово, если бы такие люди существовали, но пока это лишь история в фильмах и фантастических книгах.</h5>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih7" hide-footer hide-header v-model="show7" centered  @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center" @click="showModal7()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Да, такой профессии еще нет, но кто знает, что нас ждет в будущем!</h5>
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
      show5: false,
      show6: false,
      show7: false,
      error: false,
      success: false,
      isDragging: false,
      cards: [
        { id: 1, col_id: 1, text: "Разработчик в области квантовых технологий", matched: false, img_svg: 'icon_mini.svg'},
        { id: 3, col_id: 2, text: "Специалист по управлению сетями квантовых коммуникаций", matched: false, img_svg: 'icon_mini.svg'},
        { id: 4, col_id: 1, text: "Специалист по квантовой криптографии", matched: false, img_svg: 'icon_mini.svg'},
        { id: 5, col_id: 3, text: "Исследователь параллельных измерений", matched: false, img_svg: 'icon_mini.svg'},
        { id: 6, col_id: 2, text: "Специалист по квантовому моделированию клиентского поведения", matched: false, img_svg: 'icon_mini.svg'},
        { id: 7, col_id: 3, text: "Специалист по телепортации", matched: false, img_svg: 'icon_mini.svg'},
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
            if (elem.text=="Разработчик в области квантовых технологий") {
                this.show1 = true
            }
            if (elem.text=="Специалист по квантовой криптографии") {
                this.show3 = true
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
              if (elem.text=="Специалист по управлению сетями квантовых коммуникаций") {
                  this.show2 = true
              }
              if (elem.text=="Квантовый технолог") {
                  this.show4 = true
              }
              if (elem.text=="Специалист по квантовому моделированию клиентского поведения") {
                  this.show5 = true
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
              if (elem.text=="Специалист по телепортации") {
                  this.show6 = true
              }
              if (elem.text=="Исследователь параллельных измерений") {
                  this.show7 = true
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
        this.$emit('endCardGame', this.score, 4);
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
    background-color: #1BBC60!important; color: white;
    pointer-events: none;
}

.sortable-ghost {
    /* opacity: 0; */
    /* transition-delay: 0.2s; */
}

.text-title{
    line-height: 1;
}


.active{
    display: none!important;
    pointer-events: none;
}

.text-card-3{
    display: flex;
    align-items: center;
}

</style>
