<template>

  <div class="row">

    <div class="col s8 offset-s2 ">
      <h1>Вечера у Вечерковой 25.06</h1>
      <h4>{{message}}</h4>

      <button class="btn col s7 offset-s2 amber darken-3" @click="navigate" >Регистрация</button>

    </div>
  </div>

</template>


<script>


export default {
  name: "Success",
  props: ['message'],

  methods:{
    navigate(){
      this.$router.push('/');
    }
  }
}
</script>

<style>


</style>
