<script setup>
import { ref } from 'vue'

console.log(window.js_global_title)
const jstitle = ref('')
jstitle.value = window.js_global_title

const enva = ref('')
enva.value = import.meta.env.VITE_a
const envb = ref('')
envb.value = import.meta.env.VITE_b
const envc = ref('')
envc.value = import.meta.env.VITE_c
const propertyTitle = ref('')
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance() //解構寫法
// propertyTitle.value = proxy.$propertyTitle
propertyTitle.value = proxy.$propertyTitle

import { inject } from 'vue'
const provideTitle = ref('')
provideTitle.value = inject('provideTitle')
</script>

<template>
  <h2>11-全域變數</h2>
  <div>{{ jstitle }}</div>
  <br />
  <div>
    {{ enva }}
    <br />
    {{ envb }}
    <br />
    {{ envc }}
  </div>
  <br />
  <div>
    {{ propertyTitle }}
  </div>
  <div>
    {{ provideTitle }}
  </div>
</template>
