<template>
  <div
    id="education"
    class="container text-start my-3 p-4 h-100 justify-content-between"
  >
    <h2 class="text-center bg-black my-5 p-3 fw-bolder">Experience</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="">
          <div class="text-black">
            <div class="item" data-aos="fade-right">
              <div>
                <h4 class="text-black">Tradeway</h4>
                <h6 class="text-black">Marketing and Sales Assistant</h6>
                <h6></h6>
                <p>
                  Store promoter, promoting various items for different retail
                  companies.
                </p>
                <p>communicating and interacting with customers.</p>
                <p>
                  negotiating with customers to engage or participate in
                  promotional activities within a certain period.
                </p>
              </div>
            </div>
            <hr />
            <div class="item" data-aos="fade-right">
              <div class="text-black item">
                <h4 class="text-black">PAY intern @Western Cape Government</h4>
                <h6 class="text-black">Cultural Affairs and Sport</h6>
                <h6>SOMS: [CRU] Corporate Relations Unit</h6>
                <p>
                  Duties: Human Resource Admin Support Working with Persal
                  system under the following fields Housing Leave administration
                  PAY interns payslip processing Overtime, Performance
                  Management
                </p>
                <ul>
                  <li>
                    Have successfully completed Persal Introduction certificate
                    with <span class="cum"> cum laude pass </span>
                  </li>
                  <li>
                    Have successfully completed Personnel Administration
                    certificate with <span class="cum"> cum laude pass </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr/>
        </div>
      </div>
      <div class="col-md-6">
        <div class="text-black item" data-aos="fade-left">
          <div class="">
            <h4 class="text-black">British Airways Tobacco</h4>
            <h6 class="text-black">Promoter</h6>
            <h6></h6>
            <p>
              Promoting ciggarets for retail stores, influencing customers to
              buy ciggarets that are associated with BAT
            </p>
          </div>
        </div>
        <hr />
        <div class="my-3 text-black">
          <div class="item" data-aos="fade-left">
            <div class="my-3 text-black">
              <h4 class="text-black">Lifechoices Studio</h4>
              <h6 class="text-black">
                Intern/Student <span class="fw-bold">[Web development]</span>
              </h6>
              <p class="fw-bold">
                Intensive engagement with coding learning journeys
              </p>
              <ul>
                <li>Fullstack development learning journey 6 months</li>
                <li>VueJS, React and TypeScript</li>
                <li>Vite and Tailwind CSS</li>
                <li>PostgresSQL</li>
                <li>WordPress</li>
                <li>PHP</li>
              </ul>
              <p>
                The first learning journey in the list was part of my studies
                and the rest was part of my internship
                <span class="fw-bold">[ Aggregate pass mark of 80% ]</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "",
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

.cum{
  text-transform: uppercase;
  font-weight: bold;
}

img {
  border-radius: 10px;
  box-shadow: solid grey;
}

.item {
  min-width: 100%;
  height: 315px;
  background: #e8eeef;
  text-align: center;
  color: #4e4c48;
  font-size: 1.1em;
  overflow-y: auto;
  
}
</style>
