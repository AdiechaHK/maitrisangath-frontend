<template>
  <div class="gallary">
    <ul>
        <li v-for="(photo, indx) in photos" :key="indx">
            {{ photo }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    photos: Array
  }
}
</script>

