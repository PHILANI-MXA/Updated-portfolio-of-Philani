<template>
 

  <div class="container p-5 min-vh-100">
  <div class="text-container">
    <h4>Hi there!</h4>
    <h2>I am Philani </h2>
    <h4>I'm a Software Developer <br>& Web Designer</h4>
    <button class="hire-btn " id="about">
      <router-link class="text-decoration-none text-black" to="/contact"
      >HIRE ME</router-link
    >
    </button>
    <p class="text-black fw-bolder my-4 mtext">RPA developer intern specialization: Power Platforms</p>
    </div>
  </div>

</template>





<style lang="scss" >

*,
*::after,
*::before{
	box-sizing: border-box;
	scroll-behavior: smooth;
}

html
{
	font-family: 'Rajdhani', sans-serif;
}

body{
	background: linear-gradient(95deg,#cacae7,hsla(240, 0%, 47%, 0.773), hsla(240, 0%, 47%, 0.773), #cacae7);
  background: linear-gradient(95deg,  #cacae7 0%,
  #f6fff8 60%,  #f6fff8 50%,  #f6fff8 70%, #f6fff8 0%,#cacae7);;
	background-size: cover;
	background-repeat: repeat;
  margin: 0px;
	padding: 0px;
	overflow-x: hidden !important;
}


.active{
	font-weight:600;
	color: rgb(0, 9, 128);
}

.text-container{
	position: absolute;
	left: 12%;
	top:42%;
	transform: translate(-13%,-42%);
	animation: fade 2s ease-in;
}
.text-container p:nth-child(1){
	font-weight: 500;
	color: black;
	font-size: 22px;

.text-container h2
{
	font-weight: 700;
	color: #eee;
	letter-spacing: 1px;
	font-size:50px;
	font-family:'cinzel decorative';
	opacity: 0;
	user-select: none;
	background: linear-gradient(45deg,#fff200,#d400ff, #0ff);
	background-clip:text;
	-webkit-background-clip:text;
	-webkit-text-fill-color:transparent;
	animation:intro1 2s ease forwards;
	animation-delay: 3s;
}


.text-container p:nth-child(3){
	color: #dfdfdf;
	font-size: 27px;
	line-height: 1;
	opacity: 0;
	animation:intro1 2s ease forwards;
	animation-delay: 4s;
}

@keyframes intro1
{
	0%{
		opacity: 0;
		transform:translateY(20px);
	}
	100%{opacity:1;}
}

.text-container p{
	line-height: 0px;
	margin: 45px 0px 25px;
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
}
h2 {
  font-size: 3.2em !important;
  margin-top: 40px;
  text-align: center;
  color: #0A342B;
  font-weight: 500 !important;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px blue;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

h4{
  font-size: 1.2em !important;
  margin-top: 40px;
  text-align: center;
  color: #0A342B;
  font-weight: 500 !important;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px blue;
}

.hire-btn{
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
.hire-btn:hover {
  border-width: 4px;
  background-color: transparent;
}

.mtext:hover{
  border-width: 6px;
  background-color: #fff;
}
</style>

