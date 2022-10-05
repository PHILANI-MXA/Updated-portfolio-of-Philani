<template>
    <div id="skills" class="p-5 my-5 container text-start vh-100 justify-content-between">
        <h2 class="text-center bg-black p-3 fw-bolder p-3">Skills</h2>
        <div class="row p-3">
            <div class="col-md-4">
                <div class="">
                    <div class="avatar">
                        <div>
                            <img class="img-fluid animate text-white opacity-50"
                               src="https://i.postimg.cc/s22npm2j/IMG-3418-ANIMATION.gif" alt="my image">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <a href="https://css-tricks.com/aos-css-driven-scroll-animation-library/">https://css-tricks.com/aos-css-driven-scroll-animation-library/</a>

<a href="https://github.com/michalsnik/aos">https://github.com/michalsnik/aos</a>
<h1>AOS Animate On Scroll Library</h1>
<a href="https://michalsnik.github.io/aos/">https://michalsnik.github.io/aos/</a>
<h1>FADE</h1>
<div class="item" data-aos="fade-up" data-aos-anchor-placement="top-center">fade-up</div>
<div class="item" data-aos="fade-down">fade-down</div>
<div class="item" data-aos="fade-right">fade-right</div>
<div class="item" data-aos="fade-left">fade-left</div>
<div class="item" data-aos="fade-up-right">fade-up-right</div>
<div class="item" data-aos="fade-up-left">fade-up-left</div>
<div class="item" data-aos="fade-down-right">fade-down-right</div>
<div class="item" data-aos="fade-down-left">fade-down-left</div>

<h1>FLIP</h1>
<div class="item" data-aos="flip-left">flip-left</div>
<div class="item" data-aos="flip-right">flip-right</div>
<div class="item" data-aos="flip-up">flip-up</div>
<div class="item" data-aos="flip-down">flip-down</div>

<h1>ZOOM</h1>
<div class="item" data-aos="zoom-in">zoom-in</div>
<div class="item" data-aos="zoom-in-up">zoom-in-up</div>
<div class="item" data-aos="zoom-in-down">zoom-in-down</div>
<div class="item" data-aos="zoom-in-left">zoom-in-left</div>
<div class="item" data-aos="zoom-in-right">zoom-in-right</div>
<div class="item" data-aos="zoom-out">zoom-out</div>
<div class="item" data-aos="zoom-out-up">zoom-out-up</div>
<div class="item" data-aos="zoom-out-down">zoom-out-down</div>
<div class="item" data-aos="zoom-out-right">zoom-out-right</div>
<div class="item" data-aos="zoom-out-left">zoom-out-left</div>

<h1>DIFFERENT SETTINGS EXAMPLES</h1>
<div class="item" data-aos="fade-up" data-aos-duration="3000">fade-up</div>
<div class="item" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">fade-down linear</div>
<div class="item" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">fade-right</div>
<div class="item" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">fade-left</div>
<div class="item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">fade-zoom-in</div>
<div class="item" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">flip-left</div>

<h1>ANCHOR PLACEMENT</h1>
<div class="item" data-aos="fade-up" data-aos-anchor-placement="top-bottom">fade-up top-bottom</div>
<div class="item" data-aos="fade-up" data-aos-anchor-placement="center-bottom">fade-up center-bottom</div>
<div class="item" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">fade-up bottom-bottom</div>
<div class="item" data-aos="fade-up" data-aos-anchor-placement="top-center">fade-up top-center</div>
<div class="item" data-aos="fade-up" data-aos-anchor-placement="center-center">fade-up center-center</div>
<div class="item" data-aos="fade-up" data-aos-anchor-placement="bottom-center">fade-up bottom-center</div>
            </div>
            <div class="col-md-4">
                <h4 class="text-black text-center"><small> Get to know me </small></h4>
                <div class="row">
                    <h6 class="text-center text-black"> Bio</h6>
                    <p class="text-black ">Hi there! my name is Philani Mxathule 23, I matriculated in 2017. in 2018 I
                        did my first internship by the Western Cape government at department of cultural affairs and
                        sport in the SOMS unit [Strategic and Operations Management Services] a year longer contract.
                    </p>
  
                    <p class="text-black ">
                        I have managed to learn and experienced a lot because of my curiosity to know. I have problem
                        solving skills and technical ability to create a logic and reasoning behind anything that needs
                        to be solved.
                    </p>
  
                    <p class="text-black ">I enjoy continous learning because knowing is not enough. I am
                        self-disciplined, flexible and I can multi-task. I am able to take the responsility and perform
                        tasks as an individual but I can also work in teams. I believe I have good communication skills
                        and I enjoy working in a diversified working environment because I value and respect other
                        cultures.</p>
                </div>
  
            </div>
            <hr>
        </div>
  
    </div>
  
  </template>
  
  <script>
  export default {
    name: 'AboutView',
    components: {
    },
    mounted() {
    AOS.init()
  }
  }
  AOS.init({
  duration: 1000
});
  </script>
  
  <style scoped>
* {
  box-sizing: border-box;
}

.item {
  width: 200px;
  height: 200px;
  margin: 50px auto;
  padding-top: 75px;
  background: rgba(255,85,0, .7);
  text-align: center;
  color: #4E4C48;
  font-size: 1.5em;
}
  
  .row {
    background: #ffffff;
    color: #898989;
    font-family: 'Poppins', helvetica;
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
  </style>  