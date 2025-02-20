<script setup lang="tsx">
import { useCounterStore } from '@/stores'
import { ref } from 'vue'
import Foo from './foo'
defineProps<{ msg: string }>()
const count = ref(0)
const store = useCounterStore()
const abc = <h1>abc</h1>
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ store.$state.count }}</h2>
  <abc />
  <Foo />
  <div class="card">
    <button
      type="button"
      @click="count++"
    >
      count is {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped lang="scss">
// @use '@/styles/variables.scss';

.card {
  color: $color;
}
</style>
