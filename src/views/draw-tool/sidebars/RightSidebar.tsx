import React, {FC} from 'react';
import {BackdropColorPicker, ItemEditor, Sidebar} from './components';


export const RightSidebar: FC = () => {
  return (
    <Sidebar>
      <BackdropColorPicker />

      <ItemEditor />

    </Sidebar>
  )
}
