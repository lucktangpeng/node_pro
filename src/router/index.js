import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/components/CommonMain.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/components/CommonContent.vue")
      },
      {
        path: "detail",
        name: "detail",
        component: () => import("@/components/CommonDetail.vue")
      },
      {
        path: "detail:id",
        name: "detail",
        component: () => import("@/components/CommonDetail.vue")
      },
      {
        path: "/personal",
        name: "personal",
        component: () => import("@/components/CommonPersonal.vue")
      },
      {
        path: "/article",
        name: "article",
        component: () => import("@/components/CommonArticle.vue")
      },
      {
        path: "/article/detail",
        name: "articledetail",
        component: () => import("@/components/CommonArticleDetail.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/components/CommonLogin.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/components/CommonRegister.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
