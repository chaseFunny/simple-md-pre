import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'snail run 的提效小工具';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Snail Run',
          title: 'Snail Run',
          href: 'https://www.yuque.com/chumingyaochenzao',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/chaseFunny',
          blankTarget: true,
        },
        {
          key: 'wx',
          title: 'RELEASE500',
          href: '',
          blankTarget: false,
        },
      ]}
    />
  );
};
export default Footer;
