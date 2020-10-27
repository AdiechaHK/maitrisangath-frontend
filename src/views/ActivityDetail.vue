<template>
  <div class="activity-detail continer">
    <section class="heading row">
      <div class="col-3">
        <img :src="album|coverImage" class="cover-photo">
      </div>
      <div class="col-9 cnt">
        <h1>{{ album.name }}</h1>
        <h4>{{ album.description }}</h4>
      </div>
    </section>
    <section class="body row">

      <gallary :photos="album.photos"></gallary>

    </section>
  </div>
</template>


<script>

import Gallary from '@/components/Gallary.vue'

import axios from 'axios'

export default {
  name: 'Activity',
  components: { Gallary },
  data() { 
    return {
      list: [],
      album: null
    }
  },
  filters: {
    'coverImage': a => (a.cover == null ? "https://i0.wp.com/www.ginorthwest.org/wp-content/uploads/2016/03/activities-2.png": "https://raw.githubusercontent.com/AdiechaHK/maitrisangath-data/master/assets/mid/" + a.cover)
  },
  async created() {
    try {
      const res = await axios.get('https://raw.githubusercontent.com/AdiechaHK/maitrisangath-data/master/albums.json');
      if (res.status == 200) {
        this.list = res.data.data;
        this.album = res.data.data.reduce((s,a) => a.id == this.$route.params.id ? a: s, null);
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}

</script>

<style scoped>

    .cover-photo {
        max-width: 100%;
        max-height: 100%;
    }

    .row {
        /*background: #ccc;*/
        padding-bottom: 10px; 
        padding-top: 10px; 
        border-bottom: 1px dashed black;
    }

    .cnt {
        text-align: left;
    }

</style>
