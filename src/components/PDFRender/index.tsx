import React, { useRef, useState } from 'react';
import classnames from 'classnames';
import { usePDFData } from './usePdf';
import { Page } from './Page';
import './index.less';
export const PDFRender: React.FC<{ src: string }> = (props) => {
  const { loading, urls, previewUrls } = usePDFData({
    src: props.src,
  });
  const [currentPage, setCurrentPage] = useState(0);
  const io = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((item) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          item.intersectionRatio >= 0.5 &&
            setCurrentPage(Number(item.target.getAttribute('index')));
        });
      },
      {
        threshold: [0.5],
      },
    ),
  );
  const goPage = (i: number) => {
    setCurrentPage(i);
    document.querySelectorAll('.page')[i]!.scrollIntoView({ behavior: 'smooth' });
  };
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="box">
      <div className="sidebar">
        {previewUrls.map((item, i) => (
          <React.Fragment key={item}>
            <img
              src={item}
              className={classnames({ active: currentPage === i, image: true })}
              onClick={() => goPage(i)}
            />
            <div className="page-number">{i + 1}</div>
          </React.Fragment>
        ))}
      </div>
      <div className="preview">
        {urls.map((item, i) => (
          <Page index={i} io={io.current} src={item} key={item} />
        ))}
      </div>
    </div>
  );
};
