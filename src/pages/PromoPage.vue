<template>
  <div style="display:flex;justify-content:center;">
    <div class="container">
      <div class="title-page">
        <p>Promo</p>
      </div>
      <div class="parent-product">
        <div class="head-product">
          <div class="tittle-section">
            <p>
              <b>Promo spesial hari ini</b>
            </p>
            <span>Cuma hari ini, diskon s.d. 10rb.</span>
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
      <div class="parent-product">
        <div class="head-product">
          <div class="tittle-section">
            <p>
              <b>Mari dukung resto lokal</b>
            </p>
            <span>Dapetin promo s.d. 10rb.</span>
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
      <div class="parent-product">
        <div class="head-product">
          <div class="tittle-section">
            <p>
              <b>Pesan lagi dengan promo</b>
            </p>
            <span>Rasa yang pernah ada, tapi diskon</span>
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
      <div class="section-botnav">
        <BottomNavigation />
      </div>
    </div>
  </div>
</template>
<script>
import "../css/promo-page.css";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import BottomNavigation from "../components/BottomNavigation";

export default {
  name: "Promo",
  components: {
    ProductCard,
    BottomNavigation
  },
  data: function() {
    return {
      products: []
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
    this.products = getproduct.data;
  }
};
</script>
