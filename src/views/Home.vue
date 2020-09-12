<template>
  <div class="home row">

    <!-- Title (Header) -->
    <div class="conteiner">
      <div class="row">
        <div class="col-md-12 text-center">
          <h1 class="main-title">
             {{ $t('site.name') }} 
          </h1>
          <h1> {{ $t('site.slogan') }} <br>&nbsp;</h1>
        </div>
      </div>

      <div class="row img-holder">
         <div class="col text-center"><img src="images/kausalam.png" alt="kausalam balam"></div>
         <div class="col text-center"><img src="images/handshake.png" alt="maitri sangath" class="rounded"></div>
         <div class="col text-center"><img src="images/Emblem_of_India.png" alt="Emblem of India"></div>
      </div>

      <div class="birthday-block" v-if="bdayWithinDays(1).length">
        <div class="row text-center">
          <img src="images/bouquet.png" class="birthday-img h-flip">
          <h3 class="birthday-txt">
              Happy Birthday Dear
              <!-- 
              @foreach($birthdays as $member)
                  @if($member->hasBirthdayTxt() == "Today")
                      <br>{{ $member->name . " " . $member->middle_name . " " . $member->surname }}
                  @endif
              @endforeach
               --> 

            <p v-for="x in bdayWithinDays(1)" :key="x.id">{{x}}</p>

          </h3>
          <img src="images/bouquet.png" class="birthday-img">
        </div>
      </div>


      <div class="row section-block">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ $t('sections.home.block.birthday_heading') }}</h5>
              <hr>
              <div class="card-text">
                <ul>
                  <li v-for="person in bdayWithinDays(7)" :key="person.id" class="text-left">
                    {{ $t('sections.home.block.birthday_statement', bdayData(person)) }}
                    <router-link class="link" :to="{name:'FriendDetails',params:{fid:person.id}}">
                    <!-- 
                      {{ person | fullname }}
                     -->
                     &#129149;
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
            <div class="card">
              <div class="card-body">
                  <h5 class="card-title">{{ $t('sections.home.block.news_heading') }}</h5>
                  <hr>
                  <div class="card-text">
                      {{ $t('sections.home.block.no_news') }}
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'Home',
  data() {
    return {
      list: []
    }
  },
  filters: {
    // age: p => (new Date).getFullYear() - (new Date(p.date_of_birth)).getFullYear(),
    // fullname: p => p.name,
    // bdayTxt: p => {
    //   return moment(p.date_of_birth).format('Do MMM')
    // },
  },
  async created() {
    try {
      const res = await axios.get('https://raw.githubusercontent.com/AdiechaHK/maitrisangath-data/master/friends.json');
      if (res.status == 200) {
        this.list = res.data.data;
      }
    } catch (e) {
      console.error(e.message);
    }
  },
  methods: {
    bdayData: function(p) {
      let db = moment(p.date_of_birth);
      let ndb = moment(p.date_of_birth);
      ndb.year(moment().year())

      const ucf = s => s.length > 0 ? (s.toUpperCase()[0] + s.toLowerCase().substr(1)): "";

      let fname = [ucf(p.surname), ucf(p.name), ucf(p.middle_name)[0] + "."].join(" ") ;
      return {
        name: fname,
        age: moment().year() - db.year(),
        date: db.date(),
        month: this.$i18n.t('general.months.' + db.month()),
        day: this.$i18n.t('general.days.' + ndb.day())
      };
    },
    bdayWithinDays(num) {

      const compareDt = (a, b) => {
        let as = a.getDate() + "_" + a.getMonth();
        let bs = b.getDate() + "_" + b.getMonth();
        return as === bs;
      }

      return this.list.filter(item => {
        const idt = new Date(item.date_of_birth);
        const reducer = (b, n) => {
          let dt = new Date;
          dt.setDate(dt.getDate() + n);
          return b || compareDt(dt, idt);
        } 
        return Array.from((new Array(num)).keys()).reduce(reducer, false);
      });
    }
  }
}

</script>

<style>

    .link, .link:hover {
      text-decoration: none;
    }

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
