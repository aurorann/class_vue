<template>
    <div>
      <h3>key 이벤트</h3>
      <input type="search" v-model="searchText">
      <button @click="doSearch">조회</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    doSearch() {
      alert(this.searchText)
    }
  }
}
</script>
