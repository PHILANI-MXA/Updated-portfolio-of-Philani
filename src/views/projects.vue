<template>
  <div id="projects" class="container min-vh-100 p-5 my-5 overflow-auto">
    <h2 class="text-center bg-black my-5 p-3 fw-bolder text-white">Projects</h2>
    <router-link to="/skills">
      <div class="backbutton">
        <h1>Back</h1>
      </div>
    </router-link>
    <div class="row justify-content-center gy-5">
      <div v-for="card in projects" :key="card.id" class="col-12 col-sm-6 col-lg-4">
        <div class="card h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ card.ProName }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ card.ProTechLang }}</h6>
            <img class="img-fluid mb-3 he" :src="card.Proimg" alt="Project Image" />
            <div class="mt-auto d-flex justify-content-between">
              <a :href="card.github" class="btn btn-success">Ghub</a>
              <a :href="card.live" class="btn btn-danger">Live</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 class="text-center bg-black my-5 p-3 fw-bolder text-white">Tech Certificates</h2>
    <div class="row justify-content-center gy-5">
      <div v-for="pic in certificates" :key="pic.id" class="col-12 col-sm-6 col-lg-4">
        <div class="card h-100">
          <div class="card-body d-flex flex-column">
            <img class="img-fluid" :src="pic.img" alt="Certificate Image" />
          </div>
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
.card {
  background: #e8eeef;
  text-align: center;
  color: #4e4c48;
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

.he{
  height: 90%;
}

.backbutton h1 {
  font-size: 1.5rem;
  color: #000;
}

img {
  max-width: 100%;
  height: auto;
}

.yes {
  flex: 1;
}

.btn {
  width: 45%;
}
</style>