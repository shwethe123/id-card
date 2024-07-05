<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <idCard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import idCard from '@/components/idCard.vue'

export default {
  name: 'HomeView',
  components: {
    idCard
  }
}
</script>
