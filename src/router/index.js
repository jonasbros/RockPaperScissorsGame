import { createRouter, createWebHashHistory } from "vue-router";
import Picker from "../components/Picker";
import Rock from "../views/Rock";
import Paper from "../views/Paper";
import Scissors from "../views/Scissors";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Picker,
  },
  {
    path: "/rock",
    name: "Rock",
    component: Rock,
  },
  {
    path: "/paper",
    name: "Paper",
    component: Paper,
  },
  {
    path: "/scissors",
    name: "Scissors",
    component: Scissors,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
