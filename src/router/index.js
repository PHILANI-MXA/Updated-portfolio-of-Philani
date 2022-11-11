import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/education',
    name: 'education',
    component: () => import(/* webpackChunkName: "education" */ '../views/EducationView.vue')
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import(/* webpackChunkName: "experience" */ '../views/ExperienceView.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import(/* webpackChunkName: "skills" */ '../views/SkillsView.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import(/* webpackChunkName: "testimonials" */ '../views/Testimonials.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/contact.vue')
  },
  {
    path: '/testimonials22',
    name: 'testimonials22',
    component: () => import(/* webpackChunkName: "testimonials" */ '../views/Testimonial22.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "testimonials" */ '../views/projects.vue')
  },
  {
    path: '/single',
    name: 'single',
    component: () => import(/* webpackChunkName: "testimonials" */ '../views/SingleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
