<template>
  <div>
    <h3>checkbox 바인딩</h3>
    <div>
      <input type="radio" id="html" value="HTML" v-model="favoriteLang">
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="radio" id="css" value="CSS" v-model="favoriteLang">
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="radio" id="js" value="JS" v-model="favoriteLang">
      <label for="js">JavaScript</label>
    </div>
    <div>선택한 과목 : {{favoriteLang}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      favoriteLang: '' // radio속성은 하나만 선택되기 때문에 문자열로 선언한다
    }
  }
}
</script>
