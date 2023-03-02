<!-- Please remove this file from your project -->
<template>
  <b-container class="relative flex justify-center" style="max-width: 100%; background: white;">
      <b-row class="vh-100 text-center" align-v="center">
          <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6" style="margin: auto;">
            <transition name="fade">
                <div v-show="test" style="position: absolute; top:0; left: 0; z-index: 9;"> <div id="training-vn"></div> </div>
            </transition>
            <div id="game" style="position: absolute; absolute; top:0; left: 0; z-index: 8; display: none; width: 100vw;">
                <CardGame @endCardGame="continueVN" v-if="game1"></CardGame>
                <DnD2 @endCardGame="continueVN" v-if="game2"></DnD2>
                <DnD3 @endCardGame="continueVN" v-if="game3"></DnD3>
                <DnD4 @endCardGame="continueVN" v-if="game4"></DnD4>
                <DnD5 @endCardGame="continueVN" v-if="game5"></DnD5>
            </div>
          </div>
      </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'NuxtTutorial',

  data() {
    return {
      property: 'Blank',
      game1: true,
      game2: false,
      game3: false,
      game4: false,
      game5: false,
      test: true,
      sessionId: 0,
      score: 0,
      sert: ''
    }
  },

  created() {
      this.sessionId = this.getParameterByName('session_id');
      console.log('this.sessionId', this.sessionId)
  },

  computed: {
    // propertyComputed() {
    //   console.log('I change when this.property changes.')
    //   return this.property
    // }
  },

  methods: {
      getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
      },
      continueVN(score, num) {
          console.log("continue: true", score, num)
          this.test = true;
          this.score = this.score + score;

          switch (num) {
              case 2:
                this.game1 = false;
                document.getElementById('game').style.display = "none";
                this.firstLvlPassed();
                this.game2 = true;
                break;
              case 3:
                this.game2 = false;
                document.getElementById('game').style.display = "none";
                this.game3 = true;
                break;
              case 4:
                this.game3 = false;
                document.getElementById('game').style.display = "none";
                this.game4 = true;
                break;
              case 5:
                this.game4 = false;
                document.getElementById('game').style.display = "none";
                this.game5 = true;
                break;
              default:
                this.game5 = false;
                document.getElementById('game').style.display = "none";
                this.game1 = true;
          }

      },

      firstLvlPassed() {
           const data = {
             session_id: this.sessionId,
             firstTask: 1
           };

           this.$axios.post('/trainer/markFirstTask', data);
      },

      gamePassed () {
           let lvl;
           if (this.score >= 0 && this.score <= 3)
             lvl = 3;
           else if (this.score > 3 && this.score <= 5)
             lvl = 2;
           else
             lvl = 1;

           const data = {
             session_id: this.sessionId,
             score: lvl,
             trainer_name: 'rosatom',
             achievement: ['ra-admin', 'ra-future', 'ra-genius']
           };

           this.$axios
             .post('/trainer/webhook', data)
             .then(response => {
               this.sert = response.data.link;
               window.location.replace(this.sert);
             });
      },

  },

  mounted() {
      // Create Visual Novel:
      // HTML element id = getting-started-vn
      // Width = 800
      // Height = 600
      // Images location = img/

      let pageWidth = document.documentElement.clientHeight > document.documentElement.clientWidth ? document.documentElement.clientHeight : document.documentElement.clientWidth
      let pageHeight = document.documentElement.clientHeight < document.documentElement.clientWidth ? document.documentElement.clientHeight : document.documentElement.clientWidth


      document.getElementById('game');

      var quant = {
        name: "Квант",
        nameStyle: "color: #044784;",
        width: pageWidth/1.2,
        height: pageHeight/1.2,
        image: {
            "default" : './training-8-11/quant.svg',
        },
        pos: {
            x : 0.4,
            y : 0
        }
    };


      console.log(this.test, pageWidth, pageHeight,)
      var vn = new VisualNovel( "training-vn", pageWidth, pageHeight, "/" );

      vn.init();

      // Title
      vn.setNovelTitle( "", "" );
      vn.setNovelMode('dialog', pageWidth/2, pageHeight > 500 ? 250 : 150, pageWidth/3.5, pageHeight > 500 ? pageHeight-250 : pageHeight-150)
      vn.updateDialogBorderStyle('', '', '0px', '0px');
      vn.setStartScreenBgImage( 'test.jpg', pageWidth, pageHeight );

      //Start screen settings
      // vn.setStartScreenBgColor( "#3F4984" );
      // vn.setStartScreenMenuPos( pageWidth - 240,  pageHeight - 100);
      //
      // // Background
      // vn.setBgColor( "black" );
      //
      // vn.setBgImage(
      //       './training-8-11/1.svg', // path to image
      //       pageWidth, pageHeight,
      //       "no-repeat",
      //       pageWidth, pageHeight          // width, height
      // );
      // vn.fadeBg('out', 5000)
      // vn.setBgImage(
      //       './training-8-11/2.svg', // path to image
      //       pageWidth, pageHeight,
      //       "no-repeat",
      //       pageWidth, pageHeight          // width, height
      // );
      //  vn.fadeBg('in', 5000)
      //
      //  vn.pause( 1500 );
      // // Dialog settings
      // // vn.setDialogBgColor( "white" );
      // // vn.setDialogTextColor( "black" );
      // // vn.updateDialogBorderStyle('', 'white', '0px', '10px');
      //
      // vn.say( "<span style='color:white'> Слэш </span>", "Тебе тоже этот спам на телефон пришел? Перейди по ссылке, поучаствуй в обучении алгоритма, ага, конечно…" );
      // // vn.fadeBg('out', 1000)
      // // vn.setBgImage(
      // //       './training-8-11/2.svg', // path to image
      // //       pageWidth, pageHeight         // width, height
      // // );
      //  // vn.fadeBg('in', 1000)
      // // vn.createEvent(
      // //   "wait",
      // //   () => {
      // //
      // //       this.test = false;
      // //
      // //       console.log(this.test)
      // //
      // //       setTimeout(() =>  { this.test = true; console.log(this.test) }, 10000);
      // //       vn.nextEvent();
      // //
      // //   }
      // // );
      // vn.fadeBg('out', 1500)
      // vn.setBgImage(
      //       './training-8-11/3.svg', // path to image
      //       pageWidth, pageHeight,
      //       "no-repeat",
      //       pageWidth, pageHeight           // width, height
      // );
      // vn.fadeBg('in', 1500)
      // vn.say( "<span style='color:white'> Квант </span>", "Эй, вот сейчас обидно было! У меня не спам, а научный проект." );
      // vn.say( "<span style='color:white'> Слэш </span>", "Вот это реклама вышла на новый уровень! Я и не знал, что у меня смартфон так умеет! Ну, видимо, выбора нет, рассказывай, что у тебя за проект такой." );
      // vn.say( "<span style='color:white'> Квант </span>", ["Вы когда-нибудь слышали про теорию всего?", "Концепция на стыке физики и математики, которая может объединить все взаимодействия в нашем мире?", "Меня зовут Квант, и мы — кванты — помогаем ученым в работе над этой теорией."] );
      // vn.say( "<span style='color:white'> Квант </span>", ["В частности, сейчас мы разрабатываем универсальный алгоритм - как алгоритмы соцсетей, только лучше — для всей жизни!", "Что поесть, куда пойти учиться, с кем пообщаться — все порекомендует наш алгоритм. Но сначала его надо обучить.", "<b> И тут мне потребуется ваша помощь. </b>"] );
      // vn.say( "<span style='color:white'> Запятыня </span>", "То есть я правильно понимаю, что нам нужно что-то сделать, чтобы помочь обучить ваш алгоритм, а потом уже он поможет нам?");
      // vn.say( "<span style='color:white'> Квант </span>", "Именно так! Небольшое приключение на 10 минут, зайти и выйти. Если вы готовы, то… приступаем!" );
      // vn.fadeBg('out', 1500)
      // vn.setBgImage(
      //       './training-8-11/4.svg', // path to image
      //       pageWidth, pageHeight,
      //       "no-repeat",
      //       pageWidth, pageHeight           // width, height
      // );
      // vn.fadeBg('in', 1500)
      // vn.say( "<span style='color:white'> Квант </span>", "...", 1500 );
      // vn.pause( 1500 );
      // vn.fadeBg('out', 1500)
      // vn.setBgImage(
      //       './training-8-11/5.svg', // path to image
      //       pageWidth, pageHeight,
      //       "no-repeat",
      //       pageWidth, pageHeight           // width, height
      // );
      // vn.fadeBg('in', 1500)
      // vn.say( "<span style='color:white'> Квант </span>", "Чтобы начать настройку алгоритма, нам всем нужно понимать принципы, на которых он работает. Этим мы сейчас и займемся!", 5000  );
      // vn.fadeBg('out', 1500)
      // vn.pause( 1500 );
      // // vn.setBgImage('');
      // // vn.setBgColor('transparent')
      // // vn.fadeBg('in', 1500)
      // // vn.addCharacter(quant, 3000, 'fade')
      // // vn.say( "<span style='color:#044784'> Квант </span>", ["Чтобы пройти дальше, надо открыть все карточки. Там есть пары - название принципа и его определение. Открой все карточки по очереди и найди верные пары! ", "Если тебе понадобится помощь, я рядом. Просто нажми на моё изображение в углу экрана!"]);
      // // // Go back to start screen
      // // vn.reset();
      // vn.createEvent(
      //   "wait",
      //   () => {
      //       document.getElementById('game').classList.add("bg-fon");
      //       vn.nextEvent();
      //   }
      //
      // );
      //
      // vn.setBgImage('');
      // vn.setBgColor('transparent')
      // vn.fadeBg('in', 1500)
      // vn.addCharacter(quant, 1500, 'fade')
      // vn.say( "<span style='color:white'> Квант </span>", ["Чтобы пройти дальше, надо открыть все карточки. Там есть пары — название принципа и его определение. Открой все карточки по очереди и найди верные пары! ", "Если тебе понадобится помощь, я рядом. Просто нажми на мое изображение в углу экрана!"]);
      //
      // vn.createEvent(
      //   "wait",
      //   () => {
      //
      //       this.test = false;
      //       document.getElementById('game').style.display = "block";
      //       document.getElementById('game').classList.remove("bg-fon");
      //
      //
      //       vn.nextEvent();
      //
      //   }
      //
      // );
      // vn.fadeCharacter( quant, "out", 100 );
      // vn.fadeBg('out', 1500)
      // vn.setBgImage(
      //       './training-8-11/6.svg', // path to image
      //       pageWidth, pageHeight,
      //       "no-repeat",
      //       pageWidth, pageHeight           // width, height
      // );
      //  vn.pause( 1500 );
      //
      //
      //
      // vn.fadeBg('in', 1500)
      //
      // vn.say( "<span style='color:white'> Квант </span>", "Вы прекрасно справились, нам удалось продвинуться дальше!" );
      // vn.say( "<span style='color:white'> Скобец </span>", "Даже пространство заметно поменялось. Часть слов мне знакома, часть нет. Что это такое?" );
      // vn.say( "<span style='color:white'> Квант </span>", "Это задачи, которые мы решаем в квантовых компьютерах. Вам тоже надо в этом разобраться, чтобы говорить со мной на одном языке и лучше настроиться на алгоритм." );
      //
      //
      // vn.fadeBg('out', 1500)
      // vn.pause( 1500 );
      // vn.createEvent(
      //   "wait",
      //   () => {
      //       document.getElementById('game').classList.add("bg-fon");
      //       vn.nextEvent();
      //   }
      //
      // );
      //
      // vn.setBgImage('');
      // vn.setBgColor('transparent')
      // vn.fadeBg('in', 1000)
      // vn.fadeCharacter(quant, 'in', 1000)
      // vn.say( "<span style='color:white'> Квант </span>", ["Часто за сложными, непонятными словами скрывается интересный мир. Попробуй сопоставить научное название разных задач и их примеры!", "Если тебе понадобится помощь, я рядом. Просто нажми на мое изображение в углу экрана."]);
      // // Go back to start screen
      // // vn.reset();
      // vn.createEvent(
      //   "wait",
      //   () => {
      //
      //       this.test = false;
      //       document.getElementById('game').style.display = "block";
      //       document.getElementById('game').classList.remove("bg-fon");
      //       vn.nextEvent();
      //
      //   }
      //
      // );
      // vn.pause( 1500 );
      // vn.fadeBg('out', 1500)
      // vn.setBgImage(
      //       './training-8-11/7.svg', // path to image
      //       pageWidth, pageHeight,
      //       "no-repeat",
      //       pageWidth, pageHeight           // width, height
      // );
      // vn.fadeCharacter( quant, "out", 100 );
      // vn.pause( 1500 );
      //
      //
      //
      // vn.fadeBg('in', 1500)
      //
      //
      //  vn.say( "<span style='color:white'> Скобец </span>", "А насколько безопасно взаимодействовать с алгоритмом? И для нас, и для алгоритма. Мы же не специалисты." );
      //  vn.say( "<span style='color:white'> Слэш </span>", "Ну ты вовремя спросил, конечно, мы уже в квантовом пространстве… Но вопрос хороший. Квант, что скажешь?" );
      //  vn.say( "<span style='color:white'> Квант </span>", "На самом деле вопрос актуальный, потому что до самого компьютера с алгоритмом мы еще не добрались.");
      //  vn.say( "<span style='color:white'> Квант </span>", "И взаимодействовать с ними безопасно. Более того, множество людей, совсем не ученых, регулярно работает с квантовыми эффектами.");
      //  vn.fadeBg('out', 1500)
      //  vn.pause( 1500 );
      //  vn.createEvent(
      //    "wait",
      //    () => {
      //        document.getElementById('game').classList.add("bg-fon");
      //        vn.nextEvent();
      //    }
      //
      //  );
      //
      //  vn.setBgImage('');
      //  vn.setBgColor('transparent')
      //  vn.fadeBg('in', 1000)
      //  vn.fadeCharacter(quant, 'in', 1000)
      //  vn.say( "<span style='color:white'> Квант </span>", ["Раздели профессии, связанные с квантовыми вычислениями, на разные категории. Какие-то из этих профессий уже есть, какие-то скоро появятся, а некоторые могут появиться только в далеком будущем.", "Если тебе понадобится помощь, я рядом. Просто нажми на моё изображение в углу экрана!"]);
      //  // Go back to start screen
      //  // vn.reset();
      //  vn.createEvent(
      //    "wait",
      //    () => {
      //
      //        this.test = false;
      //        document.getElementById('game').style.display = "block";
      //        document.getElementById('game').classList.remove("bg-fon");
      //        vn.nextEvent();
      //
      //    }
      //
      //  );
      //  vn.pause( 1500 );
      //  vn.fadeBg('out', 1500)
      //  vn.setBgImage(
      //        './training-8-11/8.svg', // path to image
      //        pageWidth, pageHeight,
      //        "no-repeat",
      //        pageWidth, pageHeight           // width, height
      //  );
      //  vn.fadeCharacter( quant, "out", 100 );
      //  vn.pause( 1500 );
      //
      //
      //
      //  vn.fadeBg('in', 1500)
      //
      //  vn.say( "<span style='color:white'> Запятыня </span>", "Это компьютер? Мы добрались? Что дальше?");
      //  vn.say( "<span style='color:white'> Квант </span>", ["Совершенно верно, это квантовый компьютер!", "Правда, в обычном физическом мире он выглядит совсем иначе. Впрочем, неважно, нам главное разобраться в принципах его работы, чтобы попасть внутрь."], 1000);
      //
      //
      //  vn.fadeBg('out', 1500)
      //  vn.pause( 1500 );
      //  vn.createEvent(
      //    "wait",
      //    () => {
      //        document.getElementById('game').classList.add("bg-fon");
      //        vn.nextEvent();
      //    }
      //
      //  );
      //
      //  vn.setBgImage('');
      //  vn.setBgColor('transparent')
      //  vn.fadeBg('in', 1000)
      //  vn.fadeCharacter(quant, 'in', 1000)
      //  vn.say( "<span style='color:white'> Квант </span>", ["Перед тобой квантовый компьютер!", "Давай проверим, сможешь ли ты собрать принципы его работы. Перетаскивай нужные принципы вправо к изображению компьютера."]);
      //  // Go back to start screen
      //  // vn.reset();
      //  // vn.setBgImage(
      //  //       './training-8-11/6.svg', // path to image
      //  //       pageWidth, pageHeight,
      //  //       "no-repeat",
      //  //       pageWidth, pageHeight           // width, height
      //  // );
      //  vn.createEvent(
      //    "wait",
      //    () => {
      //
      //        this.test = false;
      //        document.getElementById('game').style.display = "block";
      //        document.getElementById('game').classList.remove("bg-fon");
      //        vn.nextEvent();
      //
      //    }
      //
      //  );
      //
      //
      //  vn.pause( 1500 );
      //  vn.fadeBg('out', 1500)
      //
      //  vn.fadeCharacter( quant, "out", 100 );
      //  vn.setBgImage(
      //        './training-8-11/8.svg', // path to image
      //        pageWidth, pageHeight,
      //        "no-repeat",
      //        pageWidth, pageHeight           // width, height
      //  );
      //  vn.pause( 1500 );
      //
      //
      //
      //
      //  vn.fadeBg('in', 1500)
      //
      //  vn.say( "<span style='color:white'> Квант </span>", ["Отлично, мы добрались! Теперь осталось самое интересное: вам надо запутать два кубита и измерить их состояние. ", "Так алгоритм сможет зафиксировать ваши состояния и учесть их в своем обучении."], 1000);
      //
      //
      //  vn.fadeBg('out', 1500)
      //  vn.pause( 1500 );
      //  vn.createEvent(
      //    "wait",
      //    () => {
      //        document.getElementById('game').classList.add("bg-fon");
      //        vn.nextEvent();
      //    }
      //
      //  );
      //
      //  vn.setBgImage('');
      //  vn.setBgColor('transparent')
      //  vn.fadeBg('in', 1000)
      //  vn.fadeCharacter(quant, 'in', 1000)
      //  vn.say( "<span style='color:white'> Квант </span>", ["Используй несколько операторов, чтобы написать настоящую программу на квантовом компьютере! Задача — получить на одном кубите 0, а на другом 1.", "Представь, что бросаешь монетку!","Чтобы алгоритм выдал верный результат, расставь операторы в правильном порядке."]);
      //  // Go back to start screen
      //  // vn.reset();
      //  // vn.setBgImage(
      //  //       './training-8-11/6.svg', // path to image
      //  //       pageWidth, pageHeight,
      //  //       "no-repeat",
      //  //       pageWidth, pageHeight           // width, height
      //  // );
      //  vn.createEvent(
      //    "wait",
      //    () => {
      //
      //        this.test = false;
      //        document.getElementById('game').style.display = "block";
      //        document.getElementById('game').classList.remove("bg-fon");
      //        vn.nextEvent();
      //
      //    }
      //
      //  );
      //  vn.pause( 1500 );
      //  vn.fadeBg('out', 1500)
      //  vn.setBgImage(
      //        './training-8-11/8.svg', // path to image
      //        pageWidth, pageHeight,
      //        "no-repeat",
      //        pageWidth, pageHeight           // width, height
      //  );
      //  vn.fadeCharacter( quant, "out", 100 );
      //  vn.pause( 1500 );
      //
      //
      //
      //  vn.fadeBg('in', 1500)
      //
      //
      //  vn.say( "<span style='color:white'> Запятыня </span>", "Ну что, получилось?");
      //  vn.say( "<span style='color:white'> Квант </span>", ["Сейчас проверю… Да, отлично, алгоритм много узнал о вас. Спасибо большое за помощь в исследованиях! ", "Сейчас я отправлю вас обратно."], 1500);
      //  vn.fadeBg('out', 1500)
      //  vn.setBgImage(
      //        './training-8-11/9.svg', // path to image
      //        pageWidth, pageHeight,
      //        "no-repeat",
      //        pageWidth, pageHeight           // width, height
      //  );
      //  vn.fadeBg('in', 1500)
      //  vn.say( "<span style='color:white'> Слэш </span>", "Было интересно, спасибо! Пока-пока!", 3500);
      //  vn.fadeBg('out', 1500)
      //  vn.setBgImage(
      //        './training-8-11/10.svg', // path to image
      //        pageWidth, pageHeight,
      //        "no-repeat",
      //        pageWidth, pageHeight           // width, height
      //  );
      //  vn.fadeBg('in', 1500)
      //  vn.say( "<span style='color:white'> Запятыня </span>", "Интересное путешествие. Квант сказал, что в реальности квантовый компьютер выглядит иначе, теперь я хочу его увидеть.");
      //  vn.say( "<span style='color:white'> Скобец </span>", "Помнишь, в ролике говорили про Российский квантовый центр? Наверное, можно записаться туда на экскурсию и посмотреть!" );
      //  vn.say( "<span style='color:white'> Слэш </span>", "Хорошая идея. А теперь пошли на следующий урок!", 3000);
      //  vn.createEvent(
      //    "wait",
      //    () => {
      //
      //        this.gamePassed();
      //        vn.nextEvent();
      //
      //    }
      //
      //  );
       // vn.reset();
  },
}
</script>

