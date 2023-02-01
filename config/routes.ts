export default [
  {
    path: '/premd',
    layout: false,
    name: '在线md目录',
    icon: 'smile',
    component: './Premd',
  },
  {
    path: '/welcome',
    layout: false,
    name: 'welcome to visit this site ❤️',
    icon: 'smile',
    component: './Welcome',
  },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
