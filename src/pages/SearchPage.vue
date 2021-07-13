<template>
  <div style="display:flex;justify-content:center;">
    <div class="container">
      <div class="search-bar">
        <img :src="ArrowLeft" alt="arrow-left" @click="() => handlepush()" />
        <input
          type="text"
          placeholder="cari makanan favoritmu yuk.."
          class="search-food"
          @change="handleSearch"
          :value="search"
        />
        <img
          :src="Cross"
          alt="cross"
          style="opacity:0.5"
          @click="clearSearch"
        />
      </div>
      <div class="resto-results">
        <p>Resto dari pencarianmu</p>
      </div>
      <div class="filter-results">
        <div class="filter">
          <img :src="Filter" alt="filter" />
          <span>Filter</span>
        </div>
        <div class="urutkan">
          <img :src="Sort" alt="sort" />
          <span>Urutkan</span>
        </div>
        <div class="rating">
          <img :src="Star" alt="star" />
          <span>4.5 ke atas</span>
        </div>
      </div>
      <div class="restaurants">
        <RestoranCard
          v-for="(item, index) in restaurants"
          :key="index"
          :data="item"
          :myLat="myLat"
          :myLong="myLong"
        />
      </div>
      <div class="section-botnav">
        <BottomNavigation />
      </div>
    </div>
  </div>
</template>
<script>
import "../css/search-page.css";
import RestoranCard from "../components/RestoranCard";
import BottomNavigation from "../components/BottomNavigation";
import ArrowLeft from "../assets/arrow-left.svg";
import Cross from "../assets/cross.svg";
import axios from "axios";
import Sort from "../assets/sort.svg";
import Filter from "../assets/filter.svg";
import Star from "../assets/black-star.svg";

export default {
  name: "Search",
  components: {
    RestoranCard,
    BottomNavigation,
    Cross
  },
  data: function() {
    return {
      restaurants: [],
      ArrowLeft: ArrowLeft,
      Cross: Cross,
      Sort: Sort,
      Filter: Filter,
      Star: Star,
      search: ""
    };
  },
  created() {
    const successFunction = position => {
      this.myLat = position.coords.latitude;
      this.myLong = position.coords.longitude;
      console.log(position.coords.latitude + "/" + position.coords.longitude);
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        successFunction,
        console.log("error")
      );
    } else {
      alert(
        "It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it."
      );
    }
  },
  async mounted() {
    const getrestaurant = await axios.get(
      "https://daebak-backend.herokuapp.com/restaurant"
    );
    this.restaurants = getrestaurant.data;
  },
  methods: {
    handlepush() {
      this.$router.push("/");
    },
    handleSearch: function(event) {
      this.search = event.target.value;
    },
    clearSearch: function() {
      this.search = "";
    }
  }
};
</script>
