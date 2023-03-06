<template>
  <slot :products="products" />
</template>

<script lang="ts" setup async>
const { fetchProducts } = useAdPackageStore();
const products = await fetchProducts();
products.sort((a, b) => b.unit_amount - a.unit_amount);
</script>
