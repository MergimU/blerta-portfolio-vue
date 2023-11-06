import { createRouter, createWebHashHistory } from "vue-router";

import InnerContainer from "@/views/InnerContainer";

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
    name: "home",
    component: InnerContainer,
  },
  {
    path: "/case-studies/thrive",
    name: "thrive",
    component: Thrive,
  },
  {
    path: "/case-studies/bamf-patient",
    name: "bamf-patient",
    component: BAMFPatientPortal,
  },
  {
    path: "/case-studies/bamf-clinic",
    name: "bamf-clinic",
    component: BAMFClinicPortal,
  },
  {
    path: "/case-studies/express",
    name: "express",
    component: Express,
  },
  {
    path: "/case-studies/uniseguros-platform",
    name: "uniseguros-platform",
    component: UnisegurosPlatform,
  },
  {
    path: "/case-studies/uniseguros-website",
    name: "uniseguros-website",
    component: UnisegurosWebsite,
  },
  {
    path: "/case-studies/balkan-cuisine",
    name: "balkan-cuisine",
    component: BalkanCuisine,
  },
  {
    path: "/case-studies/friendict",
    name: "friendict",
    component: Friendict,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
