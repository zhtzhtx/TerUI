import React from 'react';
import Button from './components/Button/button'
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

function App() {
  return (
    <div className="App">
      <Button btnType="link" >Hellow</Button>
      <Menu defaultIndex={'0'} onSelect={(index) => { alert(index) }} >
        <MenuItem>
          cool link
        </MenuItem>
        <MenuItem>
          cool link2
        </MenuItem>
        <MenuItem>
          cool link3
        </MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>
            dropdown 1
          </MenuItem>
          <MenuItem>
            dropdown 2
          </MenuItem>
          <MenuItem>
            dropdown 3
          </MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
