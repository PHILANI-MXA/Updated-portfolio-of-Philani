<template>
  <div
    id="education"
    class="container text-start my-5 p-4 h-100 justify-content-between"
  >
    <h2 class="text-center bg-black my-5 p-3 fw-bolder">Testimonials</h2>
    <div class="row d-inline-flex">

      <div class="col-md-6 item" data-aos="fade-right">
        <figure>
          <img
            src="https://i.postimg.cc/kXryQrjr/Sibongile-2.jpg"
            alt="Portfolio Item"
          />
          <figcaption>
            <h6>Sibongile</h6>
            <p>
              Philani is open minded developer he takes his time whenever he
              encounters a problem he is always cool, calm and collected.
            </p>
          </figcaption>
        </figure>
      </div>
      <div class="item col-md-6" data-aos="fade-right">
        <figure>
          <img
            src="https://i.postimg.cc/Fz6JLctV/image-6487327.jpg"
            alt="Portfolio Item"
          />
          <figcaption>
            <h6>Rasheedah</h6>
            <p>
              Philani is very hardworking and possesses a keen attention to
              detail. He is always ready and willing to assist his peers.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
    <div class="row d-inline-flex">
      <div class="col-md-6 item" data-aos="fade-right">
        <figure>
          <img
            src="https://i.postimg.cc/rshkbdbJ/9-BF3-E51-D-57-C5-49-C6-BA88-AE494436-B96-B.jpg"
            alt="Portfolio Item"
          />
          <figcaption>
            <h6>Lunga</h6>
            <p>
              Philani is a problem solver he does that with ease and peace of
              mind we work well together
            </p>
          </figcaption>
        </figure>
      </div>
      <div class="item col-md-6" data-aos="fade-right">
        <figure>
          <img
            src="https://i.postimg.cc/g0pyf3Cg/Silizwe-2.jpg"
            alt="Portfolio Item"
          />
          <figcaption>
            <h6>Siliziwe</h6>
            <p>
              Philani is a promising and open minded person. He is a multi
              skilled developer and I work well with him.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
    <div class="row row d-inline-flex">
      <div class="col-md-6 item" data-aos="fade-right">
        <figure>
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
      <div class="item col-md-6" data-aos="fade-right">
        <figure>
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
  name: "",
  components: {
    Testimonial22Vue,
  },
  mounted() {
    AOS.init();
  },
};
AOS.init({
  duration: 1000,
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700");

* {
  font-family: Raleway, sans-serif;
  font-weight: bold;
}

template {
    margin: auto;
}

body {
  background-color: #f6f6f6;
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
  float: left;
  height: 15em;
  margin: au;
  width: 18em;
  -webkit-transform: perspective(500);
  -webkit-transform-style: preserve-3d;
  -webkit-transition: 0.5s;
}

.figcaption {
  height: 15em;
}

figure:hover {
  -webkit-transform: perspective(500) rotateX(90deg) translateY(-3em)
    translateZ(3em);
}

img {
  background-color: #222;
  box-shadow: 0 20px 15px -10px hsla(0, 0%, 0%, 0.25);
  display: block;
  height: 100%;
  -webkit-transition: 0.5s;
  width: 100%;
  object-fit: cover;
  object-position: 0 0;
}

figure:hover img {
  box-shadow: none;
}

figcaption {
  background-color: #222;
  color: #fff;
  padding: 1.5em;
  -webkit-transform: rotateX(-90deg);
  -webkit-transform-origin: 100% 0;
  -webkit-transition: 0.5s;
}

figure:hover figcaption {
  box-shadow: 0 20px 15px -10px hsla(0, 0%, 0%, 0.25);
}
.row {
  background: #ffffff;
  color: #898989;
  font-family: "Poppins", helvetica;
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.02em;
  margin: 0 auto;
  padding: 0;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

img {
  border-radius: 10px;
  box-shadow: solid grey;
}

.item {
  width: 50%;
  height: 345px;
  background: #e8eeef;
  text-align: center;
  color: #4e4c48;
  font-size: 1.1em;
  flex-wrap: wrap;
}

</style>
