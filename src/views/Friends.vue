<template>
  <div class="friends mt-3">
    <div class="row">
      <div class="col text-left">
        <label>Sort By: </label> 
        <select name="sort_by" class="form-control">
          <option value="" selected="selected"> -- Select -- </option>
          <option value="surname"> Surname </option>
          <option value="name"> Name </option>
          <option value="date_of_birth"> Date of birth </option>
          <option value="date_of_retirement"> Date of retierment </option>
        </select>
      </div>
      <div class="col text-left">
        <label>City</label> 
        <select name="city" class="form-control">
          <option value="">-- Select City --</option>
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
      <div class="col text-left"><label>Search</label> <input type="text" name="q" value="" class="form-control"></div>
      <div class="col text-right">
        <button type="submit" class="btn btn-info" style="margin-top: 27px;"> Go !</button>
      </div>
    </div>
    <br> 

   <PersonBlock v-for="p in persons" :info="p" :key="p.id"></PersonBlock>
  </div>
</template>



<script>

// https://raw.githubusercontent.com/AdiechaHK/maitrisangath-data/master/friends.json
import PersonBlock from '@/components/PersonBlock.vue'
import axios from 'axios'


export default {
  name: 'Home',
  components: {
    PersonBlock
  },
  data() { 
    return {
      persons: [],
      some: ''
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