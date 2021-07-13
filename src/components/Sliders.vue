<template>
  <div class="parentSlider">
    <div class="sliders">
      <div
        v-bind:style="{
          marginLeft: indexed * -100 + '%',
          transition: 'all 0.5s ease-in-out',
          flex: '0 0 auto'
        }"
      />
      <div v-for="(item, index) in images" :key="index" class="itemSlider">
        <img :src="item.url" alt="" />
      </div>
    </div>
    <div class="dots-indicator">
      <div
        v-for="(item, index) in images"
        :key="index"
        v-bind:class="{ dotsActive: indexed === index }"
        @click="() => setIndex(index)"
        class="dots"
      ></div>
    </div>
  </div>
</template>

<script>
import "../css/slider.css";
export default {
  name: "Sliders",
  data() {
    return {
      indexed: 0,
      images: [
        {
          name: "gambar1",
          url:
            "https://cdn.idntimes.com/content-images/community/2018/02/korean-dishes-1c15382988a0ce40858a30de4b53c2f3_600x400.jpg"
        },
        {
          name: "gambar2",
          url:
            "https://www.remotelands.com/travelogues/app/uploads/2020/02/Great-Kimchi-Debate-1.jpg"
        },
        {
          name: "gambar3",
          url:
            "https://www.remotelands.com/travelogues/app/uploads/2020/02/Great-Kimchi-Debate-1.jpg"
        },
        {
          name: "gambar4",
          url:
            "https://www.remotelands.com/travelogues/app/uploads/2020/02/Great-Kimchi-Debate-1.jpg"
        }
      ]
    };
  },
  mounted: function() {
    this.automatic();
  },
  methods: {
    automatic: function() {
      setInterval(() => {
        if (this.indexed < this.images.length - 1) {
          this.indexed = this.indexed + 1;
        } else {
          this.indexed = 0;
        }
      }, 3000);
    },
    setIndex: function(index) {
      this.indexed = index;
    }
  }
};
</script>
