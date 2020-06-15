import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button autoFocus>Hellow</Button>
        <Button disabled>Hellow</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hellow</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hellow</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">Baidu Link</Button>
        <Button btnType={ButtonType.Link} disabled href="http://www.baidu.com">Baidu Link</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
