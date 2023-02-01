import { PageHeaderWrapper } from '@ant-design/pro-components';
import ReactMarkdown from 'react-markdown';
import { history } from 'umi';
import MarkNav from 'markdown-navbar';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import  './Premd.less';
import "markdown-navbar/dist/navbar.css";
import article from './article';
import TextArea from 'antd/lib/input/TextArea';
import { UpCircleFilled } from '@ant-design/icons';

const Admin: React.FC = () => {
  console.log(history, 'history');
  
  const [popupVisibility, setPopupShow] = useState(false);
  const [articleState, setArticle] = useState(article)
  let temText = ''
  const [navVisible, setNavVisible] = useState(true);
  const changeModel = (num: number = 0) => {
    if(num === 1) {
      setArticle(temText)
      history.push(history.location.pathname)
    }
    setPopupShow(!popupVisibility);
  };
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
    temText = e.target.value
  };
  const goTop = () => {
    window?.scrollTo(0,0)
    history.push(history.location.pathname)
  };
  return (
    <PageHeaderWrapper content={' online markdown edit and preview'} className="box">
      <Button type="primary" shape="round" size="small" className="btn" onClick={() => changeModel()}>
        编辑当前文本
      </Button>
      <div className="content">
        <ReactMarkdown source={articleState} />
      </div>
      <div className={`nav-container ${navVisible ? 'show' : 'hide'}`}>
        <div
          className="toggle-btn"
          onClick={() => {
            setNavVisible(!navVisible);
          }}
        >
          {navVisible ? '目录 →' : '← 目录'}
        </div>
        <MarkNav source={articleState} />
      </div>
      <Modal
        title="更新markdown内容"
        open={popupVisibility}
        onOk={()=>{changeModel(1)}}
        onCancel={() => changeModel()}
        okText="确认"
        cancelText="取消"
      >
       <TextArea
          autoSize
          defaultValue={articleState}
          style={{ minHeight: 140, maxHeight:300, marginBottom: 24,overflowY: 'scroll', }}
          onChange={onChange}
          placeholder="请输入"
        />
      </Modal>
      <UpCircleFilled className='goTop' onClick={goTop} />
    </PageHeaderWrapper>
  );
};
export default Admin;
