import React, {useEffect, useState} from 'react';

type TWindowSize = {
  width: number;
  height: number;
}

const getWindowSize = (): TWindowSize => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return {
    width,
    height
  }
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}