import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import ContactForm from "./practice/ContactForm";
import FoldingDivItem from "./practice/FoldingDivItem";
import FlightBooker from "./practice/FlightBooker";
import GenerateTable from "./practice/GenerateTable";
import CssAdjustment from "./practice/CssAdjustment";
import ProgressBar from "./practice/ProgressBar";
import TemperatureConverter from "./practice/TemperatureConverter";
import MortgageCalculator from "./practice/MortgageCalculator";
import TweetUI from "./practice/TweetUI";
import Tabs from "./practice/Tabs";
import AnalogClock from "./practice/AnalogClock";
import DigitalClock from "./practice/DigitalClock";

function Home() {
  return (
    <div>
      <h1 className="home-page-header">Welcome to React Practice</h1>
      <ol className="home-page-ul-container">
        <li>
          <Link to="/contact-form" className="li-title">
            Contact Form Practice
          </Link>
          <div className="important-paragraph">
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
          </div>
        </li>

        <li>
          <Link to="/accordion" className="li-title">
            Accordion / Folding Div Practice
          </Link>
          <div className="important-paragraph">
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
          </div>
        </li>

        <li>
          <Link to="./flight-booker" className="li-title">
            Flight Booker Practice
          </Link>
          <div className="important-paragraph">
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
          </div>
        </li>

        <li>
          <Link to="/generate-table" className="li-title">
            Generate Table Practice{" "}
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/generate-table">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul>
              <li>如何生成一个table，并且css调整table的样式</li>
              <li>useState: 改变rows和columns数值，以及tableData的生成</li>
              <li>
                对 Map 的映射与使用, 包括如何生成这个table
                以及在table上数字的排列
              </li>
              <li>
                易漏点： 对于onChange 需要加上 Number() function
                开转化数字的生成
              </li>
              <li>难点/算法：蛇形遍历2d array</li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="/css-Adjustment" className="li-title">
            CSS Adjustment
          </Link>
          <div className="important-paragraph">
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
                    <code>min-height: 100vh</code>{" "}
                    设置元素的最小高度为视口高度的
                    100%。如果内容不足，它的高度是视口高度；如果内容超过视口高度，元素的高度会根据内容增加。
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="/progress-bar" className="li-title">
            CSS Adjustment
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/progress-bar">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul>
              <li>progress bar component</li>
              <li>
                css: <code>overflow: hidden</code>: 处理parent 与 children
                之间的层级关系
              </li>
            </ul>
            <h4>补充学习: ARIA (Accessible Rich Internet Applications) 属性</h4>
            <ul>
              <li>
                ARIA (Accessible Rich Internet Applications)
                属性是一组定义和应用于 HTML 元素的属性，用于增强 Web
                应用的可访问性。ARIA
                属性通过提供额外的语义信息，使得屏幕阅读器和其他辅助技术能够更好地理解和解释复杂的用户界面组件。
              </li>{" "}
              <li>
                这对于残障用户尤其重要，因为它可以帮助他们更有效地与 Web
                内容交互。
              </li>
              <li>
                <code>role</code>: 定义元素的角色或用途,例如
                button、progressbar、alert 等。它告诉辅助技术这个元素是什么。
              </li>
              <li>
                <code>aria-disabled</code>: [状态属性(State Attributes)]
                表示元素是否被禁用，值为 true 或 false。
              </li>
              <li>
                <code>aria-expanded</code>: [状态属性(State Attributes)]
                表示可折叠的元素是否已展开，值为 true 或 false。
              </li>
              <li>
                <code>aria-hidden</code>: [状态属性(State Attributes)]
                表示元素是否对辅助技术隐藏，值为 true 或 false
              </li>
              <li>
                <code>aria-label</code>: 为元素提供文本标签，用于描述该元素。
              </li>
              <li>
                <code>aria-labelledby</code>: 指定一个或多个元素的
                ID，这些元素的文本内容将作为当前元素的标签。
              </li>
              <li>
                <code>aria-describedby</code>: 指定一个或多个元素的
                ID，这些元素的文本内容将作为当前元素的描述。
              </li>
              <li>
                <code>aria-valuenow</code>: 表示当前值，用于进度条、滑块等元素。
              </li>
              <li>
                <code>aria-valuemin</code>: 表示可选值的最小值。
              </li>
              <li>
                <code>aria-valuemax</code>: 表示可选值的最大值。
              </li>
              <li>
                <code>aria-live</code>: 表示元素的内容会动态更新，值可以是
                off、polite 或 assertive。
                <ul>
                  <li>
                    当 aria-live 设置为 polite
                    时，屏幕阅读器会在当前活动完成之后，礼貌地通知用户内容的变化。也就是说，它不会打断用户正在进行的操作或阅读，而是会等到一个适当的暂停时机再通知用户。这个设置适用于不需要立即打断用户的更新，比如状态消息、进度指示等。
                    <code>aria-live="polite"</code>{" "}
                    适用于以下情况：更新非紧急状态消息; 显示或隐藏提示信息;
                    动态加载的内容，用户不需要立即知道
                  </li>
                  <li>
                    off:
                    表示不希望屏幕阅读器通知用户该区域的内容变化。默认情况下，动态内容区域的
                    aria-live 属性是 off。
                  </li>
                  <li>
                    assertive:
                    表示屏幕阅读器应立即打断当前操作，并尽快通知用户内容变化。这个设置适用于需要立即引起用户注意的重要消息或警告。
                    <code>aria-live="assertive"</code>{" "}
                    适用于以下情况：显示重要的警告或错误消息;
                    需要用户立即关注的紧急更新.
                  </li>
                </ul>
              </li>
              <li>
                <code>aria-controls</code>: 表示当前元素控制的另一个元素的 ID。
              </li>
              <li>
                <code>aria-current</code>:
                表示当前页面中活动的项目，如导航菜单中的当前选项，值可以是
                page、step、location、date、time 或 true。
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="./temperature-converter" className="li-title">
            Temperature Converter
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/temperature-converter">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul>
              <li>如何通过hook 改变两个input的value</li>
              <li>
                细节，对corner
                case的处理。description中提到以下两点，是需要自己去跟面试官clarify的，而不是题目自带的。
                Clarification之后就是如何implement这两个条件了
                <ul>
                  <li>Round to 4 decimal places where necessary.</li>
                  <li>
                    {" "}
                    If a non-numerical string is entered into one input, the
                    other input will be blank.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="./mortgage-calculator" className="li-title">
            Mortgage Calculator
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/mortgage-calculator">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul>
              <li>
                关于 form 表单的 <code>onSubmit</code> 操作，需要先添加{" "}
                <code> e.preventDefault(); </code> 来阻止默认表单提交行为。
              </li>
              <li>
                通过 <code>FormData</code>{" "}
                对象来构建表示表单数据的键值对集合的接口，
                <code>new FormData(e.target)</code> 会创建一个新的{" "}
                <code>FormData</code> 对象，其中包含了表单 <code>onSubmit</code>{" "}
                事件触发时所有的输入字段及其对应的值。然后通过{" "}
                <code>FormData.get(name)</code>方法会根据指定的键（这里是
                "loan-amount"）返回对应的表单字段的值。
              </li>
              <li>
                关于 <code>parseFloat()</code>: 是一个 JavaScript
                内置的函数，用于解析一个字符串参数并返回一个浮点数。它会忽略字符串中的前导和尾随空格，直到它找到第一个不是数字的字符为止。
                例如，如果 data.get("loan-amount") 返回的是字符串
                "100000"，parseFloat("100000") 会将其转换为浮点数
                100000.0。在Mortgage Calculator 这个case中，调用{" "}
                <code>parseFloat()</code>{" "}
                是为了确保从表单获取到的值是数值类型，以便后续进行数学运算。
              </li>
              <li>
                {" "}
                label 中的 "step"属性：定义了用户输入的最小步长为
                0.01。这意味着用户可以输入或通过增加/减少按钮调整的最小单位是
                0.01。它有助于限制用户输入的数值，使其符合预期的精度要求，特别适用于需要高精度的数值输入，如利率、体重等。{" "}
              </li>
              <li>
                aria-live 中的 "polite": 当 aria-live 设置为 polite
                时，屏幕阅读器会在当前活动完成之后，礼貌地通知用户内容的变化。也就是说，它不会打断用户正在进行的操作或阅读，而是会等到一个适当的暂停时机再通知用户。这个设置适用于不需要立即打断用户的更新，比如状态消息、进度指示等。
              </li>
            </ul>
            <h4>补充学习：</h4>
            <ol>
              <li>
                <h5>
                  <code>FormData</code> 接口
                </h5>
                <ul>
                  <li>
                    <code>FormData</code>{" "}
                    是浏览器原生提供的一个接口，用于构建键值对的集合，通常用于表示表单数据。它主要用于将表单数据传输到服务器，但也可以在客户端进行数据处理。
                  </li>
                  <li>
                    <strong>
                      <code>FormData</code>对象的两种方式创建
                    </strong>
                    ：【当使用表单元素创建 FormData
                    对象时，它会自动包含该表单中的所有输入字段及其对应的值。】
                    <ol>
                      <li>
                        <strong>空的 FormData 对象:</strong>{" "}
                        <code>const formData = new FormData();</code>{" "}
                        (也就是在Mortgage Calculator中使用的方法)
                      </li>
                      <li>
                        <strong>从一个表单元素创建 FormData 对象：</strong>{" "}
                        <code>
                          const form = document.querySelector('form'); const
                          formData = new FormData(form);
                        </code>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <strong>常用方法</strong>:
                    <ul>
                      <li>
                        <strong>
                          <code>append(name, value)</code>
                        </strong>
                        ：向 FormData 对象中添加一个新的键值对。
                      </li>
                      <li>
                        <strong>
                          <code> get(name) </code>
                        </strong>
                        : 获取指定键的值。
                      </li>
                      <li>
                        <strong>
                          <code> getAll(name) </code>
                        </strong>
                        : 获取指定键的所有值（当一个键有多个值时）
                      </li>
                      <li>
                        <strong>
                          <code> has(name) </code>
                        </strong>
                        : 检查 FormData 对象中是否包含指定键。
                      </li>
                      <li>
                        <strong>
                          <code> delete(name) </code>
                        </strong>
                        : 删除指定键及其对应的值
                      </li>
                      <li>
                        <strong>
                          <code> set(name, value)</code>
                        </strong>
                        : 设置指定键的值，如果键已经存在，则更新值。
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Use Cases:</strong>
                    <ul>
                      <li>创建表单和提交事件处理函数</li>
                      <li>构建用于发送 AJAX 请求的数据：</li>
                      <li>上传文件</li>
                      <li>动态添加数据</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <code>Intl.NumberFormat</code> 接口
                </h5>
                <ul>
                  <li>
                    {" "}
                    <code>Intl.NumberFormat</code>是 JavaScript 提供的国际化
                    API，用于将数字格式化为人类可读的字符串。它可以根据指定的区域设置、样式和其他选项来格式化数字。
                  </li>
                  <li>
                    在Mortgage Calculator中, 我们使用了{" "}
                    <strong>
                      <code>
                        {" "}
                        const currencyFormatter = new Intl.NumberFormat('en-US',
                        ... );
                      </code>
                    </strong>{" "}
                    用来格式化计算结果，使其以货币的形式显示{" "}
                  </li>
                  <li>
                    参数说明：
                    <ol>
                      <li>
                        <strong>区域设置（locale）</strong>: 'en-US'
                        表示美国的英语区域设置。这决定了数字格式化的语言和区域。例如，使用
                        en-US 区域设置时，数字会按照美国的格式显示。
                      </li>
                      <li>
                        <strong>
                          选项对象（options） 之 <code>style: 'currency'</code>{" "}
                        </strong>
                        : 表示数字将被格式化为货币形式。
                      </li>
                      <li>
                        <strong>
                          选项对象（options） 之 <code>currency: 'USD'</code>{" "}
                        </strong>
                        : 指定货币的种类为美元（USD）。这个选项在 style 设置为
                        'currency' 时是必需的。
                      </li>
                    </ol>
                  </li>
                  <li>
                    最后，我们使用 <code>currencyFormatter.format()</code>{" "}
                    将计算出的金额格式化为美元货币格式。例如，如果
                    monthlyPaymentAmount 是 1234.56，格式化后将显示为 $1,234.56{" "}
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </li>

        <li>
          <Link to="/tweet-ui" className="li-title">
            Tweet UI
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/tweet">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul>
              <li>对于子组件的传参，善用 {} 来传递参数</li>
              <li>
                UI 上对架构的了解，以及CSS， CSS要善用{" "}
                <strong> CSS 自定义属性</strong>, 比如coding中的搭配{" "}
                <code>--spacing: 12px; && var(--spacing);</code>.
                特别是查看这一行代码<code> column-gap: var(--spacing);</code>{" "}
                使得免掉了许多的
                <code>display:flex; flex-direction: column;</code>
              </li>
              <li>
                通过 <code>.toLocaleString()</code>{" "}
                来规范化数字。但是这里需要注意的一点是，我们需要返回的是一个Number类型，而不是一个String类型的数字，所以我们用{" "}
                <code>Number(number).toLocaleString();</code>
                来达到最终效果{" "}
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="/tabs" className="li-title">
            Tabs
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/tabs">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul>
              <li>对于子组件的传参，善用 {} 来传递参数</li>
              <li>
                在传递参数的时候一定要检查 从父组件传进来的参数不是
                undefined的！！！ 一定要处理corner case 避免 NPE。
              </li>
              <li>
                通过 <code>map</code> 来映射传参
              </li>
              <li>对不同状态下的 component 的className定义 - CSS </li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="/analog-clock" className="li-title">
            Analog Clock
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/analog-clock">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul></ul>
            <h4>补充学习：</h4>
            <ol>
              <li>
                CSS属性 之{" "}
                <strong>
                  <code>transform</code>
                </strong>
                <ul>
                  <li>
                    {" "}
                    <code>transform</code>{" "}
                    是一个CSS属性，用于对元素进行2D或3D转换，比如旋转、缩放、平移或倾斜。在这个代码中，transform
                    属性被用来同时进行旋转和缩放。
                  </li>
                  <li>
                    <code>rotate(...deg)</code>:
                    定义了元素的旋转角度。旋转是围绕元素的中心点进行的。例如，rotate(90deg)
                    会使元素顺时针旋转90度。
                  </li>
                  <li>
                    <code>scaleY(...)</code>:
                    定义了元素在垂直方向（Y轴）的缩放比例。scaleY(1)
                    表示保持原始高度，scaleY(0.5)
                    表示高度缩小为原来的一半，scaleY(2)
                    则表示高度增加到原来的两倍。
                  </li>
                  <li>
                    <code>scaleX(...)</code>:
                    定义了元素在水平方向（X轴）的缩放比例。scaleX(1)
                    表示保持原始宽度，scaleX(0.5)
                    表示宽度缩小为原来的一半，scaleX(2)
                    则表示宽度增加到原来的两倍。
                  </li>
                  <li>
                    <strong>
                      综合效果{" "}
                      <code>
                        transform: `rotate(...deg) scaleY(...) scaleX(...)`
                      </code>
                    </strong>
                    :当这些变换组合在一起时，元素会先旋转，然后按指定的比例在垂直和水平方向上缩放。
                  </li>
                </ul>
              </li>
              <li>
                <strong>setInterval() && clearInterval()</strong>:
                <ul>
                  <li>
                    setInterval 是一个原生 JavaScript
                    函数，用于设置一个定时器，每隔指定的时间（以毫秒为单位）执行一次函数.
                    在 Analog
                    Clock中，我们设置了一个定时器，每100毫秒执行一次函数，更新
                    date 状态。
                  </li>
                  <li>
                    useEffect
                    返回的函数会在组件卸载时执行，这里用于清除定时器，防止内存泄漏。当组件卸载时，这个函数会调用{" "}
                    <code>window.clearInterval(timer)</code> 来停止定时器。
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </li>

        <li>
          <Link to="/digital-clock" className="li-title">
            Digital Clock (Easier than Analog Clock, Same Logic and
            Implementation)
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/digital-clock">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul>
              <li>hook: useState && useEffect</li>
              <li>
                useCurrentDate 自定义hook。HINT：原本用 updateCurrentTime
                来自定义这个名字，是有问题的。因为 hook 必须以use 开头命名。{" "}
              </li>
              <li>
                拆分component，不同function
                component负责不同的功能，来提高代码阅读量
              </li>
            </ul>
          </div>
        </li>
      </ol>
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
        <Route path="/progress-bar" element={<ProgressBar />} />
        <Route
          path="/temperature-converter"
          element={<TemperatureConverter />}
        />
        <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
        <Route path="/tweet-ui" element={<TweetUI />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/analog-clock" element={<AnalogClock />} />
        <Route path="/digital-clock" element={<DigitalClock />} />
      </Routes>
    </Router>
  );
}

export default App;
