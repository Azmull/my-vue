<script setup>

</script>



<template>
  <div>這是1個slot的原件</div>
  <h4>slot標題</h4>

  <slot name="header"></slot>
  
  <h4>slot結尾</h4>
  <slot name="footer"></slot>
</template>