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
            <b-col cols="12" style="display: flex; justify-content: center; align-items: center;">
                <div style="position: absolute; cursor: pointer;" :style="'left:' + width/17 + 'px'" @click="$bvModal.show('bv-modal-tutor')">
                    <b-avatar src='~/assets/img/quantIcon.svg' :size="this.height / 9 + 'px'"></b-avatar>
                </div>
                <div>
                    Задание 5. <br>
                    Квантовое программирование
                </div>
            </b-col>
          </b-row>
          <b-row class="vw-100" style="padding: 10px 10px; margin: 0px 10px; justify-content: center;">
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
          <!-- background-image: url('game5.svg');
          background-size: 100% 100%;
          -o-background-size: 100% 100%;
          -webkit-background-size: 100% 100%; -->

              <b-col cols="7" style="border-radius: 15px; border: 4px solid white;
              display: flex;
              justify-content: center; align-items: center;"
              :style='"height: " + height / 1.4 + "px;"'
              id="map"
              >
                  <div style="width: 100%; height: 100%; display: flex;
                  align-items: center;
                  padding: 30px;">
                      <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      	 viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve">
                      <style type="text/css">
                      	.st0{fill:none;stroke:#FFFFFF;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}
                      	.st1{fill:#4D9AC8;stroke:#FFFFFF;stroke-width:3;stroke-miterlimit:10;}
                      	.st2{fill:#FFFFFF;}
                      	.st3{fill:none;}
                      	.st4{fill:none;stroke:#FFFFFF;stroke-width:3;stroke-miterlimit:10;}
                      </style>
                      <g>
                      	<line class="st0" x1="251.2" y1="189.7" x2="1851.9" y2="189.7"/>
                      	<rect id="first" x="360.1" y="42.1" class="st1" width="280.5" height="295.2"/>
                        <foreignObject class="node st1" x="360.1" y="42.1" width="280.5" height="295.2">
                            <draggable v-model="columnFill" group="cards"
                            style="height: 100%; width: 100%; border: 1px dashed; border-radius: 15px;
                            pointer-events: none;"
                            id="column1"
                            :options="{group:{ name:'cards', pull:'clone', put:false }, sort: false }">
                                <span v-for="card in column1"
                                style="height: 100%; width: 100%; border-radius: 15px;
                                justify-content: center; padding-top: 2px; color: white;"
                                class="text-card"
                                >
                                  <img :src='card.svg' style="width: 100%; height: 100%;"></img>
                                </span>
                            </draggable>
                        </foreignObject>
                      	<rect x="1098.6" y="42.1" class="st1" width="280.5" height="295.2"/>
                        <foreignObject class="node st1" x="1098.6" y="42.1" width="280.5" height="295.2">
                            <draggable v-model="columnFill" group="cards"
                            style="height: 100%; width: 100%; border: 1px dashed; border-radius: 15px;
                            pointer-events: none;"
                            id="column2"
                            :options="{group:{ name:'cards', pull:'clone', put:false }, sort: false }">
                                <span v-for="card in column2"
                                style="height: 100%; width: 100%; border-radius: 15px;
                                justify-content: center; padding-top: 2px; color: white;"
                                class="text-card"
                                >
                                  <img :src='card.svg' style="width: 100%; height: 100%;"></img>
                                </span>
                            </draggable>
                        </foreignObject>
                      	<line class="st0" x1="251.2" y1="589.6" x2="1851.9" y2="589.6"/>
                      	<rect x="1476.2" y="442" class="st1" width="280.5" height="295.2"/>
                        <foreignObject class="node st1" x="1476.2" y="442" width="280.5" height="295.2">
                            <draggable v-model="columnFill" group="cards"
                            style="height: 100%; width: 100%; border: 1px dashed; border-radius: 15px;
                            pointer-events: none;"
                            id="column4"
                            :options="{group:{ name:'cards', pull:'clone', put:false }, sort: false }">
                                <span v-for="card in column4"
                                style="height: 100%; width: 100%; border-radius: 15px;
                                justify-content: center; padding-top: 2px; color: white;"
                                class="text-card"
                                >
                                  <img :src='card.svg' style="width: 100%; height: 100%;"></img>
                                </span>
                            </draggable>
                        </foreignObject>
                      	<g>
                      		<rect x="720" y="442" class="st1" width="280.5" height="295.2"/>
                            <foreignObject class="node st1" x="720" y="442" width="280.5" height="295.2">
                                <draggable v-model="columnFill" group="cards"
                                style="height: 100%; width: 100%; border: 1px dashed; border-radius: 15px;
                                pointer-events: none;"
                                id="column3"
                                :options="{group:{ name:'cards', pull:'clone', put:false }, sort: false }">
                                    <span v-for="card in column3"
                                    style="height: 100%; width: 100%; border-radius: 15px;
                                    justify-content: center; padding-top: 2px; color: white;"
                                    class="text-card"
                                    >
                                      <img :src='card.svg' style="width: 100%; height: 100%;"></img>
                                    </span>
                                </draggable>
                            </foreignObject>
                      		<ellipse class="st2" cx="860.3" cy="190.7" rx="46.6" ry="49"/>
                      		<line class="st0" x1="860.3" y1="442" x2="860.3" y2="190.2"/>
                      	</g>
                      	<g>
                      		<line class="st3" x1="1238.9" y1="337.3" x2="1238.9" y2="957.1"/>
                      		<g>
                      			<line class="st4" x1="1238.9" y1="337.3" x2="1238.9" y2="871.5"/>
                      			<g>
                      				<polygon class="st2" points="1238.9,957.1 1192,836.5 1238.9,865.1 1285.7,836.5 				"/>
                      			</g>
                      		</g>
                      	</g>
                      	<g>
                      		<line class="st3" x1="1616.5" y1="737.2" x2="1616.5" y2="957.1"/>
                      		<g>
                      			<line class="st4" x1="1616.5" y1="737.2" x2="1616.5" y2="871.5"/>
                      			<g>
                      				<polygon class="st2" points="1616.5,957.1 1569.7,836.5 1616.5,865.1 1663.4,836.5 				"/>
                      			</g>
                      		</g>
                      	</g>
                      	<line class="st0" x1="251.2" y1="957.1" x2="1851.9" y2="957.1"/>
                      	<line class="st0" x1="251.2" y1="996" x2="1851.9" y2="996"/>
                      	<g>
                      		<path class="st2" d="M68.6,175.6c1-9,3.3-17,6.8-24c3.5-7,7.9-12.1,13.1-15.5c5.1-3.4,10.9-4.9,17.2-4.8
                      			c8.6,0.2,15.2,3.6,19.8,10.2l2.9-8.6l16.1,0.1l-19.5,118.3h-17.8l7.3-40.2c-6.1,6.1-13,9.1-20.8,8.9c-7.8-0.1-13.9-3.2-18.4-9.1
                      			c-4.5-6-6.9-13.9-7.3-24c-0.2-3.3-0.1-6.5,0.2-9.7L68.6,175.6z M86.3,177.2l-0.4,5.7c-0.2,7.1,0.9,12.5,3.2,16.1
                      			c2.3,3.7,5.6,5.5,10,5.7c3.8,0.2,7-0.7,9.8-2.5c2.8-1.8,5.3-4.2,7.5-7.2l6.6-39c-2.6-6-7.1-9.1-13.6-9.3
                      			c-5.7-0.2-10.5,2.1-14.5,6.8c-4,4.7-6.7,11.4-8.1,20L86.3,177.2z"/>
                      		<path class="st2" d="M169.9,273.2c-5.5-0.1-9.7-2.1-12.5-6s-4.2-9.3-4.1-16.3c0-2.3,0.2-4.5,0.4-6.8l1.7-12
                      			c1.4-9.4,4.2-16.4,8.3-21.1c4.1-4.6,9.4-6.9,15.8-6.7c5.5,0.1,9.6,2.1,12.5,5.9s4.2,9.2,4.1,16.2c0,2.3-0.2,4.6-0.4,6.8l-1.7,11.6
                      			c-1.5,9.6-4.3,16.8-8.3,21.5C181.6,271.1,176.3,273.4,169.9,273.2z M185.6,231.5c0.4-3.5,0.6-6,0.6-7.4c-0.2-7-2.6-10.5-7.2-10.7
                      			c-3.6-0.2-6.4,1.2-8.6,4.1c-2.2,2.9-3.7,7.5-4.5,13.7l-2,14.6c-0.3,3.2-0.5,5.7-0.5,7.5c0,7.2,2.4,10.9,7.2,11.1
                      			c6.6,0.4,10.8-5,12.7-16.3L185.6,231.5z"/>
                      	</g>
                      	<g>
                      		<path class="st2" d="M69.3,573.1c1-9,3.3-17,6.8-24s7.9-12.1,13.1-15.5c5.1-3.4,10.9-4.9,17.2-4.8c8.6,0.2,15.2,3.6,19.8,10.2
                      			l2.9-8.6l16.1,0.1l-19.5,118.3H108l7.3-40.2c-6.1,6.1-13,9.1-20.8,8.9c-7.8-0.1-13.9-3.2-18.4-9.1s-6.9-13.9-7.3-24
                      			c-0.2-3.3-0.1-6.5,0.2-9.7L69.3,573.1z M86.9,574.7l-0.4,5.7c-0.2,7.1,0.9,12.5,3.2,16.1c2.3,3.6,5.6,5.5,10,5.7
                      			c3.8,0.2,7-0.7,9.8-2.5s5.3-4.2,7.5-7.2l6.6-39c-2.6-6-7.1-9.1-13.6-9.3c-5.7-0.2-10.5,2.1-14.5,6.8c-4,4.7-6.7,11.4-8.1,20
                      			L86.9,574.7z"/>
                      		<path class="st2" d="M177.7,669.8h-10.3l8.8-53.6l-16.1,5.6l1.6-9.9l25.2-9.4h1.6L177.7,669.8z"/>
                      	</g>
                      	<line class="st0" x1="420.1" y1="926.9" x2="314.7" y2="1037.9"/>
                      	<g>
                      		<path class="st2" d="M105.4,1004.6c4.3,0.1,8-1.2,11.3-3.9c3.3-2.7,5.4-6.3,6.3-10.6l16.8-0.1c-0.5,5.6-2.5,10.8-5.8,15.4
                      			c-3.3,4.6-7.6,8.2-12.8,10.8c-5.2,2.6-10.6,3.8-16.3,3.6c-7-0.1-12.9-2-17.8-5.7c-4.9-3.7-8.5-8.8-10.7-15.3s-3-13.7-2.3-21.7
                      			l0.2-2.7c0.8-8.2,3.2-15.8,6.9-22.5c3.7-6.7,8.5-11.9,14.4-15.5s12.4-5.3,19.7-5.1c8.8,0.2,15.8,3.3,21.1,9.2
                      			c5.3,5.9,7.9,13.6,7.9,23.1h-16.7c0-4.9-1.2-8.9-3.4-12c-2.3-3.1-5.6-4.8-9.9-5c-7-0.2-12.4,2.9-16.4,9.3
                      			c-4,6.4-6.1,15.5-6.5,27.2C91.1,997.2,95.8,1004.4,105.4,1004.6z"/>
                      	</g>
                      	<g>
                      		<path class="st2" d="M375.9,926.9h-55.1V917l27.3-31.3c4-4.6,6.7-8.5,8.4-11.6c1.7-3.1,2.5-6.2,2.5-9.3c0-4.1-1.1-7.4-3.3-9.9
                      			c-2.2-2.5-5.1-3.8-8.9-3.8c-4.4,0-7.9,1.4-10.3,4.2c-2.4,2.8-3.6,6.8-3.6,11.7h-13.7c0-5.3,1.1-10,3.4-14.2
                      			c2.3-4.2,5.5-7.5,9.8-9.8c4.2-2.3,9.1-3.5,14.6-3.5c8,0,14.2,2.1,18.8,6.3c4.6,4.2,6.9,10,6.9,17.4c0,4.3-1.2,8.8-3.5,13.5
                      			c-2.3,4.7-6.1,10.1-11.3,16.1l-20,22.6h38L375.9,926.9L375.9,926.9z"/>
                      	</g>
                      	<g>
                      		<path class="st2" d="M1377,890.6c0,12.4-2.2,21.7-6.6,28.1c-4.4,6.3-11.1,9.5-20.1,9.5c-8.8,0-15.5-3.1-20-9.2s-6.8-15.2-6.9-27.3
                      			v-14.9c0-12.4,2.2-21.7,6.6-27.9c4.4-6.2,11.1-9.3,20.2-9.3c9,0,15.6,3,20.1,9.1c4.4,6,6.7,15.1,6.8,27.1V890.6z M1363.3,874.5
                      			c0-8.1-1-14-3.2-17.8c-2.1-3.8-5.5-5.7-10-5.7c-4.5,0-7.8,1.8-9.8,5.4c-2.1,3.6-3.2,9.1-3.3,16.7v19.5c0,8,1.1,14.1,3.2,18
                      			c2.1,3.9,5.5,5.9,10.1,5.9c4.4,0,7.6-1.8,9.7-5.5c2.1-3.6,3.2-9.4,3.3-17.1L1363.3,874.5L1363.3,874.5z"/>
                      	</g>
                      	<g>
                      		<path class="st2" d="M1749.1,926.9h-13.6v-69.3l-20.1,7.2v-12.1l32-12.4h1.7L1749.1,926.9L1749.1,926.9z"/>
                      	</g>
                      </g>
                      </svg>
                  </div>
                  <!-- <b-row style="width: 100%; align-items: center; display: flex; justify-content: center;">
                      <div
                        class="text-title"
                        style="color: white; font-size: 1.5em; padding: 10px; color: black;
                        font-weight: bold; pointer-events: none;"
                      >
                      </div>
                      <draggable v-model="columnFill" group="cards"
                      :style='"height: " + this.height / 6.5 + "px; width: 100%; border: 1px dashed; border-radius: 15px;"'
                      id="column1"
                      :options="{group:{ name:'cards', put:false }, sort: false }">
                      </draggable>
                      <div v-for="card in column1"
                      :style='"margin: 5px 5px; height: " + height / 11 + "px;"'
                      style="background: #2D3092; width: 100%; height: 100%; border-radius: 15px;
                      justify-content: center; color: white; cursor: pointer;
                      font-size: 1.2em; display: flex;"
                      class="text-card"
                      v-bind:class="{ active: card.matched }"
                      >
                        {{ card.text }}
                    </div>
                  </b-row> -->
              </b-col>

              <b-col cols="5">

                  <draggable v-model="cards" @start="isDragging=true" @end="onEnd" @change="onMove"  :key="cards.id"
                  :style='"height: " + height / 5 + "px;"' style="display: contents;"
                  :options="{group:{ name:'cards' }, pull:'clone', sort: false }">
                         <span v-for="card in cards"
                         :style='"margin: 10px 10px; height: " + height / 7 + "px;"'
                         style="height: 100%; border-radius: 15px;
                         justify-content: center; padding-top: 2px; color: white; cursor: pointer;
                         display: flex; line-height: 1.3"
                         class="text-card"
                         >
                           <img :src="card.svg" style="height: 100%;"></img>
                           <div style="text-align: left; margin-left: 15px;" class="text-card-5">{{card.text}}</div>
                       </span>

               </draggable>
              </b-col>

          </b-row>
      </b-row>

      <b-modal id="bv-modal-tutor" hide-footer hide-header centered modal-class="about">
        <div class="d-block text-center">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <div style="font-size: 1.4em">Используй несколько операторов, чтобы написать настоящую программу на квантовом компьютере! Задача - получить на одном кубите 0, а на другом 1. Представь, что бросаешь монетку! </br> Чтобы алгоритм выдал верный результат, расставь операторы в правильном порядке.</div>
        </div>
        <b-button style="background-color: #00184b" class="mt-3" block @click="$bvModal.hide('bv-modal-tutor')">Понял!</b-button>
      </b-modal>

      <b-modal id="bv-modal-finsih1" hide-footer hide-header v-model="show1" centered @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center"  @click="showModal1()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h3>Отличная работа! Перевод кубита в суперпозицию — одна из самых первых операций, которую нужно сделать.</h3>
        </div>
      </b-modal>

      <b-modal id="bv-modal-finsih1" hide-footer hide-header v-model="show2" centered @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center"  @click="showModal2()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h3>Отличная работа! Запутать два кубита нужно точно до того, как их считывать.</h3>
        </div>
      </b-modal>


      <b-modal id="bv-modal-finsih1" hide-footer hide-header v-model="show3" centered @hidden="checkIfCompleted" modal-class="success">
        <div class="d-block text-center"  @click="showModal3()">
            <b-avatar src='~/assets/img/quant_true.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h3>Отличная работа! После всех операций с кубитами можно, наконец, считать их значение!</h3>
        </div>
      </b-modal>




      <b-modal id="bv-modal-error1" hide-footer hide-header v-model="error1" centered modal-class="error">
        <div class="d-block text-center" @click="error1=false">
            <b-avatar src='~/assets/img/quant_sad.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h3>Попробуй еще раз. </br> Перевод кубита в суперпозицию — одна из самых первых операций, которую нужно сделать.</h3>
        </div>
      </b-modal>

      <b-modal id="bv-modal-error2" hide-footer hide-header v-model="error2" centered modal-class="error">
        <div class="d-block text-center" @click="error2=false">
            <b-avatar src='~/assets/img/quant_sad.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h3>Попробуй еще раз. Запутать два кубита нужно точно до того, как их считывать.</h3>
        </div>
      </b-modal>

      <b-modal id="bv-modal-error3" hide-footer hide-header v-model="error3" centered modal-class="error">
        <div class="d-block text-center" @click="error3=false">
            <b-avatar src='~/assets/img/quant_sad.svg' :size="this.height / 5 + 'px'"
                :style="'position: absolute; inset: 0px 0px 0px -'+ this.width / 8.5 +'px; margin: auto 0px;'"
            ></b-avatar>
          <h3>Попробуй еще раз. Чтобы считать значение кубита, нужно сначала провести с ним все нужные операции.</h3>
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
      error1: false,
      error2: false,
      error3: false,
      success: false,
      isDragging: false,
      cards: [
        { id: 1, svg: 'block1.svg', text:"HAD — переводит кубит в суперпозицию, когда вероятности выпадания 0 и 1 будут 50/50", matched: false},
        { id: 2, svg: 'block2.svg' , text:"READ — cчитывает значение кубита и заставляет его принять одно из значений — 1 или 0.", matched: false},
        { id: 3, svg: 'block2.svg' , text:"READ — cчитывает значение кубита и заставляет его принять одно из значений — 1 или 0.", matched: false},
        { id: 4, svg: 'block3.svg' , text:"CNOT — запутывает два кубита. Если первый примет значение 1, второй автоматически примет значение NOT 1, то есть 0.", matched: false},
      ],
      cardsOrg: [
        { id: 1, svg: 'block1.svg', matched: false},
        { id: 2, svg: 'block2.svg' , matched: false},
        { id: 3, svg: 'block2.svg' , matched: false},
        { id: 4, svg: 'block3.svg' , matched: false},
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
      first: {top: 0, left: 0},
      removed: null,
      score: 0
    };
  },

  methods: {

      send1: function (elem) {
        let item = this.cardsOrg.find(el => el.id == elem.id)
        const ind1 = this.cardsOrg.indexOf(item);
        console.log('ELEM: ', elem, ind1)
        if (elem.id==1){
            this.column1.push(elem);
            this.cardsOrg[ind1].matched = true;
            console.log('column1: ', this.column1)
            this.show1 = true
            this.removed = null
        } else {
            this.cards.push(elem)
            this.score++
            switch (elem.id) {
                case 1:
                  this.error1 = true;
                  break;
                case 2:
                  this.error3 = true;
                  break;
                case 3:
                  this.error3 = true;
                  break;
                case 4:
                  this.error2 = true;
                  break;
              }
        }

      },

      send2: function (elem) {
        let item = this.cardsOrg.find(el => el.id == elem.id)
        const ind1 = this.cardsOrg.indexOf(item);
        console.log('ELEM: ', elem, ind1)
        if (elem.id==2 || elem.id==3) {
            this.column2.push(elem);
            this.cardsOrg[ind1].matched = true;
            console.log('column2: ', this.column2)
            this.show3 = true;
            this.removed = null
        } else {
            this.cards.push(elem)
            this.score++
            switch (elem.id) {
                case 1:
                  this.error1 = true;
                  break;
                case 2:
                  this.error3 = true;
                  break;
                case 3:
                  this.error3 = true;
                  break;
                case 4:
                  this.error2 = true;
                  break;
              }
        }

      },

      send3: function (elem) {
          let item = this.cardsOrg.find(el => el.id == elem.id)
          const ind1 = this.cardsOrg.indexOf(item);
          console.log('ELEM: ', elem, ind1, elem.id)
          if (elem.id==4) {
              this.column3.push(elem);
              this.cardsOrg[ind1].matched = true;
              console.log('column3: ', this.column3)
              this.show2 = true;
              this.removed = null
          } else {
              this.cards.push(elem)
              this.score++
              switch (elem.id) {
                  case 1:
                    this.error1 = true;
                    break;
                  case 2:
                    this.error3 = true;
                    break;
                  case 3:
                    this.error3 = true;
                    break;
                  case 4:
                    this.error2 = true;
                    break;
                }
          }

      },

      send4: function (elem) {
          let item = this.cardsOrg.find(el => el.id == elem.id)
          const ind1 = this.cardsOrg.indexOf(item);
          console.log('ELEM: ', elem, ind1)
          if (elem.id==2 || elem.id==3) {
              this.column4.push(elem);
              this.cardsOrg[ind1].matched = true;
              console.log('column2: ', this.column4)
              this.show3 = true;
              this.removed = null;
          } else {
              this.cards.push(elem)
              this.score++
              switch (elem.id) {
                  case 1:
                    this.error1 = true;
                    break;
                  case 2:
                    this.error3 = true;
                    break;
                  case 3:
                    this.error3 = true;
                    break;
                  case 4:
                    this.error2 = true;
                    break;
                }
          }

      },

      onEnd: function(evt, node) {
          window.console.log(evt, evt.to.id, evt.oldIndex);
          switch (evt.to.id) {
              case "column1":
                this.send1(this.removed)
                break;
              case "column2":
                  this.send2(this.removed)
                break;
              case "column3":
                  this.send3(this.removed)
                break;
              case "column4":
                  this.send4(this.removed)
                break;
            }
      },

      onMove({ added, removed, moved }) {
          this.removed = removed.element;
      },



    checkIfCompleted(){
      console.log("checkIfCompleted", this.cardsOrg)
      if(this.cardsOrg.every(card => card.matched))
      {
          // setTimeout(() => {
            console.log("bv-modal-success")
            this.$bvModal.show('bv-modal-success')
        // }, 1000);
      }
    },


    end(){
        this.$emit('endCardGame', this.score, 6);
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

.active{
    background-color: #1BBC60!important; color: white;
    pointer-events: none;
}

.sortable-ghost {
    opacity: 0;
}

.text-title{
    line-height: 1;
}

</style>
