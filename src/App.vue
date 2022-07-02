<template>
  <v-app>
    <v-app-bar app color="#5f75da" dark>
      <div class="flex align-center">
        <v-img
          alt="MyOrders Logo"
          class="mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          height="50"
        />
      </div>

    </v-app-bar>

    <v-main>
      <Product />
    </v-main>
  </v-app>
</template>

<script>
import Product from "./components/Product";

export default {
  name: "App",

  components: {
    Product,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
</style>