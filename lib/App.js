import React from 'react';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(Button, { btnType: "link" }, "Hellow"),
        React.createElement(Menu, { defaultIndex: '0', onSelect: function (index) { alert(index); } },
            React.createElement(MenuItem, null, "cool link"),
            React.createElement(MenuItem, null, "cool link2"),
            React.createElement(MenuItem, null, "cool link3"),
            React.createElement(SubMenu, { title: "dropdown" },
                React.createElement(MenuItem, null, "dropdown 1"),
                React.createElement(MenuItem, null, "dropdown 2"),
                React.createElement(MenuItem, null, "dropdown 3")))));
}
export default App;
