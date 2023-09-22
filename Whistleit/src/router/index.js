// Composables
import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '../views/UsersView.vue'
import TeamsView from '../views/TeamsView.vue'
import DepartmentView from '../views/DepartmentView.vue'
import ChannelView from '../views/ChannelView.vue'
import AttachmentsView from '../views/AttachmentsView.vue'
import IpSettingsView from '../views/IpSettingsView.vue'
import AppsView from '../views/AppsView.vue'
import PaymentView from '../views/PaymentView.vue'
import AddUserView from '../views/AddUserView.vue'
// others views
import LoginView from '../views/others/LoginView.vue'
const routes = [
  // Users View route
  {
    path: "/",
    component: UsersView,
    name: "UsersView",
    meta: { title: "Users" },
  },
  // Teams View route
  {
    path: "/teams",
    component: TeamsView,
    name: "TeamsView",
    meta: { title: "Teams" },
  },
  // Department View route
  {
    path: "/department",
    component: DepartmentView,
    name: "DepartmentView",
    meta: { title: "Teams" },
  },
  // Channel View route
  {
    path: "/channel",
    component: ChannelView,
    name: "ChannelView",
    meta: { title: "Channel" },
  },
  // attachments View route
  {
    path: "/attachments",
    component: AttachmentsView,
    name: "AttachmentsView",
    meta: { title: "Attachments" },
  },
  // ipsettings View route
  {
    path: "/ipsettings",
    component: IpSettingsView,
    name: "IpSettingsView",
    meta: { title: "Ip Settings" },
  },
  // apps View route
  {
    path: "/apps",
    component: AppsView,
    name: "AppsView",
    meta: { title: "Apps" },
  },
  // payment View route
  {
    path: "/payment",
    component: PaymentView,
    name: "PaymentView",
    meta: { title: "Payment" },
  },
  // Add User View route
  {
    path: "/adduser",
    component: AddUserView,
    name: "AddUserView",
  },
  // others routes
  // login route
  {
    path: "/login",
    component: LoginView,
    name: "LoginView",
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
