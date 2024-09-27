<template>
  <div class="aboutMe--mainContent" id="aboutMeMainContent">
    <div class="sectionsTittle--text">
      >{{ $t('aboutMe.title') }}
    </div>
    <div class="aboutMe pt-5 pb-5">
      <transition name="presentationAboutMe" enter-active-class="animate__animated animate__bounceInDown" leave-active-class="animate__animated animate__bounceOut">
        <div v-if="aboutMeText" class="aboutMeContent--text">
          {{ $t('aboutMe.descriptionOne') }}
          <br /><br />
          {{ $t('aboutMe.descriptionTwo') }}
        </div>
      </transition>
      <Scrollwatcher sentinal-name="AboutMe" @on-intersection-element="scrolledOn()" />
      <transition name="presentationPhoto" enter-active-class="animate__animated animate__bounceInUp" leave-active-class="animate__animated animate__bounceOut">
        <p v-if="aboutMePhoto" class="aboutMe--image__text">
          Web developer jobs sit amet consectetur adipisicing elit. Totam possimus, neque, adipisci aperiam illo accusantium excepturi, maiores aspernatur repudiandae laboriosam expedita? Veritatis aut corporis nesciunt dolorem, incidunt exercitationem ad tempore! web developer skills ratione reiciendis facilis optio aliquam dolor ducimus. web developer et, web developer resume dolore iusto exercitationem, ex dolor rem aspernatur nulla fugiat eos earum, facere doloribus aliquid a vel temporibus quidem maiores nisi molestiae doloremque hic. Repellat iste ad perspiciatis fuga! Cumque quas consequatur eligendi id laborum temporibus sed laudantium illo web developer salary adipisci, accusamus mollitia corporis! Porro magnam laborum eius unde voluptatem, recusandae sit, dolorum qui deleniti voluptas voluptatibus tenetur molestiae quos harum ullam? Tempore web developer jobs  animi eveniet possimus aliquam eius harum quia, quibusdam rem repudiandae molestiae labore praesentium. Necessitatibus, sed maxime. Cupiditate culpa sint dolor perspiciatis, id optio soluta fuga obcaecati suscipit ratione a web developer resume! Quibusdam possimus et repellat voluptatem web developer portfolio quisquam est earum corrupti nostrum amet beatae vel, atque quasi quaerat hic animi enim odit web developer extension ab. Eveniet, aperiam consequuntur eos eius consectetur officiis beatae earum quo esse, nam fugiat, mollitia quibusdam quis ad a sapiente consequatur quaerat! Aperiam dolorem laborum harum inventore eos facilis voluptatibus aut distinctio? Aut vel, voluptates a web developer portfolio soluta cum libero nobis voluptas, facere facilis eos quasi, asperiores veritatis aliquid. Placeat similique facere ipsum, quaerat facilis, consectetur laudantium eius dolores perferendis fuga blanditiis ab voluptatem aliquid quas tenetur quod praesentium rerum expedita! Quas at mollitia sequi architecto alias possimus saepe placeat sint nemo, cupiditate impedit explicabo officiis tempore, quasi deleniti nostrum est ratione quibusdam assumenda temporibus omnis. Sequi, sapiente esse? Aut nam repudiandae amet eum illum beatae dolorum quos asperiores pariatur nulla incidunt quasi assumenda porro optio excepturi, minima, veritatis quibusdam, dicta accusantium explicabo iusto sapiente nihil maiores accusamus. Optio, consequuntur. Quae fugit ratione fuga sunt, ab iste, soluta pariatur exercitationem possimus, asperiores dolor libero quia minima. Ipsum nobis totam libero. Quidem vel blanditiis recusandae accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit,a web developer job description impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero web developer blog , iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
import Scrollwatcher from './ScrollWatcher';

export default {
    name: 'About',
    data(){
      return {
        aboutMeText : false,
        aboutMePhoto : false
      }
    },
    components: {
      Scrollwatcher
    },
    methods: {
      scrolledOn() {
        this.aboutMeText = true;
        this.aboutMePhoto = true;
        this.$emit('actualActiveNav', 'about');
      }
    }
}
</script>

<style>
.aboutMe--mainContent {
  width: 75%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.sectionsTittle--text {
  max-height: 10vh;
  font-size: 3rem;
  color: #0E0E11;
  text-shadow:
    -0.1vh -0.1vh 0 #8D8E91,
    0.1vh -0.1vh 0 #8D8E91,
    -0.1vh 0.1vh 0 #8D8E91,
    0.1vh 0.1vh 0 #8D8E91;
  flex-grow: 2;
}

.aboutMe {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.aboutMe--about {
  display: flex;
  align-items: center;
}

.aboutMeContent--text {
  width: 40%;
  font-size: 1.5vw;
  color: #fff;
}

.aboutMe--image__text {
  width: 40%;
  margin: 0;
  font-size: 1vw;
  line-height: 0.5rem;
  background: url("../assets/img/personalPhoto.webp");
  background-size: contain;
  background-clip: text;
  -webkit-background-clip: text;
  background-repeat: no-repeat;
  -webkit-text-fill-color: rgba(27, 28, 34, 0);
  background-position: center;
}

@media (max-width: 950px) {
  .aboutMeContent--text {
    width: 100%;
    font-size: 1.7vh;
    color: #fff;
  }

  .aboutMe--image__text {
    width: 100%;
    font-size: 0.8vh;
    line-height: 0.3rem;
  }

  .aboutMe {
    display: flex;
    flex-direction: column;
  }
}
</style>
