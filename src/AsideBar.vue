<template>
    <transition name="show-aside-panel">
        <aside class="asside-bar" v-if="showAsidePanels">
            <button class="close" @click="hideAdditionalPanels"><i class="fa fa-window-close"></i></button>
            <transition appear name="show-left">
                <div class="content" v-bind:class="{ '-fifty': showFiftyAsidePanels}" v-show="showAsidePanels">
                    1
                    <va-chart :chart-config='chartConfig'></va-chart>
                </div>
            </transition>
            <transition appear name="show-right">
                <div class="content" v-bind:class="{ '-fifty': showFiftyAsidePanels }" v-show="showAsidePanels">
                    <va-chart :chart-config='chartConfig'></va-chart>
                            2
                    <button class="show" @click="showCenterPanel">show aditional left panel</button>
                </div>
            </transition>
            <transition name="show-additional-right">
                <div class="content" v-bind:class="{ '-fifty': showFiftyAsidePanels}" v-show="showAdditioanlLeftPanel">
                    <va-chart :chart-config='chartConfig'></va-chart>
                        3
                </div>
            </transition>
        </aside>
    </transition>
</template>

<script>
  import VAChart from './components/VAChart'
  export default {
    name: 'AsideBar',
    components: {
      'va-chart': VAChart
    },
    data () {
      return {
        showAdditioanlLeftPanel: false,
        showFiftyAsidePanels: false,
        chartConfig: {
          type: 'pie',
          data: {
            labels: ['HTML', 'JavaScript', 'CSS'],
            datasets: [{
              data: [56.6, 37.7, 4.1],
              backgroundColor: ['#00a65a', '#f39c12', '#00c0ef'],
              hoverBackgroundColor: ['#00a65a', '#f39c12', '#00c0ef']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: !this.isMobile,
            legend: {
              position: 'bottom',
              display: true
            }
          }
        }
      }
    },
    computed: {
      showAsidePanels () {
        return this.$store.getters.getShowAsidePanels
      }
    },
    methods: {
      showCenterPanel () {
        this.showAdditioanlLeftPanel = !this.showAdditioanlLeftPanel
        this.showFiftyAsidePanels = !this.showFiftyAsidePanels
      },
      hideAdditionalPanels () {
        this.showAdditioanlLeftPanel = false
        this.showFiftyAsidePanels = false
        return this.$store.commit('hideAdditionalPanels')
      },
      showAdditionalPanels () {
        this.showFiftyAsidePanels = true
        return this.$store.commit('showAdditionalPanels')
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
        min-width: 49%;
        max-width: 49%;
        overflow: hidden;
        transform: translateX(0);
        transition: transform .5s ease, min-width .5s ease;
        padding: 10px
    }

    .asside-bar > .content > .show {
        z-index: 10;
    }

    .asside-bar > .content.-fifty {
        min-width: 32%;
        max-width: 32%;
    }

    .asside-bar > .content.-left {
        transform: translateX(-135%);
    }

    .show-left-enter-active, .show-left-leave-active {
        transition: transform .5s ease, min-width .5s ease
    }

    .show-left-enter, .show-left-leave-to {
        transform: translateX(-135%);
    }

    .asside-bar > .content.show-additional-right-active, .asside-bar > .content.show-additional-right-leave-active {
        transition: padding .4s ease, min-width .5s ease, opacity .5s ease, transform .3s ease
    }

    .asside-bar > .content.show-additional-right-enter, .asside-bar > .content.show-additional-right-leave-to {
        min-width: 0;
        padding: 0;
        opacity: 0;
        transform: translateX(10%);
    }

    .show-right-enter-active, .show-right-leave-active {
        transition: transform .5s ease, min-width .5s ease
    }

    .show-right-enter, .show-right-leave-to {
        transform: translateX(135%);
    }

    .show-aside-panel-enter-active, .show-aside-panel-leave-active {
        transition: opacity .5s
    }

    .show-aside-panel-enter, .show-aside-panel-leave-to {
        opacity: 0
    }

    .asside-bar > .close {
        position: absolute;
        right: 10px;
        top: 5px;
        opacity: 1;
        font-size: 40px;
        color: #3c8dbc;
        transition: transform .3s ease;
        outline: 0;
        z-index: 10;
    }

    .asside-bar > .close:hover {
        transform: scale(1.1);
    }

</style>
