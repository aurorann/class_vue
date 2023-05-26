<template>
    <div>
        <h1>select 바인딩</h1>
        <select name="" id="" v-model="selectedCity"> <!-- v-model의 약자가 {{}}이기때문에 {{}}사용 금지 -->
          <option value=""></option>
          <option value="02">서울</option>
          <option value="054">부산</option>
          <option value="064">제주</option>
        </select>
    </div>
</template>

<script>
export default {
  data () {
    return {
      selectedCity: '064' // 02 || 054 || 064
    }
  }
}
</script>
