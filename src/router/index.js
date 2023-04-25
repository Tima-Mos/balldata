import { createRouter, createWebHistory } from 'vue-router'
import competitionsListView from "@/views/competitionsListView.vue";
import curCompMatches from "@/views/curCompMatchesView.vue";
import todayMatchesView from "@/views/todayMatchesView.vue";
import teamsView from "@/views/teamsView.vue";
import curTeamMatchesView from "@/views/curTeamMatchesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'today',
     component: todayMatchesView
    },
    {
      path: '/comps',
      name: 'comps',
      component: competitionsListView
    },
    {
      path: '/comps/:id',
      name: 'curcomp',
      component: curCompMatches
    },
    {
      path: '/teams',
      name: 'teams',
      component: teamsView
    },
    {
      path: '/teams/:id',
      name: 'curteam',
      component: curTeamMatchesView
    },
  ]
})

export default router
