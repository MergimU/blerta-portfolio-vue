import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home";

import Thrive from "../views/caseStudies/Thrive";
import BAMFClinicPortal from "../views/caseStudies/BAMFClinicPortal";
import BAMFPatientPortal from "../views/caseStudies/BAMFPatientPortal";
import UnisegurosPlatform from "../views/caseStudies/UnisegurosPlatform";
import UnisegurosWebsite from "../views/caseStudies/UnisegurosWebsite";
import BalkanCuisine from "../views/caseStudies/BalkanCuisine";
import Express from "../views/caseStudies/Express";
import Friendict from "../views/caseStudies/Friendict";

const routes = [
  {
    path: "/",
    meta: {
      title: "Blerta Beselica",
    },
    name: "home",
    component: Home,
  },
  {
    path: "/case-study/thrive",
    meta: {
      title: "Case Study: Thrive",
    },
    name: "thrive",
    component: Thrive,
  },
  {
    path: "/case-study/bamf-patient",
    meta: {
      title: "Case Study: Balkan-cuisine",
    },
    name: "bamf-patient",
    component: BAMFPatientPortal,
  },
  {
    path: "/case-study/bamf-clinic",
    meta: {
      title: "Case Study: Uniseguros-website",
    },
    name: "bamf-clinic",
    component: BAMFClinicPortal,
  },
  {
    path: "/case-study/express",
    meta: {
      title: "Case Study: Uniseguros-platform",
    },
    name: "express",
    component: Express,
  },
  {
    path: "/case-study/uniseguros-platform",
    meta: {
      title: "Case Study: Express",
    },
    name: "uniseguros-platform",
    component: UnisegurosPlatform,
  },
  {
    path: "/case-study/uniseguros-website",
    meta: {
      title: "Case Study: Bamf-clinic",
    },
    name: "uniseguros-website",
    component: UnisegurosWebsite,
  },
  {
    path: "/case-study/balkan-cuisine",
    meta: {
      title: "Case Study: Bamf-patient",
    },
    name: "balkan-cuisine",
    component: BalkanCuisine,
  },
  {
    path: "/case-study/friendict",
    meta: {
      title: "Thrive",
    },
    name: "friendict",
    component: Friendict,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  window.scrollTo(0, 0);

  // Add smooth scroll after page change
  let bodyTag = document.querySelector("body");
  bodyTag.classList.remove("smooth-scroll");
  bodyTag.classList.add("smooth-scroll");
  next();
});

export default router;
