<template>
  <div class="gallary">

    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div :class="['carousel-item', {'active': indx === 0}]" v-for="(photo, indx) in photos" :key="indx">
          <img class="d-block w-100" :src="photo|original" :alt="photo.caption">
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ photo.caption }}</h5>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>



  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    photos: Array
  },
  data() {
    return {
    }
  },
  filters: {
    'original': p => (p.photo == null ? "https://i0.wp.com/www.ginorthwest.org/wp-content/uploads/2016/03/activities-2.png": "https://raw.githubusercontent.com/AdiechaHK/maitrisangath-data/master/assets/" + p.photo)
  }
}
</script>

<style type="text/css">
  .card {
    float: left;
    margin: 5px;
    max-width: 100%;
  }
</style>
