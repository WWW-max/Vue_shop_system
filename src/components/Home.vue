<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/shop_logo.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <!-- 折叠按钮 -->
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          unique-opened 
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="activePath"
        >
        <!-- 一级菜单 -->
          <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{item.authName}}</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children"
             :key="subItem.id" @click="saveNavState('/'+subItem.path)">
              <!-- 图标 -->
              <i class="el-icon-menu"></i>
              <!-- 文本 -->
              <span>{{subItem.authName}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data(){
    return {
      //左侧菜单数据
      menulist:[],
      iconsObj: {
        '125': 'iconfont icon-user',
        '103': 'iconfont icon-tijikongjian',
        '101': 'iconfont icon-shangpin',
        '102': 'iconfont icon-danju',
        '145': 'iconfont icon-baobiao'
      },
      //是否折叠
      isCollapse:false,//参数默认不折叠
      //被激活的链接地址
      activePath: ''
    }
  },
  created(){//生命周期函数 获取菜单
      this.getMenuList()
      this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
      this.activePath = window.sessionStorage.getItem('activePath');
    },
    //获取所有的菜单
    async getMenuList() {
     const {data: res} = await this.$http.get('menus')
     if(res.meta.status!==200) return this.$message.error(res.meta.msg)
     this.menulist=res.data
     console.log(res)
    },
    //点击按钮，却换菜单的折叠与展开
    toggleCollapse(){
         this.isCollapse=!this.isCollapse//是否折叠
    },
    //保存链接的激活状态
    saveNavState(activePath){
           window.sessionStorage.setItem('activePath',activePath)
           //点击二级菜单后重新为activePath赋值
           this.activePath= activePath;
    }
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0; //左图标靠左贴边对齐
  align-items: center; //退出按钮上下居中
  color: #fff;
  font-size: 20px;
  > div {
    //嵌套
    display: flex;
    align-items: center; //纵向居中对齐
    span {
      margin-left: 15px; //文本和标签有间隔
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right:none;//没有边框线，解决边框不对齐问题
  }
}
.el-main {
  background-color: #eaedf1;
}

.iconfont{
    margin:10px; //图标的外边距为10px ,和文本间隔开
}

.toggle-button{
  background-color:#4a5064;
  font-size:10px;
  line-height:24px;
  color:#fff;
  text-align:center;
  letter-spacing:0.2em;
  cursor:pointer;
}
</style>