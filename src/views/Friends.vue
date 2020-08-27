<template>
  <div class="friends mt-3">
    <div class="row">
      <div class="col text-left">
        <label>Sort By: </label> 
        <select v-model="col" class="form-control">
          <option value="surname"> Surname </option>
          <option value="name"> Name </option>
          <option value="date_of_birth"> Date of birth </option>
          <option value="date_of_retirement"> Date of retierment </option>
        </select>
      </div>
      <div class="col text-left">
        <label>City</label>
        <select v-model="city" class="form-control">
          <option value="0">-- Select City --</option>
          <option value="1"> Rajkot </option>
          <option value="2"> Jamnagar </option>
          <option value="3"> Junagadh </option>
          <option value="4"> Morbi </option>
          <option value="5"> Gondal </option>
          <option value="6"> Porbandar </option>
          <option value="7"> Bhuj </option>
          <option value="8"> Gandhidham </option>
          <option value="9"> Anjar </option>
          <option value="10"> Adipur </option>
          <option value="11"> Mundra </option>
          <option value="12"> Amreli </option>
          <option value="13"> Bhavnagar </option>
          <option value="14"> Jetpur </option>
          <option value="15"> Dhoraji </option>
          <option value="16"> Upleta </option>
          <option value="17"> Kesod </option>
          <option value="18"> Veraval </option>
          <option value="19"> Kalavad </option>
          <option value="20"> Dhrol </option>
          <option value="21"> Jodiya </option>
          <option value="22"> Jamkhabhadiya </option>
          <option value="23"> Dwarka </option>
          <option value="24"> Mandvi (kutch) </option>
          <option value="25"> Surendranagar </option>
        </select>
      </div>
      <div class="col text-left"><label>Search</label> <input type="text" v-model="q" value="" class="form-control"></div>
      <div class="col text-right">
        <label>Pages</label>
        <select v-model="lim" class="form-control">
          <option value="">-- Pages --</option>
          <option value="10"> 10 Pages </option>
          <option value="25"> 25 Pages </option>
          <option value="100"> 100 Pages </option>
        </select>
      </div>
    </div>
    <br> 

    <Pagination v-model="pg" :total="ttlPages"></Pagination>

    <PersonBlock v-for="p in paginateFilteredList" :info="p" :key="p.id"></PersonBlock>

  </div>
</template>



<script>

import PersonBlock from '@/components/PersonBlock.vue'
import Pagination from '@/components/Pagination.vue'
import axios from 'axios'


export default {
  name: 'Friends',
  components: {
    Pagination,
    PersonBlock
  },
  data() { 
    return {
      persons: [],
      lim: 10,
      pg: 1,
      city: 0,
      col: 'name',
      q: ''
    }
  },
  computed: {
    filterList() {
      let compare = (a,b) => a[this.col] > b[this.col];
      let cityFilter = i => this.city == 0 || i.city_id == this.city;
      let searchFilter = i => this.q == '' || (this.q, i.name.toLowerCase().indexOf(this.q.toLowerCase()) != -1 || this.q, i.surname.toLowerCase().indexOf(this.q.toLowerCase()) != -1);
      return this.persons.filter(cityFilter).filter(searchFilter).sort(compare);
    },
    paginateFilteredList() {
      let start = (this.pg - 1) * this.lim;
      let end = start + this.lim;
      let len = this.filterList.length;
      end = end > len - 1 ? len - 1: end;
      return this.filterList.slice(start, end);
    },
    ttlPages() {
      let rem = this.filterList.length % this.lim;
      return Math.floor(this.filterList.length / this.lim) + (rem > 0? 1: 0);
    }
  },
  async created() {
    try {
      const res = await axios.get('https://raw.githubusercontent.com/AdiechaHK/maitrisangath-data/master/friends.json');
      console.log(res.status);
      if (res.status == 200) {
        this.persons = res.data.data;
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}

</script>

<style scoped>



</style>