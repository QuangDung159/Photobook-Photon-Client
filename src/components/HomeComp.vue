<template>
  <div class="container-fluid aos-init aos-animate" data-aos="fade" data-aos-delay="500">
    <div
      class="swiper-container images-carousel swiper-container-horizontal swiper-container-free-mode"
    >
      <div
        class="swiper-wrapper"
        style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
      >
        <!-- slider -->
        <div
          class="swiper-slide"
          style="transform: translate3d(0px, 0px, 0px); width: 456.667px; margin-right: 20px;"
          v-for="(album, key) in listAlbum"
          :key="key"
        >
          <div class="image-wrap">
            <div class="image-info">
              <h2 class="mb-3">{{album.album_name}}</h2>
              <router-link
                :to="'/gallery/' + album.album_id"
                class="btn btn-outline-white py-2 px-4"
              >More Photos</router-link>
            </div>
            <img :src="album.post_panel_image" alt="Image" />
          </div>
        </div>
        <!-- slider - end -->
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComp",
  data() {
    return {};
  },
  computed: {
    listAlbum() {
      return this.$store.state.listAlbum;
    }
  }
};
</script>

<style>
</style>