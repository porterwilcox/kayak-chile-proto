<template>
  <nav class="navigation navbar navbar-expand-lg">
    <!-- logo -->
    <div class="d-flex justify-content-center w-25">
      <a class="navbar-brand" href="#">
        <img
          src="http://kayakchile.net/wp-content/uploads/2018/11/KayakChile-logo.jpg"
          alt="kayak-chile-logo" :height="$mq | mq({1: '50px', 2: '100px', 3: '75px', 4: '100px', 5: '100px'})"
        />
      </a>
    </div>
    <!-- /logo -->
    <div class="d-flex justify-content-center">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto row align-items-center">
        <li class="nav-item">
          <a class="nav-link text-green h6" href="#">Kayak School</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-green h6" href="#">Double Kayak</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-green h6" href="#">Family Float</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-green h6" href="#">Ducky</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-green h6" href="#">Multiday Trips</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-green h6" href="#">Advanced Classes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-green h6" href="#">Rentals</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  props: [],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>

<style scoped>
input[placeholder="Search"], input[placeholder="Search"]:active, input[placeholder="Search"]:focus {
    background: var(--baige);
    border: 1px solid lightgrey;
    outline: none;
    height: 30px;
}
input[placeholder="Search"]::placeholder {
    color: var(--green);
}
a[class*="nav-link"] {
  text-transform: uppercase;
}
</style>