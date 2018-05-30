<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
export default {
  components: {
    Navbar,
    Footer
  },
  name: 'App'
}
</script>

<style>

</style>
