<template>
  <div>
    <div style="display:flex;justify-content:center;">
      <div v-if="loading">
        <HomeSkeleton />
      </div>
      <div v-else class="container">
        <Sliders />
        <Categories />
        <div class="parent-product">
          <div class="head-product">
            <div class="tittle-section">
              <p>
                <b>Cobain yang lagi ngetrend</b>
              </p>
              <span>Kirimin buat silaturahmi boleh juga.</span>
            </div>
            <button class="button-semua">Lihat semua</button>
          </div>
          <div class="wrapper-product">
            <ProductCard
              v-for="(item, index) in products"
              :key="index"
              :data="item"
            />
            <div class="space-product"></div>
          </div>
        </div>
        <div class="parent-restoran">
          <div class="head-restoran">
            <p>Rekomendasi restoran Korea</p>
            <span>Nih resto yang paling daebak</span>
          </div>
          <div id="list-restoran">
            <RestoranCard
              v-for="(item, index) in restaurants"
              :key="index"
              :data="item"
              :myLat="myLat"
              :myLong="myLong"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="section-botnav">
      <BottomNavigation />
    </div>
  </div>
</template>

<script>
import "../css/home.css";
import Categories from "../components/Categories";
import Sliders from "../components/Sliders";
import ProductCard from "../components/ProductCard";
import RestoranCard from "../components/RestoranCard";
import BottomNavigation from "../components/BottomNavigation";
import axios from "axios";
import HomeSkeleton from "../components/HomeSkeleton";

export default {
  name: "Home",
  components: {
    Sliders,
    Categories,
    ProductCard,
    RestoranCard,
    BottomNavigation,
    HomeSkeleton
  },
  data: function() {
    return {
      products: [],
      restaurants: [],
      loading: true,
      myLat: null,
      myLong: null
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
    const getproduct = await axios.get(
      "https://daebak-backend.herokuapp.com/product"
    );
    const getrestaurant = await axios.get(
      "https://daebak-backend.herokuapp.com/restaurant"
    );

    this.products = getproduct.data;
    this.restaurants = getrestaurant.data;
    this.loading = false;
  }
};
</script>
