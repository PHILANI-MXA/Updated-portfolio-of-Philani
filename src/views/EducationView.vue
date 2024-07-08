<template>
  <section class="container min-vh-100 my-5 py-5">
    <div class="container-fluid p-4">
      <div class="row">
        <div class="col-md-5 col-12 work_experience">
          <h2 class="experiencies p-4">Education</h2>
          <ol class="work">
            <li class="we_item shadow-sm ft" data-aos="fade-down" data-aos-duration="3000"
            >
              <span class="carrec ft"><span class="li2019">[UWC]</span>University of the Western Cape</span>
              <span class="empresa">
                <p lang="la" class="ft">Bachelor of Library and Information Science [NQF L8] <br><span class="view ft"><a href="http://">view</a></span></p>
              </span>
              
            </li>
            <li class="we_item shadow-sm ft" data-aos="fade-up" data-aos-duration="3000">
              <span class="carrec ft"><span class="li2018">[LC]</span><abbr title="User experience"></abbr> Lifechoices Coding Academy</span>
              <p lang="la" class="ft">Fullstack Development Bootcamp 6 Months <span class="view"><br><a href="http://">view</a></span></p>
              
            </li>
            <li class="we_item shadow-sm ft" data-aos="fade-down" data-aos-duration="3000"
            >
              <span class="carrec ft"><span class="li2016">SL</span><abbr title="User Interface"></abbr> SoloLearn Coding</span>
              <p lang="la" class="ft">Self taught - multi programming languages <br><span class="ft m-auto"><a href="http://">view</a></span></p>
              
            </li>
            <li class="we_item shadow-sm ft" data-aos="fade-up" data-aos-duration="3000">
              <span class="carrec ft"><span class="li2016">UWC</span><abbr title="User Interface"></abbr>CoLab RPA Learnership </span>
              <p lang="la" class="ft">Robotic Process Automation course <br><span class="view"><a href="http://">view</a></span></p>
              
            </li>
          </ol>
        </div>
        <div class="col-md-7 col-12 education" data-aos="zoom-out-down">
          <h2 class="education-title p-4">Experience</h2>
          <ol class="educa text-start ">
            <li class="education_item px-5 shadow-sm ft" data-aos="flip-right">
              <span class="carrec ft"><span class="li2017"> LC </span> Studio 2022</span><br>
              <span class="empresa ft">Junior Fullstack Developer</span>
              <p>Capstone</p><p>Research analysis</p>
            </li>
            <li class="education_item px-5 shadow-sm ft" data-aos="flip-left">
              <span class="carrec ft"><span class="li2017"> UWC </span> Library Services</span><br>
              <span class="empresa text-start ft">Work Integrated Learning</span>
              <p>Library Systems</p>
            </li>
            <li class="education_item px-5 shadow-sm ft" data-aos="flip-right">
              <span class="carrec ft"><span class="li2017"> UWC </span>WC CoLab</span><br>
              <span class="empresa ft">RPA developer intern</span>
              <p>Power Platforms</p><p></p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutView",
  components: {},
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700");

* {
  font-family: Raleway, sans-serif;
}



.experiencies, .education-title {
  text-align: left;
  padding-top: 20px;
}


.lists li {
  list-style: none;
  
}

.education_item, .we_item {
  border-left: 2px solid black;
  position: relative;

}

.work_experience li::before, .education li::before {
  position: absolute;
  left: -26px;
  top: -15px;
  content: "";
  border-radius: 50%;
  background: #cacae7;
  height: 50px;
  width: 50px;
}

@media (max-width: 768px) {
  .experiencies, .education-title {
    text-align: left;
  }


  .work_experience, .education {
    padding: 10px;
  }
}

.backgr{
  background: linear-gradient(95deg,#dce1e6,hsla(209, 23%, 72%, 0.773), hsla(211, 23%, 79%, 0.305), #cacae7);
  width: 100%;
}

.ft{
  padding: 5px;
  font-size: 1.2em !important;
  align-content: center;
  align-content: space-around;
  font-family: 'Gill Sans', 'Gill Sans MT';
  color: #000 black;
  font-weight: 500 !important;
}

</style>
