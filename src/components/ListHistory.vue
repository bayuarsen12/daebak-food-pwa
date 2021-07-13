<template>
  <div class="parent-card">
    <div class="img-section">
      <img
        src="https://asset.kompas.com/crops/y5_3sy9SHSmVG7YES4dcc3uHAWQ=/0x0:1000x667/750x500/data/photo/2018/09/19/706154921.jpg"
        alt="product"
      />
      <div class="parent-rating">
        <div>
          <img :src="Star" alt="star" />
          <p>4.6</p>
        </div>
      </div>
    </div>
    <div class="parent-product">
      <div class="title-product">
        <p>Jajangmyeon Skuy Gas Ngeng</p>
        <img :src="Thumb" alt="check" />
      </div>
      <div class="time-buying">
        <p>13 Jun 2021, 12.43 •</p>
        <span>Selesai</span>
      </div>
      <div class="product-description">
        <p>2 Jus Nanas, 2 Jus Semangka, 1 Jus Apel</p>
      </div>
    </div>
  </div>
</template>
<script>
import "../css/list-history.css";
import Star from "../assets/star.svg";
import Thumb from "../assets/thumb.svg";
export default {
  name: "ListHistory",
  data: function() {
    return {
      Star: Star,
      Thumb: Thumb
    };
  }
};
</script>
