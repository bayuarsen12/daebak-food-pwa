<template>
  <div class="wrapper-category">
    <div class="parent-categories">
      <div v-for="(item, index) in categories" :key="index" class="category">
        <div class="img-category">
          <img :src="item.images" alt="img-category" />
        </div>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import "../css/categories.css";
export default {
  name: "Categories",
  data() {
    return {
      categories: [
        {
          images: "/static/images/jajangmyeon.png",
          name: "Jajangmyeon"
        },
        {
          images: "/static/images/jajangmyeon.png",
          name: "Jajangmyeon"
        },
        {
          images: "/static/images/jajangmyeon.png",
          name: "Jajangmyeon"
        },
        {
          images: "/static/images/jajangmyeon.png",
          name: "Jajangmyeon"
        },
        {
          images: "/static/images/jajangmyeon.png",
          name: "Jajangmyeon"
        },
        {
          images: "/static/images/jajangmyeon.png",
          name: "Jajangmyeon"
        },
        {
          images: "/static/images/jajangmyeon.png",
          name: "Jajangmyeon"
        },
        {
          images: "/static/images/jajangmyeon.png",
          name: "Jajangmyeon"
        },
        {
          images: "/static/images/jajangmyeon.png",
          name: "Jajangmyeon"
        },
        {
          images: "/static/images/jajangmyeon.png",
          name: "Jajangmyeon"
        }
      ]
    };
  }
};
</script>
