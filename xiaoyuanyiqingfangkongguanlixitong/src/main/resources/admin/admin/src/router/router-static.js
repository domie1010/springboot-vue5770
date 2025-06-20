import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import daka from '@/views/modules/daka/list'
    import dictionary from '@/views/modules/dictionary/list'
    import fengkong from '@/views/modules/fengkong/list'
    import forum from '@/views/modules/forum/list'
    import gonggao from '@/views/modules/gonggao/list'
    import news from '@/views/modules/news/list'
    import wangfanYuyue from '@/views/modules/wangfanYuyue/list'
    import wuzi from '@/views/modules/wuzi/list'
    import wuziCollection from '@/views/modules/wuziCollection/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryFengkong from '@/views/modules/dictionaryFengkong/list'
    import dictionaryFengkongDidian from '@/views/modules/dictionaryFengkongDidian/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryWangfanYuyue from '@/views/modules/dictionaryWangfanYuyue/list'
    import dictionaryWangfanYuyueYesno from '@/views/modules/dictionaryWangfanYuyueYesno/list'
    import dictionaryWuzi from '@/views/modules/dictionaryWuzi/list'
    import dictionaryWuziCollection from '@/views/modules/dictionaryWuziCollection/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryFengkong',
        name: '风险类型',
        component: dictionaryFengkong
    }
    ,{
        path: '/dictionaryFengkongDidian',
        name: '地区',
        component: dictionaryFengkongDidian
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryNews',
        name: '新闻类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryWangfanYuyue',
        name: '交通工具',
        component: dictionaryWangfanYuyue
    }
    ,{
        path: '/dictionaryWangfanYuyueYesno',
        name: '申报状态',
        component: dictionaryWangfanYuyueYesno
    }
    ,{
        path: '/dictionaryWuzi',
        name: '物资类型',
        component: dictionaryWuzi
    }
    ,{
        path: '/dictionaryWuziCollection',
        name: '收藏表类型',
        component: dictionaryWuziCollection
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/daka',
        name: '检测信息',
        component: daka
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/fengkong',
        name: '隔离信息',
        component: fengkong
      }
    ,{
        path: '/forum',
        name: '交流论坛',
        component: forum
      }
    ,{
        path: '/gonggao',
        name: '校园公告',
        component: gonggao
      }
    ,{
        path: '/news',
        name: '疫情新闻',
        component: news
      }
    ,{
        path: '/wangfanYuyue',
        name: '上报信息',
        component: wangfanYuyue
      }
    ,{
        path: '/wuzi',
        name: '物资',
        component: wuzi
      }
    ,{
        path: '/wuziCollection',
        name: '物资收藏',
        component: wuziCollection
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
