<template>
  <div class="activity-detail">
    Activity details
  </div>
</template>


<script>

import axios from 'axios'

export default {
  name: 'Activity',
  data() { 
    return {
      list: []
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
