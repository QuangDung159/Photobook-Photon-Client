import HomeComp from "./components/HomeComp.vue";
import GalleryComp from "./components/GalleryComp.vue";

const routes = [
    {
        path: "/",
        component: HomeComp
    },
    {
        path: "/gallery/:albumId",
        component: GalleryComp
    }
];

export default routes;