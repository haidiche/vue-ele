<template>
  <!-- <el-radio-group v-model="radio" @change='changeRadio'> 
    <el-radio :label="3">备选项</el-radio>
    <el-radio :label="6">备选项</el-radio>
    <el-radio :label="9">备选项</el-radio>
  </el-radio-group> -->
      <el-table
      :data="tableData"
      style="width: 100%">
        <el-table-column
          label="日期"
          width="180">
          <template slot-scope="scope">
         <el-radio v-model="radio" :label="scope.row.data"  @change='changeRadio(scope.row)'>{{''}}</el-radio>
           </template>
       </el-table-column>
         <el-table-column
          label="年龄"
          width="180">
          <template slot-scope="scope">
      {{scope.row.age}}
           </template>
       </el-table-column>
    </el-table>

</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        radio:'',
        tableData:[{data:'1998.01.19',age:'16'},
        {data:'1999.01.19',age:'17'},
        {data:'2020.01.19',age:'15'},
        {data:'2021.01.19',age:'18'}]
      }
    },
    methods: {
      changeRadio(value){
        console.log('打印传参',value)
      }
    }
  }
</script>

