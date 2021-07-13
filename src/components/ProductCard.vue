<template>
  <div @click="() => handlepush(data._id)" class="parent-card">
    <img :src="data.imageUrl" alt="produk" />
    <div class="detail-section">
      <p class="jarak-product">1.2 km · 19 min</p>
      <p class="tittle-product">{{ data.name }}</p>
      <div class="parent-rating">
        <img :src="Star" alt="star" />
        <p>4.6 · 2rb+ rating</p>
      </div>
    </div>
  </div>
</template>
<script>
import "../css/product-card.css";
import Star from "../assets/star.svg";
export default {
  name: "ProductCard",
  data: function() {
    return {
      Star: Star
    };
  },
  methods: {
    handlepush(id) {
      this.$router.push("/detail-makanan/" + id);
    }
  },
  props: { data: Object }
};
</script>
