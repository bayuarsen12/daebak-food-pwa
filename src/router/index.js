import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home";
import DetailMakanan from "../pages/DetailMakanan";
import SearchPage from "../pages/SearchPage";
import PromoPage from "../pages/PromoPage";
import PickupPage from "../pages/PickupPage";
import HistoryPage from "../pages/HistoryPage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/detail-makanan/:id",
      name: "Detail Makanan",
      component: DetailMakanan
    },
    {
      path: "/search-page",
      name: "Search Page",
      component: SearchPage
    },
    {
      path: "/promo-page",
      name: "Promo Page",
      component: PromoPage
    },
    {
      path: "/pickup-page",
      name: "pickup Page",
      component: PickupPage
    },
    {
      path: "/history-page",
      name: "history Page",
      component: HistoryPage
    }
  ]
});
