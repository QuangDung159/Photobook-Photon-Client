<template>
  <div class="site-section" data-aos="fade">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <div class="row mb-5">
            <div class="col-12">
              <h2 class="site-section-heading text-center">{{album.album_name}}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="lightgallery">
        <div
          v-for="(photo, key) in listPhoto"
          :key="key"
          class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
          data-aos="fade"
          :data-src="photo.photo_url"
          :data-sub-html="photo.photo_desc"
        >
          <a href="/">
            <img :src="photo.photo_url" alt="IMage" class="img-fluid cropped1" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";

export default {
  name: "GalleryComp",
  data() {
    return {
      listPhoto: [],
      album: {},
      albumId: this.$route.params.albumId
    };
  },
  mounted() {
    this.getPhotoFromApi(this.albumId);
  },
  methods: {
    getPhotoFromApi(albumId) {
      axios
        .get(this.appConfig.API_URL + "/photo/by-album-id/" + albumId)
        .then(res => {
          let data = res.data;
          if (data.statusCode === 200) {
            this.listPhoto = data.listPhoto;
            this.album = data.album;
          } else {
            console.log(data.message);
          }
        })
        .catch(err => {
          console.log(err);
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
  },
  watch: {
    $route(to) {
      //this.$emit("onChangeShowLoading", true);
      let albumId = to.params.albumId;
      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: 0
          },
          "slow",
          "swing"
        );
      this.getPhotoFromApi(albumId);
    }
  }
};
</script>

<style scoped>
.cropped1 {
  /*width: 477.33px;*/
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>