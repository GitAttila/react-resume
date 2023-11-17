import { RefObject, useEffect, useRef, useState } from 'react';

const useScrollIntersection = <T extends Element>(): [
  RefObject<T>,
  (val: boolean) => void,
  val: boolean
] => {
  const ref = useRef<T>(null);
  const [shouldScrollTo, setShouldScrollTo] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (ref.current && shouldScrollTo) {
      ref.current!.scrollIntoView({ behavior: 'smooth' });
      setShouldScrollTo(false);
    }
  }, [shouldScrollTo]);

  useEffect(() => {
    const offset = window.innerHeight / 2;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: `-${offset}px` }
    );

    ref.current && observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  return [ref, setShouldScrollTo, isIntersecting];
};

export default useScrollIntersection;
