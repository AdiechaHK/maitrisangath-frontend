<template>
  <div class="hello">
      <div v-for="l in address" :key="l">
        {{l}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'Address',
  props: {
    address: Array
  }
}
</script>

