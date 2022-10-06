<template>
    <div id="about" class="p-5 my-5 container text-start vh-100 justify-content-between">
        <h2 class="text-center bg-black p-3 fw-bolder p-3">About</h2>
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
            <div class="col-md-4 details" data-aos="flip-right">
                <div class="row text-black details">
                    <p class="col-4 details"> <small>DOB </small></p>
                    <p class="col-1">:</p>
                    <p class="col-2 details"> <small> 19990429 </small></p>
                </div>
                <div class="row text-black details">
                    <p class="col-4 details"> <small>Cell no</small></p>
                    <p class="col-1">:</p>
                    <p class="col-2 details"> <small>0646778134 </small></p>
                </div>
                <div class="row text-black details">
                    <p class="col-4 details"> <small>Age </small></p>
                    <p class="col-1">:</p>
                    <p class="col-2 details"> <small>23</small></p>
                </div>
                <div class="row text-black details">
                    <p class="col-4 details"> <small>Gender </small></p>
                    <p class="col-1">:</p>
                    <p class="col-2 details"> <small>Male</small></p>
                </div>
                <div class="row text-black details">
                    <p class="col-4 details"> <small>Driver's License</small></p>
                    <p class="col-1">:</p>
                    <p class="col-2 details"> <small>Yes </small></p>
                </div>
                <div class="row text-black details">
                    <p class="col-4 details"> <small>C-19 Vaccine </small></p>
                    <p class="col-1">:</p>
                    <p class="col-2 details"> <small>Fully Vaccinated</small></p>
                </div>
                <div class="row text-black details">
                    <p class="col-4 details"> <small>Health Status </small></p>
                    <p class="col-1">:</p>
                    <p class="col-2 details"> <small>Excellent</small></p>
                </div>
                <div class="row text-black details">
                    <p class="col-4 details"> <small>status of employment</small></p>
                    <p class="col-1">:</p>
                    <p class="col-2 details"> <small>Student Intern</small></p>
                </div>
                <div class="row text-black details">
                    <p class="col-4 details"><small>Host</small></p>
                    <p class="col-1">:</p>
                    <p class="col-2 details"><small>Life Choices</small></p>
                </div>
                <div class="row text-black">
                    <p class="col-4 details"> <small>Criminal Record </small></p>
                    <p class="col-1">:</p>
                    <p class="col-2 details"> <small> Clear </small></p>
                </div>
                <div class="row text-black details">
                    <p class="col-4 details"> <small>Religion </small></p>
                    <p class="col-1">:</p>
                    <p class="col-2 details"> <small> Christianity </small></p>
                </div>

                <div>

                </div>
            </div>
            <div class="col-md-4 myself" data-aos="zoom-in-up">
                <h4 class="text-black text-center"><small> Get to know me </small></h4>
                <div class="row myself">
                    <h6 class="text-center text-black myself" data-aos="zoom-in-up"> Bio</h6>
                    <p class="text-black myself">Hi there! my name is Philani Mxathule 23, I matriculated in 2017. in
                        2018 I
                        did my first internship by the Western Cape government at department of cultural affairs and
                        sport in the SOMS unit [Strategic and Operations Management Services] a year longer contract.
                    </p>

                    <p class="text-black myself" data-aos="zoom-in-up">
                        I have managed to learn and experienced a lot because of my curiosity to know. I have problem
                        solving skills and technical ability to create a logic and reasoning behind anything that needs
                        to be solved.
                    </p>

                    <p class="text-black myself" data-aos="zoom-in-up">I enjoy continous learning because knowing is not
                        enough. I am
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
    duration: 2000
});
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Raleway:400,700');
* {
    font-family: Raleway, sans-serif;
    font-weight: bold;
}
@import url('https://fonts.googleapis.com/css2?family=Alkalami&family=Gemunu+Libre:wght@300;400;800&family=Shadows+Into+Light&display=swap');

/* .myself {
    font-family: 'Shadows Into Light', cursive;
    font-weight: bold;
}

.details {
    font-family: Raleway, sans-serif;
    font-weight: bold;
} */

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


