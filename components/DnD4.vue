<template>
  <b-container fluid style="background: #00223F; padding: 0px;">
      <b-row class="vh-100 vw-100 text-center" align-v="center" style="justify-content: center;">
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
            <!-- <b-col cols="2" @click="$bvModal.show('bv-modal-tutor')">
                <b-avatar src="https://placekitten.com/300/300" size="4rem"></b-avatar>
            </b-col> -->

            <b-col cols="12" style="display: flex; justify-content: center; align-items: center;">
                <div style="position: absolute; cursor: pointer;" :style="'left:' + width/17 + 'px'" @click="$bvModal.show('bv-modal-tutor')">
                    <b-avatar src='~/assets/img/quantIcon.svg' :size="this.height / 9 + 'px'"></b-avatar>
                </div>
                <div>
                    Задание 4. <br>
                    Принципы работы квантового компьютера
                </div>
            </b-col>

          </b-row>
          <b-row class="vw-100" style="padding: 10px 10px; margin: 0px 10px; justify-content: center;">

              <b-col cols="6">

                  <draggable v-model="cards" @start="isDragging=true" @end="isDragging=false" @change="onMove"  :key="cards.id"
                  :style='"height: " + height / 5 + "px;"' style="width: 100%;  display: contents;"
                  :options="{group:{ name:'cards' }, sort: false }">
                         <span v-for="card in cards"
                         :style='"margin-bottom: 5px; height: " + height / 9.5 + "px;"'
                         style="background: #2D3092; width: 100%; height: 100%; border-radius: 15px;
                         justify-content: center; align-items: center; padding-top: 2px; color: white; cursor: pointer;
                         display: flex; line-height: 1.3; padding: 2px 3px;  position: relative; z-index: 1;"
                         class="text-card-4"
                         >
                           <b-img :src="card.img_svg" :style="'width: 50%; height: 50%; position: absolute; left: -25%;'"rounded alt="Rounded image"></b-img>
                           <span style="padding-left: 3vw; padding-right: 1vw; text-align: left;"> {{ card.text }} </span>
                       </span>

               </draggable>
              </b-col>
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
              <b-col cols="6" style="display: flex;
              justify-content: center; align-items: center;"
              >
                  <b-row style="width: 100%; align-items: center; display: flex; justify-content: center;
                  border-radius: 15px; border: 4px solid white; background: #4D9AC8;"
                  :style="'height: '+ height/1.39 + 'px;'">
                      <draggable v-model="columnFill" group="cards"
                      :style="'height: '+ height/1.41 + 'px; width: 100%; border: 1px dashed white; border-radius: 15px;'"
                      id="column1"
                      :options="{group:{ name:'cards', put:false }, sort: false }">
                          <div v-for="card in column1"
                          :style='"margin-bottom: 5px; height: " + height / 9.5 + "px;"'
                          style="background: #2D3092; width: 100%; height: 100%; border-radius: 15px;
                          justify-content: center; align-items: center; color: white; cursor: pointer;
                          display: flex; padding: 2px 3px; pointer-events: none;
                          position: relative; z-index: 1; line-height: 1.3;"
                          class="text-card-4"
                          v-bind:class="{ active: card.matched }"
                          >
                            {{ card.text }}
                        </div>
                        <div>
                            <div
                              class="text-title"
                              style="color: white; font-size: 1.5em;
                              font-weight: bold; pointer-events: none; position: absolute;
                              margin-left: auto; margin-right: auto; left: 0; right: 0; top: 50%; text-align: center; z-index: 0;"
                            >
                                <div class="text-title"> Перенеси ответ сюда </div>
                            </div>
                        </div>
                      </draggable>
                  </b-row>
              </b-col>

          </b-row>
      </b-row>

      <b-modal id="bv-modal-tutor" hide-footer hide-header centered modal-class="about">
        <div class="d-block text-center">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <div style="font-size: 1.4em">Перед тобой квантовый компьютер! Давай проверим, сможешь ли ты собрать принципы его работы. Перетаскивай нужные принципы вправо к изображению компьютера.</div>
        </div>
        <b-button class="mt-3" style="background-color: #00184b" block @click="$bvModal.hide('bv-modal-tutor')">Понял!</b-button>
      </b-modal>

      <b-modal id="bv-modal-finish1" hide-footer hide-header v-model="show1" centered @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center" @click="showModal1()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Все верно! Квантовая система — система запутанных квантовых объектов, обладающая следующими свойствами:</h5>
          <ul>
              <li>Квантовая система находится в суперпозиции всех возможных состояний объектов, из которых она состоит.</li>
              <li>Нельзя узнать состояние системы до момента измерения.</li>
              <li>В момент измерения система реализует один из возможных вариантов своих граничных состояний.</li>
          </ul>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih2" hide-footer hide-header v-model="show2" centered @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center"  @click="showModal2()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Правильно! При  этом вентили бывают однокубитные и двухкубитные, в зависимости от того, над сколькими кубитами производится преобразование.</h5>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih3" hide-footer hide-header v-model="show3" centered  @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center" @click="showModal3()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Да, это действительно так!</h5>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih4" hide-footer hide-header v-model="show4" centered  @hidden="checkIfCompleted" modal-class="error">
        <div class="d-block text-center" @click="showModal4()">
            <b-avatar src='~/assets/img/quant_sad.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Нет, так работает обычный компьютер. Квантовый использует аналоговый, вероятностный принцип.</h5>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih5" hide-footer hide-header v-model="show5" centered  @hidden="checkIfCompleted" modal-class="error">
        <div class="d-block text-center"  @click="showModal5()">
            <b-avatar src='~/assets/img/quant_sad.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Нет, это значения обычного бита, его использует стандартный компьютер.</h5>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih6" hide-footer hide-header v-model="show6" centered  @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center" @click="showModal6()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h5>Да, правильно! Именно так работает квантовый компьютер.</h5>
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
      error: false,
      success: false,
      isDragging: false,
      cards: [
        { id: 1, col_id: 1, text: "Квантовый компьютер в качестве носителей информации использует квантовые объекты, для проведения вычислений они должны быть соединены в квантовую систему", matched: false, img_svg: 'icon_mini.svg'},
        { id: 2, col_id: 1, text: "Для операций над кубитами используется система операций, называемая квантовыми вентилями", matched: false, img_svg: 'icon_mini.svg'},
        { id: 3, col_id: 1, text: "Существуют универсальные наборы вентилей, с помощью которых можно выполнить любое квантовое вычисление", matched: false, img_svg: 'icon_mini.svg'},
        { id: 4, col_id: 2, text: "Квантовый компьютер работает на цифровом, детерминированном принципе", matched: true, img_svg: 'icon_mini.svg'},
        { id: 5, col_id: 2, text: "При квантовых вычислениях кубит может принимать значения 0 и 1", matched: true, img_svg: 'icon_mini.svg'},
        { id: 6, col_id: 1, text: "Для получения результата работы квантового компьютера надо многократно запустить квантовый алгоритм на одном и том же входном наборе данных и усреднить результат", matched: false, img_svg: 'icon_mini.svg'},
      ],
      cardsOrg: [
        { id: 1, col_id: 1, text: "Квантовый компьютер в качестве носителей информации использует квантовые объекты, для проведения вычислений они должны быть соединены в квантовую систему", matched: false, img_svg: 'icon_mini.svg'},
        { id: 2, col_id: 1, text: "Для операций над кубитами используется система операций, называемая квантовыми вентилями", matched: false, img_svg: 'icon_mini.svg'},
        { id: 3, col_id: 1, text: "Существуют универсальные наборы вентилей, с помощью которых можно выполнить любое квантовое вычисление", matched: false, img_svg: 'icon_mini.svg'},
        { id: 4, col_id: 2, text: "Квантовый компьютер работает на цифровом, детерминированном принципе", matched: true, img_svg: 'icon_mini.svg'},
        { id: 5, col_id: 2, text: "При квантовых вычислениях кубит может принимать значения 0 и 1", matched: true, img_svg: 'icon_mini.svg'},
        { id: 6, col_id: 1, text: "Для получения результата работы квантового компьютера надо многократно запустить квантовый алгоритм на одном и том же входном наборе данных и усреднить результат", matched: false, img_svg: 'icon_mini.svg'},
      ],
      villagers: [],
      firstPick: null,
      secondPick: null,
      turns: 0,
      done: false,
      columnFill: [],
      column1: [],
      score: 0
    };
  },
  methods: {

      send1: function (elem) {
        let item = this.cardsOrg.find(el => el.id == elem.id)
        const ind1 = this.cardsOrg.indexOf(item);
        console.log('ELEM: ', elem, ind1)
        if (elem.col_id==1){
            this.column1.push(elem);
            this.cardsOrg[ind1].matched = true;
            console.log('column1: ', this.column1)
            if (elem.id==1) {
                this.show1 = true
            }
            if (elem.id==2) {
                this.show2 = true
            }
            if (elem.id==3) {
                this.show3 = true
            }
            if (elem.id==6) {
                this.show6 = true
            }
        } else {
            this.cardsOrg[ind1].matched = true;
            if (elem.id==4) {
                this.show4 = true
            }
            if (elem.id==5) {
                this.show5 = true
            }
            this.score++
        }

      },

      onMove({ added, removed, moved }) {
          console.log(added, removed, moved)
          this.send1(removed.element)
      },



    checkIfCompleted(){
      console.log("checkIfCompleted", this.cards)
      if(this.cardsOrg.every(card => card.matched))
      {
          // setTimeout(() => {
            console.log("bv-modal-success")
            this.$bvModal.show('bv-modal-success')
        // }, 1000);
      }
    },


    end(){
        this.$emit('endCardGame', this.score, 5);
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
        this.show4=false;
    },
    showModal4(){
        this.show5=false;
    },
    showModal4(){
        this.show6=false;
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

/* .sortable-ghost {
    opacity: 0;
} */

.text-title{
    line-height: 1;
}

</style>
