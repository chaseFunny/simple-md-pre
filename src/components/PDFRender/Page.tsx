import { useLayoutEffect, useRef } from 'react';
import './index.less';

export const Page = (props: { src: string; io: any; index: number }) => {
  const { io, src, index } = props;
  const ref = useRef<HTMLImageElement | null>(null);
  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    io.observe(ref.current);
    ref.current?.setAttribute('index', String(index));
    return () => io.unobserve(ref.current);
  });
  return <img className="page-img page" src={src} ref={ref} />;
};
