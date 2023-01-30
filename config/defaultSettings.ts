import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#974eeb',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'md online',
  pwa: false,
  logo: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1012/logo.jpg',
  iconfontUrl: '',
};

export default Settings;
