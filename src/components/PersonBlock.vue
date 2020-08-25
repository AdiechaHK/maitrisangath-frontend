<template>
  <div class="hello row">
    <div class="col-md-12">
      <div class="main-holder">
        <div class="image-continer"><img src="https://www.brightlinkinternational.com//assets/images/team/profile-1.png" class="member-photo"></div>
        <div class="content">
          <h4>
            <a href="#">
              {{ info | dp }}
            </a>
            - Mob.: {{ info.mobile }}
          </h4>
          <p>
            Date of Birth: {{ info.date_of_birth | dateFormat }}
          </p>
          <Address :address="info.address | lines"></Address>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Address from '@/components/Address.vue'

export default {
  name: 'PersonBlock',
  props: [ 'info' ],
  components: {
    Address
  },
  filters: {
    lines(s) {
      return s.split("\n");
    },
    dateFormat(d) {
      let dt = new Date(d);
      return dt.toDateString();
    },
    dp(i) {
      const cap = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
      }
      return [
        cap(i.surname),
        cap(i.name) + ".",
        i.middle_name.charAt(0).toUpperCase() + "."
      ].join(" ");
    }
  },
  mounted() {
    console.log("info", this.info);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.member-photo {
  max-width: 200px;
  max-height: 200px;
  border-radius: 8px;
}

.content {
  width: calc(100% - 200px);
  padding: 0 10px;
  text-align: justify;
}

.main-holder {
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  transition: all .25s;
}

.image-continer {
  width: 200px;
  position: relative;
  transition: all .25s;
}

.main-holder:hover {
  transform: scale(1.02);
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, .15);
  background-color: white;
  /*margin: -10px 10px 10px -10px;*/
}

.image-continer:hover .remove-photo {
  display: inline-block;
}

.remove-photo:hover {
  text-decoration: none;
  color: white;
}

.remove-photo {
  display: none;
  /* float: right; */
  position: absolute;
  background-color: rgba(255, 0, 0, 0.8);
  padding: 0px 10px;
  font-size: 20px;
  color: white;
  text-decoration: none;
  font-weight: 800;
  border-radius: 8px 0px 8px 0px;
  /* left: 22px; */
  /* top: 140px; */
  /* bottom: 0px; */
  /* width: 100%; */
  text-align: center;
  transition: all .25s;
} 
</style>
