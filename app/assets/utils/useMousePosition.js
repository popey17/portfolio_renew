import { useState, useEffect } from "react";

const useMousePosition = (targetRef) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = e => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  useEffect(() => {
    const targetElement = targetRef.current;
    if (targetElement) {
      targetElement.addEventListener("mousemove", updateMousePosition);
      return () => targetElement.removeEventListener("mousemove", updateMousePosition);
    }
  }, [targetRef]);

  return mousePosition;
};

export default useMousePosition;