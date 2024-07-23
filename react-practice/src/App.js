import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import ContactForm from "./practice/ContactForm";
import FoldingDivItem from "./practice/FoldingDivItem";
import FlightBooker from "./practice/FlightBooker";

function Home() {
  return (
    <div>
      <h1 className="home-page-header">Welcome to React Practice</h1>
      <ul className="home-page-ul-container">
        <li>
          <Link to="/contact-form" className="li-title">
            Contact Form Practice
          </Link>
          <p className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/contact-form/v/c2f1019c-a3dc-4ec4-bf4a-5373d8c31357">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul>
              <li>在未知高度中，如何让元素横向&纵向居中，方法一</li>
              <li>input 框 必填</li>
              <li>hook: useState: 提交form后清空input框</li>
              <li>css选择器优先级</li>
            </ul>
          </p>
        </li>

        <li>
          <Link to="/accordion" className="li-title">
            Accordion / Folding Div Practice
          </Link>
          <p className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/accordion">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul>
              <li>
                下拉框, 点击div
                会展开下拉框,元素依次往下排列,允许下拉框icon有动画效果:
                transform: translateY(-2px) rotate(45deg);
              </li>
              <li>psudo-element / classes: :hover, :not(:first-child)</li>
              <li>在未知高度中，如何让元素横向&纵向居中，方法二</li>
            </ul>
          </p>
        </li>

        <li>
          <Link to="./flight-booker" className="li-title">
            Flight Booker Practice
          </Link>
          <p className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/flight-booker">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul>
              <li>
                对于时间/年月日的转换, 调用了 getFullYear(), getMonth() + 1,
                getDate(), 最后需要join('-')来将array中的内容转化成字符串
              </li>
              <li>
                状态管理, 在某一个特定状态下, 只有当这个state存在时才会展示出ui,
                否则不展示 "状态 === "..." &&
                (里面是return的ui内容)"——用花括号包围
              </li>
              <li>调用组件, form, input, select, option</li>
              <li>
                容易忘记在submit function里先 阻止事件的默认行为
                (对于表单提交事件，浏览器的默认行为是发送表单数据到服务器并重新加载页面。)
              </li>
            </ul>
          </p>
        </li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="accordion" element={<FoldingDivItem />} />
        <Route path="/flight-booker" element={<FlightBooker />} />
      </Routes>
    </Router>
  );
}

export default App;
