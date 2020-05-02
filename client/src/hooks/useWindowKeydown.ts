import {useEffect, useState} from "react";

export const useWindowKeydown = () => {
  const [keydown, setKeydown] = useState('')

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent)  => {
      setKeydown(e.key);
    }

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);

  }, []);

  return keydown
}