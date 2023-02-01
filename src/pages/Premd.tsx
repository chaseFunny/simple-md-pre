import { PageHeaderWrapper } from '@ant-design/pro-components';
import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import { Button } from 'antd';
import React, { useState } from 'react';
import styles from './Premd.less';

const Admin: React.FC = () => {
  const article = `
  ## MarkdownPreview

  > todo: React component preview markdown text.
  ## 二级标题

> 这个是声明

# 一级

#### 四级

###### 六级


  `;
  const [popupVisibility, setPopupShow] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const showEdit = () => {
    setPopupShow(!popupVisibility);
  };
  return (
    <PageHeaderWrapper content={' online markdown edit and preview'} className={styles.box}>
      {popupVisibility && <div>明天做完 加油 小张！</div>}
      <Button type="primary" shape="round" size="small" className={styles.btn} onClick={showEdit}>
        编辑当前文本
      </Button>
      <div className={styles.content}>
        <ReactMarkdown source={article} />
      </div>
      <div className={`nav-container ${navVisible ? 'show' : 'hide'}`}>
        <div
          className="toggle-btn"
          onClick={() => {
            setNavVisible(!navVisible);
          }}
        >
          {navVisible ? 'MENU →' : '← MENU'}
        </div>
        <MarkNav source={article} />
      </div>
    </PageHeaderWrapper>
  );
};
export default Admin;
