<template>
  <div class="container vh-100 p-5 my-5">
    <h1>This is testimonials page</h1>
    <div class="d-block justify-content-center align-items-center">
      <figure>
        <img
          src="https://i.postimg.cc/g0pyf3Cg/Silizwe-2.jpg"
          alt="Portfolio Item"
        />
        <figcaption>
          <h3>Title</h3>
          <p>Description.</p>
        </figcaption>
      </figure>

      <figure>
        <img
          src="https://i.postimg.cc/1XDdybhR/Khanyiswa-2.jpg"
          alt="Portfolio Item"
        />
        <figcaption>
          <h3>Title</h3>
          <p>Description.</p>
        </figcaption>
      </figure>

      <figure>
        <img
          src="https://i.postimg.cc/kXryQrjr/Sibongile-2.jpg"
          alt="Portfolio Item"
        />
        <figcaption>
          <h3>Title</h3>
          <p>Description.</p>
        </figcaption>
      </figure>

      <figure>
        <img
          src="https://i.postimg.cc/rshkbdbJ/9-BF3-E51-D-57-C5-49-C6-BA88-AE494436-B96-B.jpg"
          alt="Portfolio Item"
        />
        <figcaption>
          <h3>Title</h3>
          <p>Description.</p>
        </figcaption>
      </figure>

      <figure>
        <img
          src="https://i.postimg.cc/DZLSFN1s/Godwin22.jpg"
          alt="Portfolio Item"
        />
        <figcaption>
          <h3>Title</h3>
          <p>Description.</p>
        </figcaption>
      </figure>

      <figure>
        <img
          src="https://i.postimg.cc/1Xqq4J2C/joel2.jpg"
          alt="Portfolio Item"
        />
        <figcaption>
          <h3>Title</h3>
          <p>Description.</p>
        </figcaption>
      </figure>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
};
</script>

<style scoped lang="css">
body {
  background-color: #f6f6f6;
  background-image: -webkit-linear-gradient(
      left,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0) 50%,
      hsla(0, 0%, 0%, 0.015) 50%,
      hsla(0, 0%, 0%, 0.015) 100%
    ),
    -webkit-radial-gradient(hsla(0, 0%, 0%, 0.05) 10%, transparent 15%);
  background-size: 1.5em 1.5em, 0.5em 0.5em;
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.5;
  margin: 0 auto;
  padding: 1.5em;
  width: 45em;
}

figure {
  float: left;
  height: 10em;
  margin: 1.5em;
  width: 15em;
  -webkit-transform: perspective(500);
  -webkit-transform-style: preserve-3d;
  -webkit-transition: 0.5s;
}

figure:hover {
  -webkit-transform: perspective(500) rotateX(90deg) translateY(-3em)
    translateZ(3em);
}

img {
  background-color: #222;
  box-shadow: 0 20px 15px -10px hsla(0, 0%, 0%, 0.25);
  display: block;
  height: 100%;
  -webkit-transition: 0.5s;
  width: 100%;
  object-fit: cover;
  object-position: 0 0;
}

figure:hover img {
  box-shadow: none;
}

figcaption {
  background-color: #222;
  color: #fff;
  padding: 1.5em;
  -webkit-transform: rotateX(-90deg);
  -webkit-transform-origin: 100% 0;
  -webkit-transition: 0.5s;
}

figure:hover figcaption {
  box-shadow: 0 20px 15px -10px hsla(0, 0%, 0%, 0.25);
}
</style>
