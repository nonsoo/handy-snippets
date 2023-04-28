import { useEffect } from "react";
const useEventListener = (
  event: string,
  callback: <T>(...args: T[]) => unknown
) => {
  useEffect(() => {
    const listener = () => {
      callback();
    };
    document.addEventListener(event, listener);
    return () => {
      document.removeEventListener(event, listener);
    };
  }, []);
};

export default useEventListener;
