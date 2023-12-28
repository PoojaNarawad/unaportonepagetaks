import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: '/search', component: 'SearchPage' },
    { path: "/table", component: "TablePage" },
  ],
  npmClient: 'npm',
});
