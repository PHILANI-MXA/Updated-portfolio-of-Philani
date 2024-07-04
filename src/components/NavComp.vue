<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="https://i.ibb.co/LtRKHxs/favicon-32x32.png"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav m-auto">
            <li class="nav-item text-white">
              <router-link class="text-decoration-none text-black" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item text-decoration-none">
              <router-link class="text-decoration-none text-black" to="/about"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="text-decoration-none text-black"
                to="/education"
                >Education</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="text-decoration-none text-black" to="/skills"
                >Skills</router-link
              >
            </li>
            <li class="nav-item flex-end">
              <router-link
                class="text-decoration-none text-black"
                to="/Maintananceroute"
                >Projects</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700");

* {
  font-family: Raleway, sans-serif;
}

.nav-item {
  position: relative;
  padding: 20px;
  font-size: larger;
  font-family: Raleway, sans-serif;
}

.navbar-brand {
  font-style: italic;
}

.btn {
  color: white;
  border-color: white;
}

nav {
  position: fixed;
  width: 100%;
  top: 0;
  background-color:#fff;
  z-index: 50;
}
</style>
