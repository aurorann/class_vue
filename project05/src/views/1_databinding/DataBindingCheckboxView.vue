<template>
  <div>
    <h3>checkbox 바인딩</h3>
    <div>
      <input type="checkbox" id="html" value="HTML" v-model="favoriteLang">
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" id="css" value="CSS" v-model="favoriteLang">
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="checkbox" id="js" value="JS" v-model="favoriteLang">
      <label for="js">JavaScript</label>
    </div>
    <div>선택한 과목 : {{favoriteLang}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // favoriteLang: [] 여러개 선택이 가능한 값은 반드시 배열로 선언한다
      favoriteLang: ['JS']
    }
  }
}
</script>
