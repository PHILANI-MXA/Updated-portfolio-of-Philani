<template>
    <div id="experience" class="container text-start my-5 h-100 justify-content-between overflow-auto">
      <h2 class="text-center bg-black my-5 p-3 fw-bolder">Work Experience</h2>
      <div class="row">
        <div class="col-md-6" >
          <div class="">
            <div class="text-black">
              <div class="item" data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                <h4 class="text-black">PAY intern @Western Cape Government</h4>
                <h6 class="text-black">Cultural Affairs and Sport</h6>
                <h6>SOMS: [CRU] Corporate Relations Unit </h6>
                <p>Duties: Human Resource Admin Support Working with Persal system under the following fields Housing
                  Leave administration PAY interns payslip processing Overtime, Performance Management </p>
              </div>
              <hr>
              <div class="item" data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                <h4 class="text-black">Tradeway</h4>
                <h6 class="text-black">Marketing and Sales Assistant</h6>
                <h6></h6>
                <p>Store promoter, promoting various items for different retail companies.</p>
              </div>
            </div>
            <hr>
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-black item" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
            <h4 class="text-black">British Airways Tobacco</h4>
            <h6 class="text-black">Promoter</h6>
            <h6></h6>
            <p>Promoting ciggarets for retail stores, influencing customers to buy ciggarets that are associated with BAT
            </p>
          </div>
          <hr>
          <div class="my-3 text-black">
            <div class="item" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
              <h4 class="text-black">Lifechoices Studio</h4>
              <h6 class="text-black">Web developer Intern/Student</h6>
              <p>Duties: Creating website based projects using programming languages that we are learning at the academy.
                Place for upskilling myself. Attending professional development trainigs and boosting my soft skills</p>
            </div>
          </div>
        </div>
      </div>
      <hr>
    </div>
  
  
  </template>
  
  <script>
  export default {
    name: '',
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
.item {
  width: 500px;
  height: 200px;
  background: #f6f6f6;
  text-align: center;
  color: #4E4C48;
  font-size: 1.1em;
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
  
  
  