<template>
    <div>
      <h3>input 바인딩 - 양방향</h3>
      <input type="text" v-model="userId">

      <h3>이벤트</h3>
      <button @click="myFunction">클릭</button> <!--파라미터가 없다면 () 생략가능-->
      <button @click="changeData">변경</button>

      <h3>숫자 바인딩</h3>
      <input type="text" v-model="num1">
      <input type="text" v-model="num2">
      <span>{{ num1+num2 }}</span>
      <hr>
      <input type="text" v-model.number="num3">
      <input type="text" v-model.number="num4">
      <span>{{num3+num4}}</span>

    </div>
</template>

<script>
export default {
  data () {
    return {
      userId: 'itwill.co.kr',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  methods: {
    myFunction () { // function생략
      alert(this.userId) // ;입력시 오류
    },
    changeData () {
      this.userId = 'KOREA'
    }
  }
}
</script>
