
import React, { useState, useEffect } from 'react';

export function useWindowDimension() {
  const [dimension, setDimension] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      console.log('***** debounced resize'); // See the cool difference in console
      setDimension([window.innerWidth, window.innerHeight]);
    }, 100); // 100ms
    window.addEventListener('resize', debouncedResizeHandler);
    return () => window.removeEventListener('resize', debouncedResizeHandler);
  }, []); // Note this empty array. this effect should run only on mount and unmount
  return dimension;
}

function debounce(fn: any, ms: number) {
  let timer: any = null;
  return (_: any) => {
    clearTimeout(timer);
    timer = setTimeout((_: any) => {
      timer = null;
      //@ts-ignore
        fn.apply(this, arguments);
    }, ms);
  };
}