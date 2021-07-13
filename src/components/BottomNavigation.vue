<template>
  <div class="parent-botnav">
    <div>
      <div
        v-for="(item, index) in ItemBotnav"
        :key="index"
        v-bind:class="{ NavActive: $router.history.current.path === item.path }"
        class="item-botnav"
        @click="() => changeNav(index, item.path)"
      >
        <div v-bind:is="item.name"></div>

        <p
          v-bind:style="{
            fontWeight:
              $router.history.current.path === item.path ? 'bold' : 'normal'
          }"
        >
          {{ item.name }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import "../css/bottom-navigation.css";
import Explore from "../assets/explore";
import Pickup from "../assets/pickup";
import Promo from "../assets/promo";
import Search from "../assets/search";
import History from "../assets/history";
export default {
  name: "BottomNavigation",
  components: { Explore, Pickup, Search, Promo, History },
  data: function() {
    return {
      indexed: 0,
      ItemBotnav: [
        {
          name: "Explore",
          path: "/"
        },
        {
          name: "Pickup",
          path: "/pickup-page"
        },
        {
          name: "Search",
          path: "/search-page"
        },
        {
          name: "Promo",
          path: "/promo-page"
        },
        {
          name: "History",
          path: "/history-page"
        }
      ]
    };
  },
  methods: {
    changeNav(index, path) {
      this.$router.push(path);
      this.indexed = index;
    }
  }
};
</script>
