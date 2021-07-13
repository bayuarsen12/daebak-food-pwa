<template>
  <div style="display:flex;justify-content:center;">
    <div class="container">
      <div>Ini Halaman Pickup</div>
      <div class="section-botnav">
        <BottomNavigation />
      </div>
    </div>
  </div>
</template>
<script>
import "../css/pickup-page.css";
import BottomNavigation from "../components/BottomNavigation";

export default {
  name: "Pickup",
  components: {
    BottomNavigation
  }
};
</script>
