import Vue from 'vue';
import Router from 'vue-router';
import SignUp from '@/components/Admin/SignUp';
import LogIn from '@/components/Admin/LogIn';
import Users from '@/components/Admin/Users';
import UserDetails from '@/components/Admin/UserDetails';
import AddPost from '@/components/Admin/AddPost';
import Posts from '@/components/Admin/Posts';
import Home from '@/components/Home';
import SinglePost from '@/components/SinglePost';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn,
    },
    {
      path: '/admin/users',
      name: 'Users',
      component: Users,
    },
    {
      path: '/admin/users/:id',
      name: 'UserDetails',
      component: UserDetails,
      props: true,
    },
    {
      path: '/admin/posts/new',
      name: 'AddPost',
      component: AddPost,
    },
    {
      path: '/admin/posts',
      name: 'Posts',
      component: Posts,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/:slug',
      name: 'SinglePost',
      component: SinglePost,
      props: true,
    },
  ],
});
