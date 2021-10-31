<template>
  <div>
      <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
        <el-row>
            <el-col>
                <el-button type="primary">添加分类</el-button>
            </el-col>
        </el-row>
 
        <!-- 表格 -->
        <tree-table :data="catelist" :columns="columns" 
        :selection-type="false"
        :expand-type="false"
        show-index index-text="#"
         border :show-row-hover="false">
            <!-- 是否有效 -->
            <template slot="isok" slot-scope="scope">
                <i class="el-icon-success" 
                v-if="scope.row.cat_deleted ===false"
                style="color:lightgreen"></i>
                <i class="el-icon-error" v-else style="color:red"></i>
            </template>

            <!-- 排序 -->
            <template slot="order" slot-scope="scope">
                <el-tag size="mini" v-if="scope.row.cat_level===0">一级</el-tag>
                <el-tag type="success" size="mini" v-else-if="scope.row.cat_level==1">二级</el-tag>
                <el-tag type="warning" size="mini" v-else>三级</el-tag>
            </template>

             <!-- 操作 -->
            <template slot="opt" slot-scope="scope">
               <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
               <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button></el-button>
            </template>
         </tree-table>



        <!-- 分页区域 -->
    </el-card>

  </div>
</template>

<script>
export default {
   data(){
       return {
           //查询条件
           queryInfo:{
               type:3,
               pagenum:1,
               pagesize:5
           },
           //商品分类数据，默认为空
           catelist:[],
           //总数据条数
           total:0,
           //为table指定列的定义
           columns:[
               {
               label:'分类名称',
               prop:'cat_name'
               },{
                   label:'是否有效',
                   //表示将当前列定义为模板列
                   type:'template',
                   //表示当前这一列使用模板名称
                   template:'isok'
               },{
                   label:'排序',
                   //表示将当前列定义为模板列
                   type:'template',
                   //表示当前这一列使用模板名称
                   template:'order'
               },{
                   label:'操作',
                   //表示将当前列定义为模板列
                   type:'template',
                   //表示当前这一列使用模板名称
                   template:'opt'
               }
           ]
       }
   },
   created(){
       //调用方法获取商品分类数据
       this.getCateList()
   },
   methods:{
       //获取商品分类数据
       async getCateList(){
         const {data:res} = await this.$http.get('categories',{params:this.querInfo})

         if(res.meta.status !==200){
             return this.$message.error('获取商品分类失败！')
         }

        //把数据列表赋值给catelist
         this.catelist = res.data
         console.log('和咯',this.catelist)
        //  为总数据条数赋值
        this.total =  res.data.total;
         
       }
   }
}
</script>


<style lang="less" scoped>

</style>>