<style>

#training-vn-startMenuTitleContainer {
	background-color: transparent;
}

#training-vn-startMenuButtonContainer {
	background-color: transparent;
}

#training-vn-startMenuButton {
	color: #FFFFFF;
    display: none;
}

#training-vn-startMenuButton:hover {
	background-color: transparent;
	color: #3F4984;
}

#training-vn-dialog-dialogName{
    font-size: 1.5em;
    color: white!important;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
}

#training-vn-dialog-dialogText{
    font-size: 1.1em;
    padding-top: 0px;
}

#training-vn-dialog-dialogmode{
    color: white!important;
    background-color: rgba(255, 255, 255, 0.7)!important;
}

#training-vn-dialog-dialogmode {
    border-image: linear-gradient(to right,#2fadff,#9215f1);
    -moz-border-image: -moz-linear-gradient(to right,#2fadff,#9215f1);
    -webkit-border-image: -webkit-linear-gradient(to right,#2fadff,#9215f1);
    border-image-slice: 1;
    background: linear-gradient(125deg,#165487,#04042e);
    background-image: url('~/assets/img/back_dialog.svg');
    background-repeat: no-repeat;
    background-size: contain;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */
{
  opacity: 0
}

.dialogButton {
    height: 100%!important;
    width: 100%!important;
    top: 0!important;
    left: 0!important;
    position: fixed!important;
    color: transparent!important;
}

.dialogButton:hover {
    color: transparent!important;
    background-color: transparent!important;
}

.bg-fon {
    filter: brightness(40%);
    display: block!important;
    opacity: 1;

    animation: fadeInFromNone 2s ease-in-out;
}

@keyframes fadeInFromNone {
  0% {
    display: none;
    opacity: 0;
  }

  1% {
    display: block;
    opacity: 0;
  }

  100% {
    display: block;
    opacity: 1;
  }
}

</style>
