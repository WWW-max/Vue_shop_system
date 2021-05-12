<template>
  <el-container class="home-container">
<!-- 头部区域 -->
  <el-header>
    <div>
      <img src="../assets/shop_logo.png" alt="">
      <span>电商后台管理系统</span>
    </div>
  <el-button type="info" @click="logout">退出</el-button>
  </el-header>
  <!-- 页面主体区域 -->
  <el-container>
    <!-- 侧边栏 -->
    <el-aside width="200px">Aside</el-aside>
    <!-- 右侧内容主体 -->
    <el-main>Main</el-main>
  </el-container>
</el-container>

</template>

<script>
export default {
   methods: {
       logout(){
            window.sessionStorage.clear();
            this.$router.push("/login");
       }   
   }
}
</script>

<style lang="less" scoped>
.home-container{
    height:100%;
}
.el-header{
  background-color:#373D41;
  display:flex;
  justify-content: space-between;
  padding-left:0;//左图标靠左贴边对齐
  align-items: center;//退出按钮上下居中
  color: #fff;
  font-size: 20px;
  > div{ //嵌套
    display: flex;
    align-items: center;//纵向居中对齐
    span{
      margin-left: 15px;//文本和标签有间隔
    }
  }

}
.el-aside{
  background-color:#333744;
}
.el-main{
  background-color:#eaedf1;
}

</style>