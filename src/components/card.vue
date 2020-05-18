<template>
  <div>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>{{label}}</span>

  </div>
  <el-collapse accordion>

    <el-collapse-item title="描述">
      <div>{{description}}</div>

    </el-collapse-item>
    <el-collapse-item title="属性">

        <div v-for = "(value, key) in property">
          <row v-bind:key1="key" v-bind:val1="value"></row>

        </div>
    </el-collapse-item>
    <el-collapse-item title="标签">

    </el-collapse-item>
    <el-collapse-item title="近义项">

    </el-collapse-item>
  </el-collapse>

</el-card>
</div>
</template>

<script>
  import row from "./row.vue"
  export default {
    name: 'card',
    components: {
        row
    },

    data() {
      return {
        description: "",
        label: "",
        property: {}
      }

    },

    props: {
        entity: Object
    },

    created() {
      if(this.$props.entity){
        this.property = this.$props.entity;
        window.console.log(this.property);
        this.label =this.$props.entity["名称"];
        this.description = this.$props.entity["详情"];
        delete this.property["名称"];
        delete this.property["详情"];
        delete this.property["锚点"];
        delete this.property["rel"];
        delete this.property["score"];
        for(var k in this.property){
          if(this.property[k] == ""){
            delete this.property[k];
          }
        }
      }

    },


    methods:{


    }
  }
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;

  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 650px;
    margin-top: 30px;
    margin-left: 150px;

  }
</style>
