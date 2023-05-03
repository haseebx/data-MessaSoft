// import { MutableRefObject, useEffect, useRef, useState } from 'react';

// export default function useHover<T>(): [MutableRefObject<T>, boolean] {
//   const [value, setValue] = useState<boolean>(false);
//   const ref: any = useRef<T | null>(null);
//   const handleMouseOver = (): void => setValue(true);
//   const handleMouseOut = (): void => setValue(false);
//   useEffect(() => {
//     const node: any = ref.current;
//     if (node) {
//       node.addEventListener('mouseover', handleMouseOver);
//       node.addEventListener('mouseout', handleMouseOut);
//       return () => {
//         node.removeEventListener('mouseover', handleMouseOver);
//         node.removeEventListener('mouseout', handleMouseOut);
//       };
//     }
//   }, [ref.current]);
//   // Recall only if ref changes
//   return [ref, value];
// }
import { useState, useCallback, useRef } from 'react';

// Hook
const useHover = <T extends HTMLElement>(): [(node?: T | null) => void, boolean] => {
  const [value, setValue] = useState(false);

  // Wrap in useCallback so we can use in dependencies below
  const handleMouseOver = useCallback(() => setValue(true), []);
  const handleMouseOut = useCallback(() => setValue(false), []);

  // Keep track of the last node passed to callbackRef
  // so we can remove its event listeners.
  const ref = useRef<T>();

  // Use a callback ref instead of useEffect so that event listeners
  // get changed in the case that the returned ref gets added to
  // a different element later. With useEffect, changes to ref.current
  // wouldn't cause a rerender and thus the effect would run again.
  const callbackRef = useCallback<(node?: null | T) => void>(
    (node) => {
      if (ref.current) {
        ref.current.removeEventListener('mouseover', handleMouseOver);
        ref.current.removeEventListener('mouseout', handleMouseOut);
      }

      ref.current = node || undefined;

      if (ref.current) {
        ref.current.addEventListener('mouseover', handleMouseOver);
        ref.current.addEventListener('mouseout', handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut]
  );

  return [callbackRef, value];
};
export default useHover;
