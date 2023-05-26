<template>
  <div>
    <h3>다양한 속성 바인딩</h3>
    <hr>
    <h3>readonly 속성</h3>
    <!-- readonly 속성에서 v-model이면 양방향이 될수 있음 -->
    <!-- <input type="text" name="" id="" readonly v-model="userID"> -->

    <!-- value 속성에 단방향 데이터 바인딩할 수 있다 -->
    <input type="text" name="" id="" v-bind:value="userID" readonly>

    <!-- v-bind 생략할 수 있다 -->
    <input type="text" name="" id="" :value="userID" readonly>
    <hr>
    <h3>src 속성</h3>
    <!-- 이미지 속성도 데이터 바인딩 할 수 있다 -->
    <img :src="imgSrc" alt="" style="width: 100px; height: auto;">
    <hr>
    <h3>disabled 속성 바인딩 - 검색어를 입력하지 않으면 조회버튼 비활성화</h3>
    <input type="search" name="" id="" v-model="txt1">
    <button :disabled="txt1 === ''">조회</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userID: 'korea',
      imgSrc: 'https://www.itwill.co.kr/css/wvtex/img/wvUser/logo.png',
      txt: ''
    }
  }
}
</script>
