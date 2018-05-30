<template>
  <div class="m-home">
    <h1>Home Page</h1>
    <ul>
      <li v-for="(item, index) in messages" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('message/getMessages')
  },
  computed: {
    messages () {
      return this.$store.getters['message/getMessages']
    }
  }
}
</script>

<style scoped>

</style>
