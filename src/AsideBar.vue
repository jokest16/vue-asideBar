<template>
    <aside class="asside-bar" v-show="showAsidePanels">
        <div class="content" v-bind:class="{ '-fifty': showFiftyAsidePanels,'-left': showAdditionalPanel }">1</div>
        <div v-bind:class="{ 'content': showCentredPanel,'-top': showFiftyAsidePanels }">1</div>
        <div class="content" v-bind:class="{ '-fifty': showFiftyAsidePanels,'-right': showAdditionalPanel }">3</div>
        <button @click="showPanel">qwe</button>
    </aside>
</template>

<script>

  export default {
    name: 'AsideBar',
    data () {
      return {
        showAsidePanels: true,
        showCentredPanel: false,
        showFiftyAsidePanels: true,
        showAdditionalPanel: false
      }
    },
    methods: {
      showPanel () {
        if (!this.showCentredPanel && this.showAdditionalPanel) {
          this.showCentredPanel = false
          this.showFiftyAsidePanels = true
        } else {
          this.showCentredPanel = true
          this.showFiftyAsidePanels = false
        }
      }
    }
  }

</script>

<style>
    .asside-bar {
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        z-index: 1100;
        background-color: rgba(0, 0, 0, .7);
        display: flex;
        justify-content: space-around;
        padding: 10px;
    }

    .asside-bar > .content {
        display: inline-block;
        background-color: #ecf0f5;
        min-width: 32%;
        overflow: hidden;
        transition: transform .3s ease, min-width .3s ease;
    }

    .asside-bar > .content.-fifty {
        min-width: 48%;
    }

    .asside-bar > .content.-left {
        transform: translateX(-110%);
    }

    .asside-bar > .content.-right {
        transform: translateX(110%);
    }

    .asside-bar > .content.-top {
        transform: translateY(110%);
    }

</style>
