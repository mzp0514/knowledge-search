<template>
  <el-row :gutter="5">

    <el-col :span="24">
      <div class="grid-content bg-purple">

          <el-tag class="key">{{key1}}</el-tag>
          <el-tag class="val" type="success">{{val1}}</el-tag>
      </div>
    </el-col>


  </el-row>
</template>

<script>
  export default {
    name: 'row',

    data() {
      return {

      }

    },

    props: {
        key1: String,
        val1: String,

    },


    methods:{

    }
  }


</script>

<style>
  .el-row {
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple {
    /* background: rgba(0, 0, 0, 0.5); */
  }

  .grid-content {
    border-radius: 0px;
    min-height: 45px;
    line-height:45px;
    flex: float;
    padding-left: 5px;
  }
  .row-bg {

    background-color: #f9fafc;
  }

  .val{
    float: right;
    margin-top: 6px;
    margin-right:5px;
  }
  .key{
    float: left;
    margin-top: 6px;
    margin-right:5px;
  }
</style>
