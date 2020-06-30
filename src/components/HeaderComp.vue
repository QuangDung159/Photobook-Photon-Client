<template>
  <header class="site-navbar py-3" role="banner">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-6 col-xl-2" data-aos="fade-down">
          <h1 class="mb-0">
            <router-link :to="'/'" class="text-black h2 mb-0">Photon</router-link>
          </h1>
        </div>
        <div class="col-10 col-md-8 d-none d-xl-block" data-aos="fade-down">
          <nav
            class="site-navigation position-relative text-right text-lg-center"
            role="navigation"
          >
            <ul class="site-menu js-clone-nav mx-auto d-none d-lg-block">
              <li :class="{active: $route.path == '/'}">
                <router-link :to="'/'">Home</router-link>
              </li>
              <li class="has-children" :class="{active: $route.path.includes('/gallery/')}">
                <a>Gallery</a>
                <ul class="dropdown">
                  <li v-for="(album, key) in listAlbum" :key="key">
                    <router-link :to="'/gallery/' + album.album_id">{{album.album_name}}</router-link>
                  </li>
                </ul>
              </li>
              <li :class="{active: $route.path == '/about'}">
                <router-link :to="'/about'">About</router-link>
              </li>
              <li :class="{active: $route.path == '/contact'}">
                <router-link :to="'/contact'">Contact</router-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-6 col-xl-2 text-right" data-aos="fade-down">
          <div class="d-none d-xl-inline-block">
            <ul
              class="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0"
              data-class="social"
            >
              <li>
                <a href="#" class="pl-0 pr-3">
                  <span class="icon-facebook"></span>
                </a>
              </li>
              <li>
                <a href="#" class="pl-3 pr-3">
                  <span class="icon-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#" class="pl-3 pr-3">
                  <span class="icon-instagram"></span>
                </a>
              </li>
              <li>
                <a href="#" class="pl-3 pr-3">
                  <span class="icon-youtube-play"></span>
                </a>
              </li>
            </ul>
          </div>
          <div
            class="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
            style="position: relative; top: 3px;"
          >
            <a href="#" class="site-menu-toggle js-menu-toggle text-black">
              <span class="icon-menu h3"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
  computed: {
    listAlbum() {
      return this.$store.state.listAlbum;
    }
  }
};
</script>

<style>
</style>