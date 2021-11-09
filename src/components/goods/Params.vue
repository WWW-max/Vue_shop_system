<template>
  <div>
     <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>参数列表</el-breadcrumb-item>
    </el-breadcrumb>

        <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <!-- 警告区域 -->
      <el-alert show-icon type="warning" title="注意：只允许为第三级分类设置相关参数!" :closable="false"></el-alert>

      <!-- 选择商品分类区域 -->
      <el-row class="cat_opt">
        <el-col>
          <span>选择商品分类:</span>
          <!-- 选择商品分类的级联选择框 -->
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      //商品分类列表
      catelist:[]
    }
  },
  created(){
    this.getCateList()
  },
  methods:{
    //获取所有的商品分类列表
    async getCateList(){
        const {data:res} = await this.$http.get('categories')
        if(res.meta.status !==200){
          return this.$messagel.error('获取商品分类失败！')
        }
        this.catelist = res.catelist;
        console.log(this.catelist)
    }
  }
}
</script>

<style lang="less" scoped>
.cat_opt{
    margin:15px 0;
}
</style>