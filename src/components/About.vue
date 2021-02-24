<template>
  <h1>About页面</h1>
  <ul>
    <li>{{ total }}</li>
    <li v-for="(item, index) in tableList" :key="index">
      {{ item.name }}
    </li>
  </ul>
  {{ num }}
  {{ book.title }}
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { defineComponent, ref, reactive, computed } from 'vue';
export default defineComponent({
  setup() {
    const store = useStore();
    const num = ref(0);
    const book = reactive({ title: 'Vue 3 Guide' });
    // console.log('bookbookbook', book)
    let tableList = computed(() => store.state.tableData.list);
    let total = computed(() => store.state.tableData.total);
    // console.log('tableList', tableList);
    return {
      num,
      book,
      tableList,
      total,
    };
  },
  asyncData: ({ store, router }: any) => {
    store.commit('getClient');
  },
});
</script>
