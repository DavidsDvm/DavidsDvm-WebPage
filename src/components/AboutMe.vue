<template>
  <div class="aboutMe--mainContent" id="aboutMeMainContent">
    <div class="sectionsTittle--text">
      >About me
    </div>
    <div class="aboutMe pt-5 pb-5">
      <transition name="presentationAboutMe" enter-active-class="animate__animated animate__bounceInDown" leave-active-class="animate__animated animate__bounceOut">
      <div v-if="aboutMeText" class="aboutMe--main aboutMe--about">
        <div class="aboutMeContent--text">
          Hello! My name is David and I enjoy creating
          things that live on the internet. My interest in
          web development started back in 2012 when I
          decided to try editing custom Tumblr themes
          — turns out hacking together a custom reblog
          button taught me a lot about HTML & CSS!
          <br /><br />
          Fast-forward to today, and I’ve had the
          privilege of working at an advertising agency,
          a start-up, a huge corporation, and a
          student-led design studio. My main focus
          these days is building accessible, inclusive
          products and digital experiences at
          Upstatement for a variety of clients.
        </div>
      </div>
      </transition>
      <Scrollwatcher sentinal-name="AboutMe" @on-intersection-element="scrolledOn()" />
      <transition name="presentationPhoto" enter-active-class="animate__animated animate__bounceInUp" leave-active-class="animate__animated animate__bounceOut">
      <div v-if="aboutMePhoto" class="aboutMe--image">
        <p class="aboutMe--image__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam possimus, neque, adipisci aperiam illo accusantium excepturi, maiores aspernatur repudiandae laboriosam expedita? Veritatis aut corporis nesciunt dolorem, incidunt exercitationem ad tempore! Hic cupiditate commodi ratione reiciendis facilis optio aliquam dolor ducimus. Eligendi fugit et, blanditiis provident sed dolore iusto exercitationem, ex dolor rem aspernatur nulla fugiat eos earum, facere doloribus aliquid a vel temporibus quidem maiores nisi molestiae doloremque hic. Repellat iste ad perspiciatis fuga! Cumque quas consequatur eligendi id laborum temporibus sed laudantium illo ex ipsam dolorum adipisci, accusamus mollitia corporis! Porro magnam laborum eius unde voluptatem, recusandae sit, dolorum qui deleniti voluptas voluptatibus tenetur molestiae quos harum ullam? Tempore aliquid minima quis animi eveniet possimus aliquam eius harum quia, quibusdam rem repudiandae molestiae labore praesentium. Necessitatibus, sed maxime. Cupiditate culpa sint dolor perspiciatis, id optio soluta fuga obcaecati suscipit ratione quaerat vitae itaque! Quibusdam possimus et repellat voluptatem culpa optio incidunt quisquam est earum corrupti nostrum amet beatae vel, atque quasi quaerat hic animi enim odit iste voluptas assumenda ab. Eveniet, aperiam consequuntur eos eius consectetur officiis beatae earum quo esse, nam fugiat, mollitia quibusdam quis ad a sapiente consequatur quaerat! Aperiam dolorem laborum harum inventore eos facilis voluptatibus aut distinctio? Aut vel, voluptates laudantium fugiat minima soluta cum libero nobis voluptas, facere facilis eos quasi, asperiores veritatis aliquid. Placeat similique facere ipsum, quaerat facilis, consectetur laudantium eius dolores perferendis fuga blanditiis ab voluptatem aliquid quas tenetur quod praesentium rerum expedita! Quas at mollitia sequi architecto alias possimus saepe placeat sint nemo, cupiditate impedit explicabo officiis tempore, quasi deleniti nostrum est ratione quibusdam assumenda temporibus omnis. Sequi, sapiente esse? Aut nam repudiandae amet eum illum beatae dolorum quos asperiores pariatur nulla incidunt quasi assumenda porro optio excepturi, minima, veritatis quibusdam, dicta accusantium explicabo iusto sapiente nihil maiores accusamus. Optio, consequuntur. Quae fugit ratione fuga sunt, ab iste, soluta pariatur exercitationem possimus, asperiores dolor libero quia minima. Ipsum nobis totam libero. Quidem vel blanditiis recusandae accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuaaccusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo fuga vero accusamus impedit, iste quo 
        </p>
      </div>
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
}

.aboutMe--main,
.aboutMe--image{
  width: 40%;
}

.aboutMe--about {
  display: flex;
  align-items: center;
}

.aboutMeContent--text {
  font-size: 1.5vw;
  color: #fff;
}

.aboutMe--image__text {
  max-height: 100%;
  margin: 0;
  font-size: 1vw;
  line-height: 0.5rem;
  background: url("https://media-exp1.licdn.com/dms/image/C5603AQG7XDLKZRnUhw/profile-displayphoto-shrink_200_200/0/1618525230477?e=1636588800&v=beta&t=Nb23PR9jvlRiWlAqPUbLzKQBiKAGRgu9fCwkJZCBevw");
  background-size: contain;
  background-clip: text;
  -webkit-background-clip: text;
  background-repeat: no-repeat;
  -webkit-text-fill-color: rgba(27, 28, 34, 0);
  background-position: center;
}

@media (max-width: 680px) {
  .aboutMe--main,
  .aboutMe--image{
    width: 100%;
  }

  .aboutMe {
    display: flex;
    flex-direction: column;
  }

  .aboutMeContent--text {
    font-size: 1.7vh;
    color: #fff;
  }

  .aboutMe--image__text {
    font-size: 0.8vh;
    line-height: 0.3rem;
  }
  
}

@media (max-width: 950px) {
  .aboutMe--mainContent{
    height: 60vh;
  }

  .aboutMe--about,
  .aboutMe--image {
    max-height: 50vh;
  }

  .aboutMe {
    height: 70vh;
  }
}
</style>