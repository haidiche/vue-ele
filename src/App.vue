<template>
  <div id="app">
    <div>

      <router-link to="/hellovue">hellovue</router-link>
      <router-link to="/parents">parents</router-link>
      <router-link to="/sync">sync</router-link>
      <router-view></router-view>
     </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">


</style>
