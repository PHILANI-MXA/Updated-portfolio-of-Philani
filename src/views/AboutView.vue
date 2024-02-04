<template>
  <div
    id="about"
    class="p-5 my-5 container text-start min-vh-100 justify-content-between"
  >
    <h2 class="text-center fw-bolder p-3">About</h2>
    <div class="row p-3" data-aos="fade-right">
      <div class="col-md-4">
        <div class="">
          <div class="avatar">
            <div>
              <img
                class="img-fluid animate text-white opacity-50"
                src="https://i.postimg.cc/s22npm2j/IMG-3418-ANIMATION.gif"
                alt="my image"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 details" data-aos="flip-right">
        <div class="row text-black details">
          <p class="col-4 details">DOB</p>
          <p class="col-1">:</p>
          <p class="col-2 details">19990429</p>
        </div>
        <div class="row text-black details">
          <p class="col-4 details">Cell no</p>
          <p class="col-1">:</p>
          <p class="col-2 details">0646778134</p>
        </div>
        <div class="row text-black details">
          <p class="col-4 details">Age</p>
          <p class="col-1">:</p>
          <p class="col-2 details">25</p>
        </div>
        <div class="row text-black details">
          <p class="col-4 details">Gender</p>
          <p class="col-1">:</p>
          <p class="col-2 details">Male</p>
        </div>
        <div class="row text-black details">
          <p class="col-4 details">Drivers License</p>
          <p class="col-1">:</p>
          <p class="col-2 details">Yes</p>
        </div>
        <div class="row text-black details">
          <p class="col-4 details">Health Status</p>
          <p class="col-1">:</p>
          <p class="col-2 details">Excellent</p>
        </div>
        <div class="row text-black details">
          <p class="col-4 details">status of employment</p>
          <p class="col-1">:</p>
          <p class="col-2 details">RPA dev Intern</p>
        </div>
        <div class="row text-black">
          <p class="col-4 details">Criminal Record</p>
          <p class="col-1">:</p>
          <p class="col-2 details">Clear</p>
        </div>
        <div class="row text-black details">
          <p class="col-4 details">Religion></p>
          <p class="col-1">:</p>
          <p class="col-2 details">Christianity</p>
        </div>
        <button class="mx-5 px-3 hire-btn">
          <a href="./public/documents/CV of Philani Mxathule recent.pdf"
            download="./public/documents/CV of Philani Mxathule recent.pdf"
           >Resume</a>
        </button>

        <div></div>
      </div>
      <div
        class="col-md-4 myself"
        data-aos="zoom-in-up"
        data-aos-easing="ease-in"
      >
        <h4 class="text-black text-center"><small> Get to know me </small></h4>
        <div class="row myself">
          <h6
            class="text-center text-black myself"
            data-aos="zoom-in-up"
            data-aos-delay="500"
          >
            Bio
          </h6>
          <p class="text-black myself">
            Hi there! my name is Philani Mxathule 23, I matriculated in 2017. in
            2018 I did my first internship by the Western Cape government at
            department of cultural affairs and sport in the SOMS unit [Strategic
            and Operations Management Services] a year longer contract.
          </p>

          <p class="text-black myself" data-aos="zoom-in-up">
            I have managed to learn and experienced a lot because of my
            curiosity to know. I have problem solving skills and technical
            ability to create a logic and reasoning behind anything that needs
            to be solved.
          </p>

          <p class="text-black myself" data-aos="zoom-in-up">
            I enjoy continuous learning because knowing is not enough. I am
            self-disciplined, flexible and I can multi-task. I am able to take
            the responsibility and perform tasks as an individual but I can also
            work in teams. I believe I have good communication skills and I
            enjoy working in a diversified working environment because I value
            and respect other cultures.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  components: {},
  mounted() {
    AOS.init();
  },
};
AOS.init({
  duration: 2000,
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700");
* {
  font-family: Raleway, sans-serif;
}
@import url("https://fonts.googleapis.com/css2?family=Alkalami&family=Gemunu+Libre:wght@300;400;800&family=Shadows+Into+Light&display=swap");

/* .myself {
    font-family: 'Shadows Into Light', cursive;
    font-weight: bold;
}

.details {
    font-family: Raleway, sans-serif;
    font-weight: bold;
} */

.row {
  color: #898989;
  font-family: "Lucida Console", "Courier New", monospace;
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

.text-container button{
	width: 130px;
	height: 42px;
	border-radius: 12px;
	font-weight: 500;
	outline: none;
	margin: 0px 10px;
}
.hire-btn{
	border: none;
	color:#373636;
	transition: all 200ms;
	opacity:0;
	animation:intro1 2s ease forwards;
	animation-delay: 5s;
}
.hire-btn:hover{
	transform: scale(1.1);
	transition: all 200ms;
	box-shadow: 0 0 15px rgba(0,0,0,0.7);
}
.hire-btn:active{
	transform: scale(.8);
}
button:active{
	transform: scale(.9);
}
.animate{
	animation: fade-in 2s ease;
}
@keyframes fade-in{
	from{opacity: 0; transform: scale(0) translateX(200%);}
}

</style>
