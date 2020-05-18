<template>
    <div>
      <smallpanel style="display: flex;"></smallpanel>
      <card v-loading="loading" element-loading-text="拼命搜索中"
        element-loading-spinner="el-icon-loading"
         v-if="loading"></card>
      <div v-for="item in infos">
       <card v-bind:entity="item"></card>
      </div>
    </div>

</template>

<script>
  import smallpanel from './small-search-panel.vue'
  import card from './card.vue'
  export default {
    name: 'result',
    components: {
      smallpanel, card
    },

    data() {
        return {
          query: 'u',
          loading: true,
          infos:[]
       };
    },
    
    created: function (){

        this.query = this.$route.query.content;
        this.$axios.get('/api/', {
            params: {
              q: this.query
            },
             dataType: 'jsonp',
              crossDomain: true
          }).then(res => {
            this.infos = res.data;
            this.loading = false;

           })




    },

    methods:{
        back(){
            this.$router.push('/')
        }
    }
  }
</script>
