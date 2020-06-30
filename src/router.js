import HomeComp from "./components/HomeComp.vue";
import GalleryComp from "./components/GalleryComp.vue";
import AboutComp from "./components/AboutComp.vue";
import ContactComp from "./components/ContactComp.vue";

const routes = [
    {
        path: "/",
        component: HomeComp
    },
    {
        path: "/gallery/:albumId",
        component: GalleryComp
    },
    {
        path: '/about',
        component: AboutComp
    },
    {
        path: "/contact",
        component: ContactComp
    }
];

export default routes;