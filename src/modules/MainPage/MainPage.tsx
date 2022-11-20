import React, { useEffect, useRef, useState } from 'react';

import './MainPage.style.scss';

export interface MainPageProps {
  children?: JSX.Element;
}

export const MainPage: React.FC<MainPageProps> = () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef(0);
  ref.current = 123123123;

  // useEffect(() => {
  //   // eslint-disable-next-line no-console
  //   console.log('JOipP', counter);
  // }, [counter]);

  return (
    <>
      {/*<div onClick={() => setCounter(counter + 1)}>kek {counter}</div>*/}

      <div onClick={() => (ref.current = ref.current + 1)}>kek {ref.current}</div>
    </>
  );
};
