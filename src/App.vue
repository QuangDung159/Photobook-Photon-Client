<template>
  <div class="site-wrap">
    <div class="site-mobile-menu">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>
    <HeaderComp></HeaderComp>
    <router-view :appConfig="appConfig"></router-view>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";
import config from "../config";

export default {
  name: "App",
  data() {
    return {
      appConfig: config
    };
  },
  components: {
    HeaderComp,
    FooterComp
  },
  mounted() {
    this.$store.dispatch("getListAlbum");
  }
};
</script>

<style>
</style>
