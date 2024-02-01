<template>
  <footer class="text-center">
    <small class="text-black"
      >Made by Philani Mxathule copyrights &copy; 2024</small
    >
    <div class="icons d-flex justify-content-between">
      <router-link to="/"
        ><a href="home">
          <i class="bi bi-house"></i> </a
      ></router-link>
      <router-link to="about"
        ><a href="#">
          <i class="bi bi-file-person"></i> </a
      ></router-link>
      <router-link to="education"
        ><a href="#">
          <i class="bi bi-mortarboard-fill"></i> </a
      ></router-link>
      <router-link to="projects"
        ><a href="#">
          <i class="bi bi-briefcase"></i> </a
      ></router-link>
      <router-link to="skills"
        ><a href="#">
          <i class="bi bi-code-slash"></i> </a
      ></router-link>
      <router-link to="skills"
        ><a href="#">
          <i class="bi bi-bag-x"></i> </a
      ></router-link>
      <router-link to="testimonials22"
        ><a href="#">
          <i class="bi bi-person-rolodex"></i> </a
      ></router-link>
      <router-link to="contact"
        ><a href="contact">
          <i class="bi bi-telephone"></i> </a
      ></router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  bottom: 0;
  width: 100%;
  padding: 1px;
  background-color: #e8eeef;
  z-index: 50;
}

a {
  color: #070606;
}

a:hover {
  color: #070606;
}
</style>
