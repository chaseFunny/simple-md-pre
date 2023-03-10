// const pdf = require('pdfjs-dist');
// const pdfWorker = require('pdfjs-dist/build/pdf.worker.js?url');
import { useEffect, useRef, useState } from 'react';
const workersrc = require('pdfjs-dist/legacy/build/pdf.worker.entry.js');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');
pdfjsLib.GlobalWorkerOptions.workerSrc = workersrc;
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
// pdf.GlobalWorkerOptions.workerSrc = pdfWorker;
// pdf.GlobalWorkerOptions.workerSrc = pdfWorker;

export const usePDFData = (options: { src: string; scale?: number }) => {
  const previewUrls = useRef<string[]>([]);
  const urls = useRef<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    urls.current = [];
    setLoading(true);
    (async () => {
      const pdfDocument = await pdfjsLib.getDocument(options.src).promise;
      const task = new Array(pdfDocument.numPages).fill(null);
      await Promise.all(
        task.map(async (_, i) => {
          const page = await pdfDocument.getPage(i + 1);
          const viewport = page.getViewport({ scale: options.scale || 2 });
          const canvas = document.createElement('canvas');

          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
          const renderTask = page.render({
            canvasContext: ctx,
            viewport,
          });
          await renderTask.promise;
          urls.current[i] = canvas.toDataURL('image/jpeg', 1);
          previewUrls.current[i] = canvas.toDataURL('image/jpeg', 0.5);
        }),
      );
      setLoading(false);
    })();
  }, [options.src]);

  return {
    loading,
    urls: urls.current,
    previewUrls: previewUrls.current,
  };
};
