<template>
  <div id="projects" class="container min-vh-100 p-5 my-5 overflow-auto">
    <h2 class="text-center bg-black my-5 p-3 fw-bolder text-white">Projects</h2>
    <router-link to="/skills">
      <div class="backbutton">
        <h1>Back</h1>
      </div></router-link
    >
    <div class="row justify-content-between gy-5">
      <div v-for="card in projects" class="card">
        <div class="card-body">
          <h5 class="card-title">{{ card.ProName }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ card.ProTechLang }}</h6>
          <img class="img-fluid" :src="card.Proimg" alt="" />
          <a
            :href="card.github"
            class="yes btn btn-primaryd-flex btn-success flex-start"
            >Ghub</a
          >
          <a
            :href="card.live"
            class="yes btn btn-primaryd-flex btn-danger flex-end"
            >live</a
          >
        </div>
      </div>
      <h2 class="text-center bg-black my-5 p-3 fw-bolder text-white">
        Tech Certificates
      </h2>
      <div v-for="pic in certificates" class="cards">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <img class="img-fluid" :src="pic.img" alt="" />
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
    },
  },
};
</script>

<style scoped>
.yes {
  justify-content: space-around;
}

.card {
  width: 40%;
  height: 100%;
  background: #e8eeef;
  text-align: center;
  color: #4e4c48;
  font-size: 1.1em;
  line-height: 100px;
}

.cards {
  width: 40%;
  height: 100%;
  background: #e8eeef;
  text-align: center;
  color: #4e4c48;
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
