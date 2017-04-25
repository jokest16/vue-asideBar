<template>
  <div id="app" class="app">
    <div class="wrapper">
      <NaviBar></NaviBar>
      <AsideBar>svsd</AsideBar>
      <Slider></Slider>
      <ContentWrap></ContentWrap>
      <Modal></Modal>
    </div>
  </div>
</template>

<script>
import NaviBar from 'NaviBar.vue'
import Slider from 'Slider.vue'
import ContentWrap from 'ContentWrap.vue'
import Modal from './components/Modal.vue'
import store from './vuex/store.js'
import AsideBar from 'AsideBar.vue'

export default {
  name: 'app',
  created () {
  },
  components: {
    AsideBar,
    NaviBar,
    Slider,
    ContentWrap,
    Modal
  },
  store
}
</script>

<style>

  .app > .wrapper {
    overflow-y: hidden;
  }

</style>
