<template>
  <div
    id="education"
    class="container text-start my-5 p-4 h-100 justify-content-between overflow-auto"
  >
    <h2 class="text-center bg-black my-5 p-3 fw-bolder">Testimonials</h2>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 item" data-aos="fade-right">
        <figure class="my-5">
          <img
            src="https://i.postimg.cc/1Xqq4J2C/joel2.jpg"
            alt="Portfolio Item"
          />
          <figcaption>
            <h6>Joel</h6>
            <p>
              I hope that Philani can meet your expectations, he is so humble
              and goal orientated.
            </p>
          </figcaption>
        </figure>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 item" data-aos="fade-right">
        <figure class="my-5">
          <img
            src="https://i.postimg.cc/1Xqq4J2C/joel2.jpg"
            alt="Portfolio Item"
          />
          <figcaption>
            <h6>Joel</h6>
            <p>
              I hope that Philani can meet your expectations, he is so humble
              and goal orientated.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 item" data-aos="fade-right">
        <figure class="my-5">
          <img
            src="https://i.postimg.cc/1Xqq4J2C/joel2.jpg"
            alt="Portfolio Item"
          />
          <figcaption>
            <h6>Joel</h6>
            <p>
              I hope that Philani can meet your expectations, he is so humble
              and goal orientated.
            </p>
          </figcaption>
        </figure>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 item" data-aos="fade-right">
        <figure class="my-5">
          <img
            src="https://i.postimg.cc/1Xqq4J2C/joel2.jpg"
            alt="Portfolio Item"
          />
          <figcaption>
            <h6>Joel</h6>
            <p>
              I hope that Philani can meet your expectations, he is so humble
              and goal orientated.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 item" data-aos="fade-right">
        <figure class="my-5">
          <img
            src="https://i.postimg.cc/DZLSFN1s/Godwin22.jpg"
            alt="Portfolio Item"
          />
          <figcaption>
            <h6>Godwin</h6>
            <p>
              Philani is very passionate about coding now I can assure that he
              understands the code very well
            </p>
          </figcaption>
        </figure>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 item" data-aos="fade-right">
        <figure class="my-5">
          <img
            src="https://i.postimg.cc/1Xqq4J2C/joel2.jpg"
            alt="Portfolio Item"
          />
          <figcaption>
            <h6>Joel</h6>
            <p>
              I hope that Philani can meet your expectations, he is so humble
              and goal orientated.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import Testimonial22Vue from "./Testimonial22.vue";
export default {
  components: {
    Testimonial22Vue,
  },
  mounted() {
    AOS.init({ duration: 1000 });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700");

* {
  font-family: Raleway, sans-serif;
  font-weight: bold;
}

body {
  background-image: -webkit-linear-gradient(
      left,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0) 50%,
      hsla(0, 0%, 0%, 0.015) 50%,
      hsla(0, 0%, 0%, 0.015) 100%
    ),
    -webkit-radial-gradient(hsla(0, 0%, 0%, 0.05) 10%, transparent 15%);
  background-size: 1.5em 1.5em, 0.5em 0.5em;
  font-family: sans-serif;
  font-size: 1.1em;
  line-height: 1.5;
  margin: auto;
}

figure {
  margin: auto;
  width: 100%;
  height: auto;
  -webkit-transform: perspective(500);
  -webkit-transform-style: preserve-3d;
  -webkit-transition: 0.5s;
}

figure:hover {
  -webkit-transform: perspective(500) rotateX(90deg) translateY(-3em)
    translateZ(3em);
}

img {
  background-color: #222;
  box-shadow: 0 20px 15px -10px hsla(0, 0%, 0%, 0.25);
  display: block;
  width: 80%;
  height: auto;
  border: #222;
  margin: auto;
  aspect-ratio: 0;
  border-radius: 40%;
  object-fit: cover;
  -webkit-transition: 0.5s;
}

figcaption {
  background-color: #222;
  color: #fff;
  padding: 1.5em;
  -webkit-transform: rotateX(-90deg);
  -webkit-transform-origin: 100% 0;
  -webkit-transition: 0.5s;
  text-align: center;
}

figure:hover figcaption {
  box-shadow: 0 20px 15px -10px hsla(0, 0%, 0%, 0.25);
}

.item {
  background: #e8eeef;
  text-align: center;
  color: #4e4c48;
  font-size: 1.1em;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .item {
    height: auto;
  }
}
</style>