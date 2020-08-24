<template>
  <div class="home row">

    <!-- Title (Header) -->
    <div class="conteiner">
      <div class="row">
        <div class="col-md-12 text-center">
          <h1 class="main-title">
             મૈત્રીસંગાથ 
          </h1>
          <h1> નિવૃતોની મૈત્રીની નવી પરિભાષા <br>&nbsp;</h1>
        </div>
      </div>

      <div class="row img-holder">
         <div class="col text-center"><img src="images/kausalam.png" alt="kausalam balam"></div>
         <div class="col text-center"><img src="images/handshake.png" alt="maitri sangath" class="rounded"></div>
         <div class="col text-center"><img src="images/Emblem_of_India.png" alt="Emblem of India"></div>
      </div>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
/*
  components: {
    HelloWorld
  }
*/
}
</script>

<style>
    .m-b-md {
        margin-bottom: 30px;
    }

    .img-holder img {
        max-height: 300px;
        width: 100%;
    }

    .img-holder img.rounded {
        border-radius: 50% !important;
    }

    .section-block {
        margin-top: 20px;
    }

    .birthday-img {
        max-width: 100px;
        max-height: 100px;
        vertical-align: text-bottom;
    }
    .birthday-img.h-flip {
        -moz-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        filter: FlipH;
        -ms-filter: "FlipH";
    }

    .birthday-txt {
        display: inline-block;
        margin-right: 20px;
        margin-left: 20px;
    }

    .birthday-block {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .main-title {
        color:#0000a5;
        font-size: 60px;
        font-weight: 800;
    }

</style>
