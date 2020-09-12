<template>
  <div class="pagination">
    <nav aria-label="Page navigation example" v-if="total > 0 && value > 0">
      <ul class="pagination">
        <li :class="['page-item', {'disabled': value == 1}]" :title="$t('pagination.first')" @click="first()">
          <a class="page-link" href="#" :aria-label="$t('pagination.first')">
            <span>&#x23EE;</span>
          </a>
        </li>
        <li :class="['page-item', {'disabled': value == 1}]" :title="$t('pagination.prev')" @click="previous()">
          <a class="page-link" href="#" :aria-label="$t('pagination.prev')">
            <span>&#x23F4;</span>
          </a>
        </li>
        <!-- Most Prev -->
        <li class="page-item" v-if="value > 2 && value == total">
          <a class="page-link" href="#" @click="goto(value - 2)">{{ Number(value) - 2 }}</a>
        </li>

        <!-- Prev -->
        <li class="page-item" v-if="value > 1">
          <a class="page-link" href="#" @click="goto(value - 1)">{{ Number(value) - 1 }}</a>
        </li>

        <!-- Current -->
        <li class="page-item">
          <a class="page-link" href="#" @click="gotoPg()">{{value}}</a>
        </li>

        <!-- Next -->
        <li class="page-item" v-if="value < total">
          <a class="page-link" href="#" @click="goto(value + 1)">{{ Number(value) + 1 }}</a>
        </li>

        <!-- Most Next -->
        <li class="page-item" v-if="value < total - 2 && value == 1">
          <a class="page-link" href="#" @click="goto(value + 2)">{{ Number(value) + 2 }}</a>
        </li>

        <li :class="['page-item', {'disabled': value == total}]" :title="$t('pagination.next')" @click="next()">
          <a class="page-link" href="#" :aria-label="$t('pagination.next')">
            <span>&#x23F5;</span>
          </a>
        </li>
        <li :class="['page-item', {'disabled': value == total}]" :title="$t('pagination.last')" @click="last()">
          <a class="page-link" href="#" :aria-label="$t('pagination.last')">
            <span>&#x23ED;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    'value': Number,
    'total': Number
  },
  watch: {
    total(newVal) {
      if (newVal > 0 && this.value > newVal) {
        this.$emit('input', newVal)
      }
    }
  },
  methods: {
    first() {
      if (this.value != 1) {
        this.$emit('input', 1);
      }
    },
    previous() {
      if (this.value != 1) {
        this.$emit('input', this.value - 1);
      }
    },
    next() {
      if (this.value != this.total) {
        this.$emit('input', this.value + 1);
      }
    },
    last() {
      if (this.value != this.total) {
        this.$emit('input', this.total);
      }
    },
    goto(n) {
      if (this.value != n && n <= this.total && n >= 1) {
        this.$emit('input', n);
      }
    },
    gotoPg() {
      let newPg = prompt(this.$t('pagination.gotopg.notice'))
      if (newPg > 0 && newPg <= this.total) {
        this.$emit('input', newPg);
      } else {
        alert(this.$t('pagination.gotopg.error'));
      }
    }
  }
}
</script>

