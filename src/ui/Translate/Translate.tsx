import React, { useEffect, useRef, useState } from "react";
import s from "./Translate.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Carousel {
  children:React.ReactNode
}
const Translate:React.FC<Carousel> = ({ children }) => {
  const [translate, setTranslate] = useState<number>(0);
  const [isLeftVisible, setIsLeftVisible] = useState<boolean>(false);
  const [isRightVisible, setIsRightVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const TRANSLATE_AMOUNT:number = 300;
  useEffect(() => {
    if (containerRef.current == null) return;
    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;
      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });
    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, [translate]);

  return (
    <section className={s.section_elements} ref={containerRef}>
      <div
        className={s.list}
        style={{ transform: `translateX(-${translate}px` }}
      >
        {children}
      </div>
      <div className={s.leftchevrone}>
        {isLeftVisible && (
          <div className={s.leftchevrone}>
            <button
              className={s.chevrone}
              onClick={() =>
                setTranslate((translate) => {
                  const newTraslate = translate - TRANSLATE_AMOUNT;
                  if (newTraslate <= 0) return 0;
                  return newTraslate;
                })
              }
            >
              <ChevronLeft />
            </button>
          </div>
        )}
      </div>
      {isRightVisible && (
        <div className={s.rightchevrone}>
          <button
            className={s.chevrone}
            onClick={() => {
              setTranslate((translate) => {
                if (containerRef.current == null) {
                  return translate;
                }
                const newTranslate = translate + TRANSLATE_AMOUNT;
                const edge = containerRef.current.scrollWidth;
                const width = containerRef.current.clientWidth;
                if (newTranslate + width >= edge) {
                  return edge - width;
                }
                return newTranslate;
              });
            }}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Translate;
