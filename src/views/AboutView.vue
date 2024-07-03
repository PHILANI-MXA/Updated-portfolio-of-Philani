<template>
  <div
    id="about"
    class="p-5 my-5 container text-start min-vh-100 justify-content-between"
  >
    <h2 class="text-center fw-bolder p-3"></h2>
    <div class="row p-3" data-aos="fade-right">
      <div class="col-md-5 p-2">
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
      <div
        class="col-md-6 myself con"
        data-aos="zoom-in-up"
        data-aos-easing="ease-in"
      >
        <h2 class="fw-bold m-auto text-black d-flex justify-content-center align-items-center shadow-sm text-justify">ABOUT ME</h2>
        <div class="row myself">
          <p class="text-black myself std">
            I am a highly skilled and motivated individual with a strong foundation in computer literacy, programming languages, databases,
            and low-code/no-code platforms. I have a proven ability to design user interfaces, manage projects, and communicate effectively with teams.
            As an aspiring RPA developer with a strong background in full-stack development, I possess a diverse skill set across multiple programming
            languages including HTML, CSS, Bootstrap, Python, and JavaScript (along with various JavaScript frameworks).
            I enjoy tackling challenges by leveraging both low-code and traditional coding approaches.
            A quick learner with a passion for continuous improvement, I am eager to contribute to a dynamic team environment.
          </p>
          <div class="row m-auto">
            <div class="col"><button class="btn">Auto Anywhere</button> <button class="btn">UiPath</button> <button class="btn"> Power Platforms</button> <button class="btn"> MSSQL</button> <button class="btn">SharePoint</button> <button class="btn">JavaScript</button></div></div>
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
  height: 400px;
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

.con{
  background: linear-gradient(95deg,#dce1e6,hsla(209, 23%, 72%, 0.773), hsla(211, 23%, 79%, 0.305), #cacae7);
  height: 40%;
  width: 600px;
  position: center;
  margin: auto;
}

.std{
  align-content: center;
  text-align: justify;
  align-content: space-around;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.2em !important;
}

h2 {
  font-size: 2.2em !important;
  margin-top: 40px;
  text-align: center;
  color: #0A342B;
  font-weight: 500 !important;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px blue;
}

.btn {
  border: 2px solid #2e6bcc;
  width: 11em;
  height: 2.4em;
  font-family: Oxygen, sans-serif;
  font-size: 16px;
  box-shadow: 0px 0px 15px 3px rgba(15, 15, 15, 0.3);
  color: #fff;
  background-color: #2c3e50;
  border-radius: 4px;
  transition-property: border, background-color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  cursor: pointer;
  margin: auto;
}

.btn:hover {
  border-width: 4px;
  background-color: transparent;
}

</style>
