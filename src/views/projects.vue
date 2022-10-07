<template>
    <div id="projects" class="container h-100 p-5 my-5">

        <h2 class="text-center bg-black my-5 p-3 fw-bolder text-white">Projects</h2>
        <div class="row  justify-content-between gy-5">
            <div v-for="card in projects" class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{card.ProName}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{card.ProTechLang}}</h6>
                    <img class="img-fluid" :src="card.Proimg" alt="">
                    <a :href="card.github" class="yes btn btn-primaryd-flex btn-success flex-start">Ghub</a>
                    <a :href="card.live" class="yes btn btn-primaryd-flex btn-danger flex-end">live</a>
                    <br>
                </div>
            </div>
            <!-- <div v-for="card in projects" class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="card.Proimg" class="img-fluid rounded-start" alt="title">
            </div>
            <p>{{card.ProName}}</p>
            <p>{{card.ProTechLang}}</p>
            <a :href="card.github" class="btn btn-primaryd-flex btn-success justify-content-between">Ghub</a>
            <a :href="card.live" class="btn btn-primaryd-flex btn-danger justify-content-between">live</a>
            <div class="col-md-8 border border-black">
            <div class="card-body">
            <h5 class="card-title">{{card.projectname}}</h5>
            </div>
            </div>
          </div>
        </div> -->
            <h2 class="text-center bg-black my-5 p-3 fw-bolder text-white">Certificates</h2>
            <div v-for="pic in certificates" class="cards" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <h6 class="card-subtitle mb-2 text-muted"></h6>
                    <img class="img-fluid" :src="pic.img" alt="">
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    computed: {
        projects() {
            return this.$store.state.projects;
        },
        certificates() {
            return this.$store.state.certificates;
        }
    }
}

</script>
  
<style scoped>

    .yes{
        justify-content: space-around;
    }
/* .card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: white;
    font-family: San-Francisco;
    border-radius: 10px;
    transition: 0.4s ease-out;
    width: 28%;
  } */

.card {
    width: 40%;
    height: 700px;
    background: #e8eeef;
    text-align: center;
    color: #4E4C48;
    font-size: 1.1em;
    line-height: 100px;

}

.cards {
    width: 40%;
    height: 200px;
    background: #e8eeef;
    text-align: center;
    color: #4E4C48;
    font-size: 1.1em;
    line-height: 100px;

}

/* .card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    color: black;
    font-family: San-Francisco;
    transition: 0.4s ease-out;
    margin-bottom: 10px;
    width: 40%;
    height: 200px;
} */

.card:hover {
    transform: translate3d(0px, -1px, 0px);
}

.btn {
    justify-content: space-between;
    align-content: space-around;
}
</style>