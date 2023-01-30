export default [
  {
    path: '/premd', layout: false, name: '在线md目录', icon: 'smile', component: './Admin'
  },
  { path: '/welcome',layout: false, name: '欢迎', icon: 'smile', component: './Welcome' },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
