# TerUI


TerUI 是个人基于过去的项目积累，使用 React Hooks 和 TypeScript ，实现的一款开源组件库，目前项目正在开发
中。每个组件在开发完成后，使用 react-testing-library 进行单元测试，计划之后使用 storybook 进行本地调试和生成文档页面。项目完成后，会发布到 npm 库中。


### 使用

~~~javascript
// 引入组件
import Button from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button btnType="link" disabled>Hellow</Button>
    </div>
  );
}
~~~

### 项目亮点

* 🔥 React Hooks & TypeScript
* ⛑️使用 react-testing-library 完成单元测试
* 📚使用 storybook 本地调试和生成文档页面（开发中）
* 📦使用第三方库扩充组件-(react-fontawesome, react-transition-group)
* 🌹样式（Sass）文件从零开始，掌握大型应用的 CSS 组织方法

