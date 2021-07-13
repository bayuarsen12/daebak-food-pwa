<template>
  <div style="display:flex;justify-content:center;">
    <div v-if="loading">
      <p>LOADING</p>
    </div>
    <div v-else class="container">
      <div
        v-bind:style="{
          background: `url(${products.imageUrl}) center no-repeat`
        }"
        class="image-food"
      />
      <div class="row">
        <p>{{ products.name }}</p>
        <p>16.000</p>
      </div>
      <div class="food-description">
        <p>Sudah termasuk kerupuk</p>
      </div>
      <div class="food-variation">
        <h1>Variation</h1>
        <div class="parent-select">
          <div>
            <input type="checkbox" />
            <span>Tidak Pedas</span>
          </div>
        </div>
      </div>
      <div class="food-notes">
        <h1>Instruksi khusus</h1>
        <textarea
          name=""
          placeholder="contoh. jangan pedas ya"
          id=""
          cols="30"
          rows="2"
        ></textarea>
        <div class="wraper-buttons">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
      </div>
      <div class="parent-bottom">
        <div class="bottom-food">
          <p>segera order makananmu</p>
          <button>Tambah ke pesanan-16.000</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../css/detail-makanan.css";
import axios from "axios";

export default {
  name: "DetailMakanan",
  data: function() {
    return {
      products: [],
      loading: true
    };
  },
  mounted() {
    axios
      .get(
        "https://daebak-backend.herokuapp.com/product/" + this.$route.params.id
      )
      .then(response => {
        this.products = response.data;
        this.loading = false;
      });
  }
};
</script>
