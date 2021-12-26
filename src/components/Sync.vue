    <!-- parent -->
<template>
<div class="parent">
    <h1>{{doc.title}}</h1>
  <childSync v-bind.sync="doc"></childSync>
  <childSync :title="doc.title" @update:title="doc.title = $event"></childSync>
  
</div>
</template>
<script>
import childSync from './childSync';
export default {
  data() {
    return {
      doc: {
          title:"修改标题",
          content:"修改内容"
      }
    };
  },
  components: {
    childSync
  },

}
</script> 