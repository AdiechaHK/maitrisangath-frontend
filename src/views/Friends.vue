<template>
  <div class="friends mt-3">
    <div class="row">
      <div class="col text-left">
        <label>{{$t('sections.friends.filters.sort.caption')}}</label> 
        <select v-model="col" class="form-control">
          <option value="surname"> {{ $t('sections.friends.filters.sort.options.surname') }} </option>
          <option value="name"> {{ $t('sections.friends.filters.sort.options.name') }} </option>
          <option value="date_of_birth"> {{ $t('sections.friends.filters.sort.options.date_of_birth') }} </option>
          <option value="date_of_retirement"> {{ $t('sections.friends.filters.sort.options.date_of_retirement') }} </option>
        </select>


      </div>
      <div class="col text-left">
        <label>{{$t('sections.friends.filters.city.caption')}}</label>
        <select v-model="city" class="form-control">
          <option value="0"> {{ $t('sections.friends.filters.city.options.nil') }} </option>
          <option value="1"> {{ $t('sections.friends.filters.city.options.rjt') }} </option>
          <option value="2"> {{ $t('sections.friends.filters.city.options.jam') }} </option>
          <option value="3"> {{ $t('sections.friends.filters.city.options.jun') }} </option>
          <option value="4"> {{ $t('sections.friends.filters.city.options.mrb') }} </option>
          <option value="5"> {{ $t('sections.friends.filters.city.options.gnd') }} </option>
          <option value="6"> {{ $t('sections.friends.filters.city.options.prb') }} </option>
          <option value="7"> {{ $t('sections.friends.filters.city.options.bhj') }} </option>
          <option value="8"> {{ $t('sections.friends.filters.city.options.gdm') }} </option>
          <option value="9"> {{ $t('sections.friends.filters.city.options.anj') }} </option>
          <option value="10"> {{ $t('sections.friends.filters.city.options.adp') }} </option>
          <option value="11"> {{ $t('sections.friends.filters.city.options.mdr') }} </option>
          <option value="12"> {{ $t('sections.friends.filters.city.options.amr') }} </option>
          <option value="13"> {{ $t('sections.friends.filters.city.options.bvn') }} </option>
          <option value="14"> {{ $t('sections.friends.filters.city.options.jtp') }} </option>
          <option value="15"> {{ $t('sections.friends.filters.city.options.drj') }} </option>
          <option value="16"> {{ $t('sections.friends.filters.city.options.upl') }} </option>
          <option value="17"> {{ $t('sections.friends.filters.city.options.ksd') }} </option>
          <option value="18"> {{ $t('sections.friends.filters.city.options.vrv') }} </option>
          <option value="19"> {{ $t('sections.friends.filters.city.options.klv') }} </option>
          <option value="20"> {{ $t('sections.friends.filters.city.options.drl') }} </option>
          <option value="21"> {{ $t('sections.friends.filters.city.options.jdy') }} </option>
          <option value="22"> {{ $t('sections.friends.filters.city.options.kby') }} </option>
          <option value="23"> {{ $t('sections.friends.filters.city.options.dwk') }} </option>
          <option value="24"> {{ $t('sections.friends.filters.city.options.mdv') }} </option>
          <option value="25"> {{ $t('sections.friends.filters.city.options.sng') }} </option>
        </select>
      </div>
      <div class="col text-left"><label>{{$t('sections.friends.filters.search.caption')}}</label> <input type="text" v-model="q" value="" class="form-control"></div>
      <div class="col text-right">
        <label>{{$t('pagination.pages')}}</label>
        <select v-model="lim" class="form-control">
          <option value="">-- {{ $t('pagination.pages') }} --</option>
          <option value="5"> 5 </option>
          <option value="10"> 10 </option>
          <option value="25"> 25 </option>
          <option value="100"> 100 </option>
        </select>
        </div>
    </div>
    <br> 

    <Pagination v-model="pg" :total="ttlPages"></Pagination>

    <PersonBlock v-for="p in paginateFilteredList" :info="p" :key="p.id"></PersonBlock>

    <Pagination v-model="pg" :total="ttlPages"></Pagination>

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
      list: [],
      lim: 10,
      pg: 1,
      city: 0,
      col: 'name',
      q: ''
    }
  },
  watch: {
    col: function(nCol) {
      this.persons = this.persons.sort((a,b) => a[nCol] > b[nCol] ? 1: -1);
    }
  },
  computed: {
    filterList() {
      let cityFilter = i => this.city == 0 || i.city_id == this.city;
      let searchFilter = i => {
        
        /* Cheeck if query is empty then we allow all records */
        if (this.q == '') return true;
        
        /* Check if query word found in name then we allow that record */
        if (i.name.toLowerCase().indexOf(this.q.toLowerCase()) != -1) return true;
         
        /* Check if query word found in surname then we allow that record */
        if (i.surname.toLowerCase().indexOf(this.q.toLowerCase()) != -1) return true;

        return false;
      }
      return this.persons.filter(cityFilter).filter(searchFilter);
    },
    paginateFilteredList() {
      let start = Number((Number(this.pg) - 1) * Number(this.lim));
      let end = start + Number(this.lim);
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
      if (res.status == 200) {
        this.persons = res.data.data.sort((a,b) => a[this.col] > b[this.col] ? 1: -1);
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}

</script>

<style scoped>



</style>