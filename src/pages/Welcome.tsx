import { PageContainer } from '@ant-design/pro-components';
import { Avatar, Button } from 'antd';
import React from 'react';
import { Link } from 'umi';
import styles from './Welcome.less';
import Footer from '@/components/Footer';
const Welcome: React.FC = () => {
  return (
    <PageContainer className={styles.container}>
      <div className={styles.content}>
        <Avatar
          shape="square"
          size={320}
          className={styles.avatar}
          src="/logo.jpg"
          alt="snail run"
        />
        <Button type="primary" shape="round" size="large">
          <Link to="/premd">Markdown预览</Link>
        </Button>
        <Button type="primary" shape="round" size="large">
          <Link to="/prepdf">pdf预览</Link>
        </Button>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </PageContainer>
  );
};
export default Welcome;
