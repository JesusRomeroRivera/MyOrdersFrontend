<template>
  <v-container>
    <v-card class="pa-4 mb-4"
      elevation="3"
      outlined
      shaped
      v-for="Product in Products"
      :key="Product.id"
    >
      {{ Product.name }}
    </v-card>
    <v-container>
    <v-row
      justify="flex-start"
      align="center"
    >
      <v-col
        cols="12"
        md="4"
      >
        <v-form ref="form">
          <v-text-field
            :counter="max"
            :rules="rules"
            label="Nombre del producto"
          ></v-text-field>
        </v-form>
      </v-col>
      <v-btn
        v-on:click="this.addProduct"
        elevation="2"
      >Agregar</v-btn>
    </v-row>
  </v-container>
  </v-container>
</template>

<script>
import ProductService from "@/services/products-service.js";

export default {
  name: "Product",

  data: () => ({
    Products: [{
      "productId": 1,
      "name": "Tarjeta de Video Nvidea 3050"
    },
    {
      "productId": 2,
      "name": "Tarjeta de Video Nvidea 3060"
    },
    {
      "productId": 3,
      "name": "Ram Corsair 8gb 3000mhz "
    },
    {
      "productId": 4,
      "name": "Monitor Lg 21\" 1080p"
    },
    {
      "productId": 5,
      "name": "Mouse SteelSeries Rival 310"
    }
    ],
  }),
  methods: {
    getDataProducts() {
      ProductService.getAll()
        .then((response) => {
          console.log(response);
          this.Products = response.data;
          console.log(this.Products);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    addProduct(){
      this.Products.push({
      "productId": 6,
      "name": "Tarjeta de Video Nvidea 3060"
      })
    },
  beforeMount() {
    this.getDataProducts();
  },
  }
};
</script>
