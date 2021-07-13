<template>
  <div class="card-restoran">
    <div class="img-section">
      <img :src="data.imageUrl" alt="restoran" />
      <div class="box-rating">
        <div>
          <img :src="Star" alt="star" />
          <p>{{ data.rating }}</p>
        </div>
      </div>
    </div>
    <div class="content-section">
      <div class="tittle-restoran">
        <p>{{ data.name }}</p>
        <img :src="Thumb" alt="check" />
      </div>
      <div class="category-restoran">
        <p>{{ data.description }}</p>
      </div>
      <div class="separator-restoran" />
      <div class="jarak-restoran">
        <p>
          {{
            this.calcCrow(data.latitude, data.longitude, myLat, myLong).toFixed(
              1
            )
          }}
          km · diantar dalam 1 jam
        </p>
      </div>
      <div v-if="data.isPromo" class="promo-restoran">
        <img :src="Promo" alt="promo" />
        <p>Promo</p>
      </div>
    </div>
  </div>
</template>
<script>
import "../css/restoran-card.css";
import Promo from "../assets/promo.svg";
import Thumb from "../assets/thumb.svg";
import Star from "../assets/star.svg";

export default {
  name: "RestoranCard",
  data: function() {
    return {
      Promo: Promo,
      Thumb: Thumb,
      Star: Star,
      myDistance: null
    };
  },
  props: {
    data: Object,
    myLong: Number,
    myLat: Number
  },

  methods: {
    calcCrow(lat1, lon1, lat2, lon2) {
      var R = 6371; // km
      var dLat = this.toRad(lat2 - lat1);
      var dLon = this.toRad(lon2 - lon1);
      var lat1 = this.toRad(lat1);
      var lat2 = this.toRad(lat2);

      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
          Math.sin(dLon / 2) *
          Math.cos(lat1) *
          Math.cos(lat2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;
      return d;
    },

    // Converts numeric degrees to radians
    toRad(Value) {
      return (Value * Math.PI) / 180;
    }
  }
};
</script>
