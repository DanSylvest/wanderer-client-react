import { Button } from 'antd';
import React from 'react';

import './MainPage.style.scss';

export interface MainPageProps {
  children?: JSX.Element;
}

export const MainPage: React.FC<MainPageProps> = () => {
  return (
    <>
      <Button type='primary'>Primary</Button>
      <Button>Default</Button>
      <Button type='dashed'>Dashed</Button>
      {/*<Button type='danger'>Danger</Button>*/}
      <Button type='link'>Link</Button>{' '}
    </>
  );
};
