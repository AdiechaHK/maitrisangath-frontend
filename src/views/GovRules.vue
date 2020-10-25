<template>
  <div class="gov-rules">
    <div class="conteiner">
        <div class="row">
            <div class="col-md-12 text-left">
                <h1> {{ $t('sections.govrules.title') }} </h1>
            </div>
        </div>
        <div class="row">

            <div class="col-md-3">

                <div class="list-group" style="margin-top: 25px;">
                    <router-link
                        :to="'/gov-rules/'+igr.id"
                        v-for="igr in list"
                        :key="igr.id"
                        :class="['list-group-item ', {'active': igr.id === current}]"
                        @click="current = igr.id"
                        >
                        {{ igr.title }}
                    </router-link>
                </div>


            </div>
            <div class="col-md-9 text-left">

                <h1> {{ thisrule.title }} </h1>
                <!-- <h4> {{ $gr->description }} </h4> -->
                <h4> {{ thisrule.description || $t('sections.govrules.no_description')}} </h4>
                <!-- 
                @if($gr->photo != null && $gr->photo != "")
                    <img src="{{ url('storage/'. $gr->photo)}}" class="width-100">
                @endif
                 -->
                <img v-if="false" src="#" class="width-100">
                <!-- 
                @if (isset($gr->pdf) && trim($gr->pdf) != "")
                    <div class="row-fluid">
                        <a href="{{ url('storage/'. $gr->pdf ) }}">Show pdf</a>
                    </div>
                @endif
                @if (isset($gr->link) && trim($gr->link) != "")
                    <div class="row-fluid">
                        <a href="{{ $gr->link }}">{{__('basic.more-details')}}</a>
                    </div>
                @endif
                 -->
                <hr v-if="thisrule.pdf">
                <div class="row-fluid" v-if="thisrule.pdf">
                    <a
                        :href="'https://github.com/AdiechaHK/maitrisangath-data/blob/master/assets/' + thisrule.pdf">
                        {{ $t('sections.govrules.show_pdf') }}
                    </a>
                    <br>
                    <a
                        class="btn btn-primary"
                        :href="'https://github.com/AdiechaHK/maitrisangath-data/raw/master/assets/' + thisrule.pdf">
                        {{ $t('sections.govrules.download') }}
                    </a>
                </div>
                <hr v-if="thisrule.link">
                <div class="row-fluid" v-if="thisrule.link">
                    <a :href="thisrule.link">
                        {{ $t('sections.govrules.link_caption') }}
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style type="text/css">
    .list-group-item {
        cursor: pointer;
    }
</style>

<script>

import axios from 'axios'

export default {
  name: 'GovRules',
  data() { 
    return {
      list: [],
      current: null
    }
  },
  computed: {
    thisrule() {
        return this.list.reduce((f, r) => r.id === this.current ? r : f, {});
    }
  },
  watch: {
    $route(newRoute){
        this.current = newRoute.params.rid ?? (this.length.length > 0 ? this.list[0].id : null);
    }
  },
  async created() {
    try {
      const res = await axios.get('https://raw.githubusercontent.com/AdiechaHK/maitrisangath-data/master/gov_rules.json');
      if (res.status == 200) {
        this.list = res.data.data;
      }
      if (this.list.length > 0 && this.current == null) {
        this.current = this.$route.params.rid ?? this.list[0].id;
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}

</script>