<template>
  <div class="home container-fluid">
    <div id="home-carousel" data-interval="4800" class="carousel slide row" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#home-carousel" data-slide-to="0" class="active"></li>
        <li data-target="#home-carousel" data-slide-to="1"></li>
        <li data-target="#home-carousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner position-relative">
        <div class="caro-text-container h-100 position-absolute w-100 d-flex justify-content-center align-items-center">
          <h2 class="caro-text">TRANCURA. PALGUIN. FUTALEUFU.</h2>
        </div>
        <div class="carousel-item active">
          <img src="https://puconkayakhostel.secure.retreat.guru/wp-content/uploads/sites/434/2019/08/kayak-pucon-chile-upper-nevados-hunt-jennings.jpg"
            class="d-block w-100" alt="" />
        </div>
        <div class="carousel-item">
          <img
            src="https://wetplanetwhitewater.com/wp-content/uploads/2018/03/Haley_staffslider.jpg"
            class="d-block w-100" alt="" />
        </div>
        <div class="carousel-item">
          <img
            src="http://gene17kayaking.com/wp-content/uploads/2011/08/8361804175_51a32c89fd_b.jpg"
            class="d-block w-100" alt="" />
        </div>
      </div>
      <a class="carousel-control-prev" href="#home-carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#home-carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="row justify-content-center bg-baige">
      <div class="col-11">
        <div class="row justify-content-between" :class="{'flex-column': $mq < 3}">
          <div class="col-12 col-lg-4">
            <div class="card">
              <div class="card-header-container">
                <img src="http://kayakchile.net/wp-content/uploads/2018/03/avatar069.jpg"
                  class="card-img-top">
                <h4 class="centered">“Heaps of fun, excellent guides!”</h4>
              </div>
              <div class="card-body text-center">
                <p class="text-black">We had heaps of fun, well supported by knowledgeable and professional guides. (...) A great introduction to this sport <a href="#" class="text-link-green">RobinandRod</a></p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card card2">
              <div class="card-header-container">
                <img
                  src="http://kayakchile.net/wp-content/uploads/2018/03/avatar075.jpg"
                  class="card-img-top">
                <h4 class="centered">"Great Family Float"</h4>
              </div>
              <div class="card-body text-center">
                <p class="text-black">Our family of five with kids age 8, five, four loved the family float. (...) It was a nice relaxing trip which was neither too adventurous nor too boring for any of us. (...) Highly recommended! <a href="#" class="text-link-green">Aaron B</a></p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card card3">
              <div class="card-header-container">
                <img
                  src="http://kayakchile.net/wp-content/uploads/2018/03/avatar074.jpg"
                  class="card-img-top">
                <h4 class="centered">"Advanced kayak school"</h4>
              </div>
              <div class="card-body text-center">
                <p class="text-black">Ben (big) took the time to understand our abilities and provided good recommendations for a days paddle. (...) The rivers they recommended provided a good warm up and then a bit of a challenge.(...) Highly recommended! <a href="#" class="text-link-green">Sam T</a></p>
              </div>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-center">
            <img src="http://kayakchile.net/wp-content/uploads/2018/03/2017_COE_Logos_white-bkg_translations_en-US-UK-300x225.png" class="mb-2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    components: {}
  };
</script>

<style scoped>
  .caro-text-container {
    z-index: 1;
    animation: caption-left 1s 1 cubic-bezier(0.985, 0.005, 0.265, 1);
    left: -100%;
    animation-fill-mode: forwards;
  }

  @keyframes caption-left {
    100% {
      left: 0;
    }
  }

  .caro-text {
    font-size: 3vw;
    color: white;
    border: 3px solid white;
    font-family: 'oswald', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica-Neue', Helvetica, Arial, sans-serif;
    text-shadow: 0 0 5px black;
  }

  .card-img-top {
    transition: all .5s;
    border-radius: 3%;
    filter: brightness(60%);
  }

  .card-header-container:hover .card-img-top {
    filter: brightness(100%);
  }

   .card-header-container:hover .centered {
    text-shadow: 0 0 3px black;
  }

  .card {
    opacity: 0;
    position: relative;
    top: -50px;
    border: 10px solid white;
    border-radius: 5%;
    min-height: fit-content;
    height: 100%;
    box-shadow: 0 0 1px lightgrey;
    animation: fade-appear .75s cubic-bezier(0.985, 0.005, 0.265, 1) 1 normal forwards;
    z-index: 16;
  }

  @media(max-width: 768px) {
    .card {
      top: 0;
      margin: 1rem 0;
    }
  }

  .card2 {
    animation-delay: .05s;
  }

  .card3 {
    animation-delay: .1s;
  }


  @keyframes fade-appear {
    100% {
      opacity: 1;
    }
  }

  .card-header-container {
    position: relative;
    text-align: center;
    color: white;
    cursor: pointer;
  }

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'oswald', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica-Neue', Helvetica, Arial, sans-serif;
    text-transform: uppercase;
  }
  img {
    max-height: 500px;
  }
</style>