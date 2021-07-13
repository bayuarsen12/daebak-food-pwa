<template>
  <div style="display:flex;justify-content:center;">
    <div class="container">
      <div class="title-page">
        <p>History</p>
      </div>
      <ListHistory />
      <div class="section-botnav">
        <BottomNavigation />
      </div>
    </div>
  </div>
</template>
<script>
import "../css/pickup-page.css";
import ListHistory from "../components/ListHistory.vue";
import axios from "axios";
import BottomNavigation from "../components/BottomNavigation";

export default {
  name: "History",
  components: {
    BottomNavigation,
    ListHistory
  }
};
</script>
