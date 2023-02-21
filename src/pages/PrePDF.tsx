import { PageHeaderWrapper } from '@ant-design/pro-components';
import React from 'react';
import { PDFRender } from '@/components/PDFRender';
const pdfFilePath = '/giscafer-resume.pdf';
const Admin: React.FC = () => {
  return (
    <PageHeaderWrapper content={' online markdown edit and preview'} className="box">
      <PDFRender src={pdfFilePath} />
    </PageHeaderWrapper>
  );
};
export default Admin;
