<template>
  <div class="container m-auto">
    <home-view />
    <about-view />
    <education-view/>
    <experience-view/>
    <skills-view/>
    <Testimonials/>
    <contact-view/>
    
  </div>
</template>

<script>
import HomeViewVue from "./HomeView.vue";
import AboutView from "./AboutView.vue";
import EducationView from "./EducationView.vue";
import ExperienceView from "./ExperienceView.vue";
import SkillsView from './SkillsView.vue';
import Testimonials from './Testimonial22.vue';
import contact from "./contact.vue"


export default {
  name: "",
  components: {
    HomeViewVue,
    AboutView,
    EducationView,
    ExperienceView,
    SkillsView,
    Testimonials,
    contact
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
