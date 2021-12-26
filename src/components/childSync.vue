<template>
    <div>
        <button @click="changeTitle"> 修改</button>
    </div>
</template>
<script>
export default {
    props:{
      title:{
          type:String
      }
    },
    data() {
        return {

        }
    },
    methods:{
        changeTitle(){
            this.$emit('update:title',"新标题")
        }

    }
}
</script>
