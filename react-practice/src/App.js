import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import ContactForm from "./practice/ContactForm";
import FoldingDivItem from "./practice/FoldingDivItem";
import FlightBooker from "./practice/FlightBooker";
import GenerateTable from "./practice/GenerateTable";
import CssAdjustment from "./practice/CssAdjustment";

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

        <li>
          <Link to="/generate-table" className="li-title">
            Generate Table Practice{" "}
          </Link>
        </li>
        <p className="important-paragraph">
          <a href="https://www.greatfrontend.com/questions/user-interface/generate-table">
            Link
          </a>
          <h3>考点/内容点:</h3>
          <ul>
            <li>如何生成一个table，并且css调整table的样式</li>
            <li>useState: 改变rows和columns数值，以及tableData的生成</li>
            <li>
              对 Map 的映射与使用, 包括如何生成这个table 以及在table上数字的排列
            </li>
            <li>
              易漏点： 对于onChange 需要加上 Number() function 开转化数字的生成
            </li>
            <li>难点/算法：蛇形遍历2d array</li>
          </ul>
        </p>

        <li>
          <Link to="/css-Adjustment" className="li-title">
            CSS Adjustment
          </Link>
        </li>
        <p className="important-paragraph">
          <a href="https://www.greatfrontend.com/questions/user-interface/holy-grail">
            Link
          </a>
          <h3>考点/内容点:</h3>
          <ul>
            <li>css 布局</li>
            <li>对display: flex 的应用</li>
          </ul>
          <h4>补充学习:</h4>
          <ul>
            <li>
              {" "}
              <code>#root</code> 是一个常见的命名约定，用于 React 应用的根 DOM
              元素。在 React 应用中，通常在 HTML 文件中会有一个带有{" "}
              <code>id="root"</code> 的 div 元素, React
              组件树会挂载到这个元素上。
            </li>
            <li>
              <strong>
                <code>min-height: 100vh</code> 和 <code>height: 100vh</code>{" "}
                的区别
              </strong>
              :
              <ul>
                <li>
                  <code>height: 100vh</code> 设置元素的高度为视口高度的
                  100%。无论内容多少，元素的高度都会是视口高度。
                </li>
                <li>
                  {" "}
                  <code>min-height: 100vh</code> 设置元素的最小高度为视口高度的
                  100%。如果内容不足，它的高度是视口高度；如果内容超过视口高度，元素的高度会根据内容增加。
                </li>
              </ul>
            </li>
          </ul>
        </p>
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
        <Route path="/generate-table" element={<GenerateTable />} />
        <Route path="/css-adjustment" element={<CssAdjustment />} />
      </Routes>
    </Router>
  );
}

export default App;
