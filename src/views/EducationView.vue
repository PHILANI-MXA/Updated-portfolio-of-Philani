<template>

  <section class="container min-vh-100 my-5 p-5">
    <div class="lists p-5">
   <div class="work_experience">
     <h2 class="experiencies">Experiences</h2>
     <ol class="work">
       <li class="we_item">
         <span class="carrec"><span class="li2019"> 2018</span> PAY Intern HR </span><span class="empresa">CRU</span><p lang="la">Department of Cultural Affairs and Sport</p></li>
       
       <li class="we_item">
         <span class="carrec"><span class="li2018">2019</span><abbr title="User experience"></abbr>Tradeway</span> <span class="empresa"></span><p lang="la">Marketiing and Sales</p></li>
       
       <li class="we_item">
         <span class="carrec"><span class="li2016"> 2020 </span><abbr title="User Interface"></abbr>British Airways</span><p lang="la">Promoter</p></li>
       
       <li class="we_item">
         <span class="carrec"><span class="li2014"> 2023</span>RPA Developer Intern</span> <span class="empresa">Innovation Lab</span><p lang="la">University of the Western Cape</p></li>
       </ol>
       </div>
<div class="education">
     <h2 class="education-title">Education</h2>
     <ol class="educa">
       <li class="education_item">
         <span class="carrec"><span class="li2017"> 2017 </span>Matric</span> <span class="empresa">Sinako High School</span>
         <p>NSC (WCDE)</p>
</li>
       <li class="education_item">
         <span class="carrec"><span class="li2015"> 2022 </span>Lifechoices </span> <span class="empresa">Coding Academy</span>
         <p>Fullstack Development</p>
</li>
     <li class="education_item">
       <span class="carrec"><span class="li2013"> 2023 </span>BLIS</span> <span class="empresa">University of the Western Cape</span>
<p>Bachelor of Library and Information Science</p>
       </li>
</ol>

        </div></div>
      </section>
  <!-- <div
    id="education"
    class="container text-start my-5 p-4 h-100 justify-content-between"
  >
    <h2 class="text-center my-5 p-3 fw-bolder">Education</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="">
          <div class="text-black">
            <div class="item" data-aos="fade-right">
              <div>
                <h4 class="text-black">Matric - class of 2017</h4>
                <h6 class="text-black">Sinako High School (WCDE)</h6>
                <p class="text-black">Bachelor pass</p>
                <p class="text-black">Subjects</p>
                <ul class="text-black">
                  <li>English</li>
                  <li>IsiXhosa</li>
                  <li>Life Orientation</li>
                  <li>Tourism</li>
                  <li>Business Studies</li>
                  <li>Economics</li>
                  <li>Maths Lit</li>
                </ul>
              </div>
            </div>
            <hr />
            <div class="item" data-aos="fade-right">
              <div class="text-black item">
                <h4>Sololearn</h4>
                <h6>Online Self Learning Programming Institution</h6>
                <p>Unlocked 4 Badges @level-13</p>
                <p>Languages</p>
                <ul class="">
                  <li>Python</li>
                  <li>CSS 3</li>
                  <li>HTML 5</li>
                  <li>SQL</li>
                  <li>JavaScript</li>
                  <li>C</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div class="col-md-6">
        <div class="text-black item" data-aos="fade-left">
          <div class="">
            <h4 class="text-black">
              Bachelor of Library and Information Science 2019-2022
            </h4>
            <h6 class="text-black">University of the Western Cape</h6>
            <p class="text-black">3rd year level</p>
            <p class="text-black">Modules</p>
            <ul class="text-black">
              <li>
                Library Science 111, 121, 241, 242, 243, 244, 321, 301, 302
              </li>
              <li>History 231, 241, 331, 332</li>
              <li>Anthropology and Sociology 111, 121</li>
              <li>Ethics 111, 121</li>
              <li>Language and Communication Studies (LCS) 111, 121</li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="my-3 text-black">
          <div class="item" data-aos="fade-left">
            <div class="my-3 text-black">
              <h4 class="my-2">6 Months Coding Course</h4>
              <h6><span class="fw-bold">[Cohort 10]</span> 28 March 2022 - 16 September 2022</h6>
              <h6>Lifechoices Academy</h6>
              <p>Languages</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap 5</li>
                <li>SQL</li>
                <li>JavaScript && Js Frameworks NodeJs, VueJs</li>
                <li>Capstone Project</li>
                <li>Professional and Personal Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div> -->
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
  duration: 1000,
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700");
* {
  font-family: Raleway, sans-serif;
}

.lists{ 
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin:0 auto;
}

.experiencies, .education-title { /* titlos de la llista index experiencia i education */
  text-align: left;
  font-size: 38px;
  padding-top: 20px;
}

.carrec { /* color carrec llista */
  font-weight: bold;
  font-size: 20px;
}

/*------BOLES I NUMEROS DE LA LLISTA-------*/

.lists li {
  list-style: none;
  padding-bottom: 30px;
}

.education_item, .we_item {
  border-left: 2px solid black;
  position: relative;
  padding-left: 40px;
}

.work_experience li::before, .education li::before {
  position: absolute;
  left: -26px;
  top: -15px;
  content: "";
  border-radius: 500%;
  background: #cacae7;
  height: 50px;
  width: 50px;
}
/*.row {
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
  width: 100%;
  height: 345px;

  text-align: center;
  color: #4e4c48;
  font-size: 1.1em;
}*/
</style>
