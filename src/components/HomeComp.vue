<template>
  <div class="container-fluid" data-aos="fade" data-aos-delay="500">
    <div class="swiper-container images-carousel">
      <div class="swiper-wrapper">
        <!-- slider -->
        <div class="swiper-slide" v-for="(album, key) in listAlbum" :key="key">
          <div class="image-wrap">
            <div class="image-info">
              <h2 class="mb-3">{{album.album_name}}</h2>
              <a href="single.html" class="btn btn-outline-white py-2 px-4">More Photos</a>
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
import axios from "axios";

export default {
  name: "HomeComp",
  data() {
    return {
      listAlbum: []
    };
  },
  mounted() {
    this.getAllAlbumFromApi();
  },
  methods: {
    getAllAlbumFromApi() {
      axios
        .get(this.appConfig.API_URL + "/album/get-all")
        .then(res => {
          let data = res.data;
          if (data.statusCode === 200) {
            this.listAlbum = data.listAlbum;
          } else {
            console.log(data.message);
          }
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  },
  props: {
    appConfig: {
      type: Object,
      default: () => {
        return {
          API_URL: "https://dunglu-back-photomedia.herokuapp.com/api/client"
        };
      }
    }
  }
};
</script>

<style>
</style>