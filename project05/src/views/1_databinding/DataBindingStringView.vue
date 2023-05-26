<template>
    <div>
        <h1>Hello {{ userName }}</h1>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      userName: 'IT WILL',
      message: '아이티윌 교육센터'
    }
  }
}
</script>
