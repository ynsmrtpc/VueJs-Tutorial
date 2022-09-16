<template>
  <h3 class="bg-blue text-white">Blue Component</h3>
  <input type="text" />
</template>

<script>
export default {
  mounted() {
    console.log("BLUE mounted");
  },

  // keep-alive kullandığımız için lifecycle hooklarımız değişti
  // artık activeted ve deactivated kullanabiliriz
  activated() {
    console.log("BLUE activeted");
  },
  deactivated() {
    console.log("BLUE deactiveted");
  },
};
</script>
