import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import ContactForm from "./practice/ContactForm";
import FoldingDivItem from "./practice/FoldingDivItem";
import FlightBooker from "./practice/FlightBooker";
import InAndDeCounter from "./practice/InAndDeCounter";
import GenerateTable from "./practice/GenerateTable";
import CssAdjustment from "./practice/CssAdjustment";
import ProgressBar from "./practice/ProgressBar";
import TemperatureConverter from "./practice/TemperatureConverter";
import MortgageCalculator from "./practice/MortgageCalculator";
import TweetUI from "./practice/TweetUI";
import Tabs from "./practice/Tabs";
import AnalogClock from "./practice/AnalogClock";
import DigitalClock from "./practice/DigitalClock";
import GridLight from "./practice/GridLight";
import LikeButton from "./practice/LikeButton";
import ProgressBarII from "./practice/ProgressBarII";
import StringConvertorParagraph from "./practice/StringConvertorParagraph";
import StarRating from "./practice/StarRating";
import ToDoList from "./practice/ToDoList";
import TicTacToe from "./practice/TicTacToe";
import FetchJobBoard from "./practice/FetchJobBoard";
import Stopwatch from "./practice/Stopwatch";
import TransferList from "./practice/TransferList";
import UndoableCounter from "./practice/UndoableCounter";
import WhackAMole from "./practice/WhackAMole";
import MemoryGame from "./practice/MemoryGame";
import TrafficLight from "./practice/TrafficLight";

function Home() {
  const sectionRef = useRef(null);

  const handleClickToLink = (targetId) => (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-page-container">
      <h1 className="home-page-header">Welcome to React Practice</h1>
      <h2>Review Knowledge</h2>
      <ol>
        <li>
          <strong>
            <code>useEffect() HOOK</code>:
          </strong>
          <ul>
            <li>用于在函数组件中处理副作用。</li>
            <li>
              <strong>基本用法：</strong>{" "}
              <code>useEffect(() 指向{"副作用代码"}, [依赖项]);</code>{" "}
              //副作用代码: 在依赖项变化时或组件首次渲染后执行的代码。
            </li>
            <li>
              什么时候需要return？ useEffect
              中的返回函数用于清理副作用。如果副作用需要清理（例如订阅、计时器），需要返回一个清理函数。如果副作用不需要清理（例如简单的数据获取），可以省略返回函数。
            </li>
          </ul>
        </li>

        <li>
          <strong>
            <code>useRef() HOOK:</code>
          </strong>{" "}
          <ul>
            <li>可以用来存储任何在渲染周期中不需要重新渲染的可变值。</li>
            <li>
              useRef 的特点和用途:{" "}
              <ul>
                <li>
                  持久化存储：在组件的生命周期中，useRef
                  的返回对象会保持不变。这意味着你可以用它来存储跨渲染周期不会改变的变量。
                </li>
                <li>
                  不触发重新渲染：useRef 的 current
                  属性的改变不会触发组件的重新渲染。与 useState 不同，改变
                  useRef 的值不会导致组件重新渲染。
                </li>
                <li>
                  访问 DOM 元素：useRef 最常见的用途之一是访问 DOM 元素，类似于
                  class 组件中的 React.createRef()。
                </li>
                <li>
                  存储任何可变值：useRef
                  可以用来存储任何类型的数据，包括对象、数组、数字、字符串等。这使得它非常灵活。
                </li>
              </ul>
            </li>
            <li>
              <strong>
                <code>current</code>属性：
              </strong>{" "}
              current
              是唯一且核心的属性：用于存储需要在渲染之间共享的可变数据。其应用场景广泛：适用于
              DOM 元素引用、状态缓存、保存前次状态等场景。
            </li>
          </ul>
        </li>

        <li>
          {" "}
          <strong>
            <code>setTimeout</code> && <code>setInterval</code>
          </strong>
          :{" "}
          <ul>
            <li>
              <code>setTimeout</code>
              ：在指定的延迟（以毫秒为单位）后执行一次代码，常用于延迟提示、递归定时任务。
              语法：{" "}
              <code>const timerId = setTimeout(function, delay, ...args);</code>
              <ul>
                <li>function：要执行的函数。</li>
                <li>delay：延迟时间，以毫秒为单位。</li>
                <li>...args：传递给函数的参数（可选）。</li>
                <li>timerId：返回的定时器 ID，可用于取消定时器。</li>
              </ul>
              利用 <code>clearTimeout(timerId);</code> 来清除定时器。
            </li>

            <br />
            <li>
              <code>setInterval</code>
              ：每隔指定的时间间隔（以毫秒为单位）重复执行代码，常用于定时数据获取、动画更新。
              语法：
              <code>
                const intervalId = setInterval(function, delay, ...args);
              </code>{" "}
              <ul>
                <li>function：要执行的函数。 </li>
                <li>delay：时间间隔，以毫秒为单位。 </li>
                <li>...args：传递给函数的参数（可选）。 </li>
                <li>intervalId：返回的定时器 ID，可用于取消定时器。</li>
              </ul>
              利用 <code>clearInterval(intervalId);</code> 来清除定时器。
            </li>
          </ul>
        </li>

        <li>
          <strong>
            <code>form</code>元素 以及常见表单组件{" "}
            <code>input, textarea, select & option</code> 的属性
          </strong>{" "}
          <ul>
            <li>
              {" "}
              form{" "}
              <ul>
                <li>name: 表单的名称。</li>
                <li>action: 表单提交时的目标 URL</li>
                <li>method: 表单提交的 HTTP 方法（GET 或 POST）。</li>
                <li>autocomplete: 表单的自动完成行为（on 或 off）。</li>
                <li>
                  target: 表单提交的目标（例如 _blank、_self、_parent、_top
                  或帧名）。{" "}
                  <ul>
                    <li>
                      _self（默认值）：在当前窗口或框架中加载结果页面。可以省略不写。
                    </li>
                    <li>_blank：在新窗口或新标签页中加载结果页面。</li>
                    <li>
                      _parent：在父框架中加载结果页面。如果没有父框架，则行为与
                      _self 相同。
                    </li>
                    <li>
                      _top：在整个窗口中加载结果页面，替换所有框架。如果没有使用框架，则行为与
                      _self 相同。
                    </li>
                    <li>
                      framename：在指定名称的框架中加载结果页面。需要与 已经用
                      "name=framename"定义了的元素(e.g. 比如说 iframe)
                      一起使用。
                    </li>
                  </ul>
                </li>
                <li>
                  rel: 提交表单后页面之间的关系（例如 noopener 或
                  noreferrer，主要用于 target="_blank" 时）。
                </li>
                <li>
                  enctype: 表单数据的编码类型（用于 POST 方法），常见的值有
                  application/x-www-form-urlencoded、multipart/form-data 和
                  text/plain。
                </li>
                <li>novalidate: 表单提交时不进行验证。</li>
              </ul>
            </li>

            <br />
            <li>
              <strong>下面是 form元素中常见的其他子组件</strong>
            </li>
            <li>
              {" "}
              input元素： <strong>!!input是单扩，没有闭合扩</strong>
              <ul>
                <li>
                  type: 输入字段的类型（例如 text、password、email、number、date
                  等）。
                </li>
                <li>name: 输入字段的名称，表单提交时会包含这个名称。</li>
                <li>value: 输入字段的初始值。</li>
                <li>
                  disabled: 禁用输入字段。 e.g. <code>input disabled</code>
                </li>
                <li>placeholder: 输入字段的占位符文本。</li>
                <li>required: 使输入字段成为必填项。</li>
                <li>
                  readonly: 使输入字段只读。 e.g. <code>input readonly</code>
                </li>
                <li>maxlength: 输入字段允许的最大字符数。</li>
                <li>minlength: 输入字段允许的最小字符数。</li>
                <li>
                  pattern: 用于验证输入的正则表达式模式。多用于"type:
                  password"部分。 e.g. <code>input pattern="[A-Za-z]{3}"</code>
                </li>
                <li>
                  min 和 max: 输入字段允许的最小值和最大值（通常用于 number 和
                  date 类型）。e.g.{" "}
                  <code>input type="number" min="1" max="10"</code>
                </li>
                <li>
                  step: 输入字段的步进值（通常用于 number 和 range 类型）。e.g.{" "}
                  <code>input type="number" step="1"</code>
                </li>
                <li>autocomplete: 控制自动完成行为（on 或 off）。</li>
                <li>
                  autofocus: 页面加载时自动聚焦到输入字段。e.g.{" "}
                  <code>input autofocus</code>
                </li>
                <li>list: 关联的 "datalist" 元素的 ID，用于显示建议选项。</li>
                <li>
                  multiple: 允许选择多个值（通常用于 file 和 email 类型）。
                </li>
                <li>accept: 规定文件输入的接受类型（通常用于 file 类型）。</li>
                <li>
                  size: 输入字段的可见字符数（不常用）。 e.g.{" "}
                  <code>input type="file" multiple</code>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              textarea元素： <strong>!!textarea有闭合扩</strong>{" "}
              <ul>
                <li>name: 文本区域的名称，表单提交时会包含这个名称。</li>
                <li>rows: 文本区域的行数。</li>
                <li>cols: 文本区域的列数。</li>
                <li>placeholder: 文本区域的占位符文本。</li>
                <li>maxlength: 文本区域允许的最大字符数。</li>
                <li>minlength: 文本区域允许的最小字符数。</li>
                <li>required: 使文本区域成为必填项。</li>
                <li>readonly: 使文本区域只读。</li>
                <li>disabled: 禁用文本区域。</li>
                <li>autofocus: 页面加载时自动聚焦到文本区域。</li>
                <li>wrap: 控制文本如何换行（soft、hard、off）。</li>
                <li>spellcheck: 启用或禁用拼写检查（true 或 false）。</li>
                <li>autocomplete: 控制自动完成行为（on 或 off）。</li>
              </ul>
            </li>

            <li>
              select & option元素:
              "select"用于定义一个下拉菜单。它必须包含一个或多个 "option"
              子元素。{" "}
              <ul>
                <li>
                  select属性 1: name：定义下拉列表的名称，用于提交表单时的键。
                </li>
                <li>select属性 2: multiple：允许用户选择多个选项。</li>
                <li>select属性 3: size：定义下拉列表显示的选项数。</li>
                <li>
                  比如说 允许多选的下拉列表，只有三个选择：{" "}
                  <code>
                    |select name="fruits" multiple size="3"| |option
                    value="apple"|Apple|/option| 等另外两个option |/select|
                  </code>
                </li>
                <br />
                <li>"option"用于定义下拉列表中的一个选项</li>
                <li>option属性 1: value：提交表单时发送到服务器的选项值。</li>
                <li>
                  option属性 2: selected：如果存在，则该选项是默认选择的。
                </li>
                <li>option属性 3: disabled：禁用选项，使其无法被选择。</li>
                <br />
                <li>
                  此外，还可以通过 “optgroup” 对选项进行分组，提高用户体验。
                </li>
                <li>
                  e.g.{" "}
                  <code>
                    {" "}
                    |select name="vehicle"|_|optgroup label="Cars"|_|option
                    value="volvo"|Volvo|/option|,|option
                    value="saab"|Saab|/option|_|/optgroup|_|/select|
                  </code>
                </li>
              </ul>
            </li>

            <li>
              button元素：
              用于创建可点击的按钮，可以是提交按钮、重置按钮或普通按钮。{" "}
              <ul>
                button属性之 "type":{" "}
                <li>type="button" (默认值)：普通按钮，不会提交表单。</li>
                <li>
                  type="submit": 支持提交表单功能。 需要连接API来实现提交功能。
                </li>
                <li>
                  type="reset":
                  支持重置表单功能。需要考虑到所有useState变量来重置成 default
                  value 来实现重置功能。{" "}
                </li>
              </ul>
            </li>

            <li>
              label元素：
              <ul>
                <li>
                  用于创建可点击的按钮，可以是提交按钮、重置按钮或普通按钮。
                </li>
                <li>
                  使用 "label"
                  可以提高表单的可访问性，使得表单更加友好，尤其对于使用屏幕阅读器的用户。
                </li>
                <li>
                  "label"
                  元素通常与表单控件（如"input"、"textarea"、"select"等）结合使用，以提供相关说明或提示。它可以通过"for属性"与表单控件进行关联。
                </li>
                <li>
                  <strong>通过 for 属性关联:</strong>{" "}
                  "for属性值"应与目标表单控件的"id属性值"相匹配。这样，当用户点击"label"时，浏览器会将焦点移动到关联的表单控件上。!!【确保每个表单控件的id在页面中是唯一的，以避免与其他控件冲突。】{" "}
                </li>
                <li>
                  <strong>不使用 for 属性的嵌套方式:</strong>
                  如果"label"直接包含表单控件，可以省略for属性。 e.g.{" "}
                  <code>
                    |label| Username: |input type="text" name="username" /|
                    |/label|
                  </code>{" "}
                </li>
              </ul>
            </li>

            <li>
              fieldset & legend元素: "fieldset"
              用于对表单内的元素进行分组，"legend" 用于为分组提供标题
            </li>

            <li>
              datalist元素: 与 "input"结合使用，为输入框提供自动完成功能。
            </li>

            <li>
              {" "}
              ouput元素: 用于显示计算结果或动态内容。 e.g.{" "}
              <code>|output name="result" for="a b"|0|/output|</code>
            </li>

            <li>
              {" "}
              progress & meter 元素: "progress"用于显示任务的进度。
              "meter"用于显示一个给定范围内的数值。
            </li>

            <li> optgroup元素: 用于在"select"元素中对选项进行分组。</li>
          </ul>
        </li>

        <li>
          <strong>
            CSS 之 <code>display: inline-block</code>
          </strong>
          :{" "}
          <ul>
            <li>
              <strong>特点1: 行内排列</strong>
              ：元素不会独占一行，可以与其他行内或行内块级元素并排显示。
            </li>
            <li>
              <strong>特点2: 块级特性</strong>
              ：可以设置宽度、高度、内边距、边框和外边距。
            </li>
            <li>
              <strong>使用场景1: 对齐元素</strong>:
              在同一行中对齐多个元素，并且希望能够控制这些元素的宽高和内外边距。
            </li>
            <li>
              <strong>使用场景2: 按钮或链接</strong>:
              需要多个按钮或链接并排显示，并且希望能够设置它们的宽度和高度。
            </li>
            <li>
              <strong>使用场景3: 表单元素(Contact Form Case 之 label处)</strong>
              :
              在表单布局中，通常需要对齐标签和输入框，并且希望能够控制标签和输入框的宽高。In
              this case, 通过设置 label 的固定宽度，可以保证所有 label
              的对齐更加整齐和一致，从而改善表单的布局和可读性。
            </li>
            <li>
              <strong>使用场景4: 导航栏</strong>:
              在导航栏中对齐多个导航链接，并希望能够控制每个链接的宽高和内外边距。
            </li>
          </ul>
        </li>

        <li>
          关于<strong>时间</strong>的内容：{" "}
          <strong>
            <code>Date</code>对象
          </strong>{" "}
          <ul>
            <li>
              关于时间的cases：{" "}
              <a
                href="#digital-clock-link"
                onClick={handleClickToLink("digital-clock-link")}
              >
                Digital Clock
              </a>{" "}
              ,{" "}
              <a
                href="#analog-clock-link"
                onClick={handleClickToLink("analog-clock-link")}
              >
                Analog Clock
              </a>
              ,{" "}
              <a
                href="#flight-booker-link"
                onClick={handleClickToLink("flight-booker-link")}
              >
                Flight Booker
              </a>
              ,
              <a
                href="#stopwatch-link"
                onClick={handleClickToLink("stopwatch-link")}
              >
                Stopwatch
              </a>
              。 看具体例子来学习更多关于时间的知识。
            </li>
            <li>
              JavaScript 的 Date
              对象是一个内置对象，用于处理日期和时间。它提供了丰富的方法来操作和格式化日期和时间。
            </li>
            <li>
              <strong>创建 Date 对象</strong>:{" "}
              <ol>
                <li>
                  当前日期和时间: <code>const now = now Date();</code>
                </li>
                <li>
                  指定日期和时间（月份从0开始，0表示1月）:{" "}
                  <code>
                    const specificDate = new Date(2024, 6, 29, 10, 30, 0); //
                    2024年7月29日 10:30:00
                  </code>
                </li>
                <li>
                  从时间戳（1970年1月1日 00:00:00 UTC之后的毫秒数）创建:{" "}
                  <code>const fromTimestamp = new Date(1627545600000);</code>
                </li>
                <li>
                  从字符串创建:{" "}
                  <code>
                    const fromString = new Date('2024-07-29T10:30:00');
                  </code>
                </li>
              </ol>
            </li>
            <li>
              <strong>获取日期和时间的方法:</strong>{" "}
              <ol>
                <li>
                  定义"时间"： <code>const nowTime = new Date();</code>
                </li>
                <li>
                  获取完整的年份:{" "}
                  <code>const year = nowTime.getFullYear(); // 2024</code>
                </li>
                <li>
                  获取月份（0-11）:{" "}
                  <code>const month = nowTime.getMonth(); // 6（表示7月）</code>
                </li>
                <li>
                  获取月中的第几天（1-31）:{" "}
                  <code>const day = nowTime.getDate(); // 29</code>
                </li>
                <li>
                  获取星期几（0-6，0表示星期天）:{" "}
                  <code>
                    const weekday = nowTime.getDay(); // 1（表示星期一）
                  </code>
                </li>
                <li>
                  获取小时（0-23）:{" "}
                  <code>const hours = nowTime.getHours(); // 10</code>
                </li>
                <li>
                  获取分钟（0-59）:{" "}
                  <code>const minutes = nowTime.getMinutes(); // 30</code>
                </li>
                <li>
                  获取秒（0-59）:{" "}
                  <code>const seconds = nowTime.getSeconds(); // 0</code>
                </li>
                <li>
                  获取毫秒（0-999）:{" "}
                  <code>
                    const milliseconds = nowTime.getMilliseconds(); // 0
                  </code>
                </li>
                <li>
                  获取从1970年1月1日 00:00:00 UTC起的毫秒数:{" "}
                  <code>
                    const timestamp = nowTime.getTime(); // 1627545600000
                  </code>
                </li>
              </ol>
            </li>
            <li>
              设置日期和时间的方法: 将上面的API中的<code>get</code>改成
              <code>set</code>即可，比如说,{" "}
              <code>nowTime.setFullYear(2025);</code> &&{" "}
              <code>nowTime.setMonth(11); // 12月</code>
            </li>
            <li>
              <strong>格式化日期和时间</strong>:
              (继续沿用前面已经定义了的nowTime)
              <ol>
                <li>
                  使用本地格式化日期：
                  <code>
                    const localeDate = nowTime.toLocaleDateString(); // 例如
                    "7/29/2024"
                  </code>
                </li>
                <li>
                  使用本地格式化时间
                  <code>
                    const localeTime = nowTime.toLocaleTimeString(); // 例如
                    "10:30:00 AM"
                  </code>
                </li>
                <li>
                  使用指定语言和选项格式化日期
                  <code>
                    const formattedDate = nowTime.toLocaleDateString('en-US',
                    花括号_year 冒号 单引号numeric单引号, month 冒号
                    单引号long单引号, day 冒号 单引号numeric单引号 _花括号); //
                    例如 "July 29, 2024"
                  </code>
                </li>
                <li>
                  使用指定语言和选项格式化时间:{" "}
                  <code>
                    const formattedTime = nowTime.toLocaleTimeString('en-US',
                    花括号_ hour 冒号 单引号2-digit单引号, minute 冒号
                    单引号2-digit单引号, second 冒号 单引号2-digit单引号
                    _花括号); // 例如 "10:30:00 AM"
                  </code>
                </li>
              </ol>
            </li>
            <li>
              <strong>Date 对象还提供了一些方法来处理 UTC 时间: </strong> :
              (继续沿用前面已经定义了的nowTime)
              <ol>
                <li>
                  获取 UTC 年份:{" "}
                  <code>const utcYear = nowTime.getUTCFullYear(); // 2024</code>
                </li>
                <li>
                  获取 UTC 月份（0-11:{" "}
                  <code>
                    const utcMonth = nowTime.getUTCMonth(); // 6（表示7月）
                  </code>
                </li>
                <li>
                  获取 UTC 月中的第几天（1-31）:{" "}
                  <code>const utcDay = nowTime.getUTCDate(); // 29</code>
                </li>
                <li>
                  获取 UTC 小时（0-23）:{" "}
                  <code>const utcHours = nowTime.getUTCHours(); // 10</code>
                </li>
                <li>
                  获取 UTC 分钟（0-59）:{" "}
                  <code>const utcMinutes = nowTime.getUTCMinutes(); // 30</code>
                </li>
                <li>
                  获取 UTC 秒（0-59）:{" "}
                  <code>const utcSeconds = nowTime.getUTCSeconds(); // 0</code>
                </li>
                <li>
                  获取 UTC 毫秒（0-999）:{" "}
                  <code>
                    const utcMilliseconds = nowTime.getUTCMilliseconds(); // 0
                  </code>
                </li>
              </ol>
            </li>
            <li>
              <strong>其他有用的方法:</strong> (继续沿用前面已经定义了的nowTime)
              <ol>
                <li>
                  将日期转换为 ISO 8601 格式的字符串:
                  <code>
                    const isoString = nowTime.toISOString(); //
                    "2024-07-29T10:30:00.000Z"
                  </code>
                </li>
                <li>
                  将日期转换为人类可读的日期字符串。:
                  <code>
                    const dateString = nowTime.toDateString(); // "Mon Jul 29
                    2024"
                  </code>
                </li>
                <li>
                  将时间转换为人类可读的时间字符串。:
                  <code>
                    const timeString = nowTime.toTimeString(); // "10:30:00
                    GMT+0000 (UTC)"
                  </code>
                </li>
                <li>
                  将日期转换为 UTC 格式的字符串。:
                  <code>
                    const utcString = nowTime.toUTCString(); // "Mon, 29 Jul
                    2024 10:30:00 GMT"
                  </code>
                </li>
                <li>
                  将日期转换为 JSON 格式的字符串。:
                  <code>
                    const jsonString = nowTime.toJSON(); //
                    "2024-07-29T10:30:00.000Z"
                  </code>
                </li>
              </ol>
            </li>
            <li>
              结合<code>Math.floor()</code>向下取整来辅助。
            </li>
            <li>
              利用helper function 来format 时间使得时间如果是小于10的话展示出
              09, 06 等字样: <code>formatTime()</code>
            </li>
            <li>
              利用 <code>time</code> 元素来表达时间
            </li>
          </ul>
        </li>

        <li>
          <strong>time 元素</strong>{" "}
          <ul>
            <li>
              "time" 是 HTML5
              引入的一个元素，用于表示特定的时间或日期，或者是一个与时间相关的文本。使用
              "time"
              元素可以使时间和日期信息对用户和机器（如搜索引擎和脚本）更加明确和易于理解。
            </li>
            <li>
              time元素的属性: <code>datetime</code>
              ：这是一个可选属性，用于指定一个合法的日期或时间字符串。这个属性使时间数据可以被机器准确解析，即使内容中显示的时间格式可能因地域或用户偏好不同而变化。e.g.{" "}
              <ul>
                <li>
                  日期：
                  <code>
                    ｜time datetime="2024-07-29"｜ July 29, 2024 ｜/time｜
                  </code>
                </li>
                <li>
                  时间：{" "}
                  <code> ｜time datetime="10:30"｜ 10:30 AM ｜/time｜ </code>
                </li>
                <li>
                  日期和时间：
                  <code>
                    {" "}
                    ｜time datetime="2024-07-29T10:30:00"｜ July 29, 2024, at
                    10:30 AM ｜/time｜{" "}
                  </code>
                </li>
                <li>
                  时间区间：
                  <code> ｜time datetime="P2D"｜ 2 days ｜/time｜ </code>
                </li>
              </ul>
            </li>
            <li>
              <strong>优点</strong>{" "}
              <ol>
                <li>可访问性：为视障用户提供明确的时间信息。</li>
                <li>
                  SEO
                  友好：搜索引擎可以更好地理解页面内容，提高网页的搜索引擎优化（SEO）
                </li>
                <li>数据处理：脚本可以更容易地提取和处理时间和日期信息。</li>
              </ol>
            </li>
          </ul>
        </li>

        <li>
          <strong>
            <code>toLocaleString()</code>
          </strong>{" "}
          <ul>
            <li>
              是 JavaScript 中的一个内置方法，用于将 Number、Date、BigInt
              等对象转换为一个本地化的字符串表示形式。它根据用户的语言环境和指定的选项格式化输出，使得数值和日期能够符合不同地区的显示习惯。
            </li>
            <li>
              参数1—locales：一个或多个表示语言环境的字符串（可选）。如
              'en-US'、'de-DE'、'fr-FR' 等。
            </li>
            <li>
              参数2—options：一个对象，包含以下属性，用于定义格式化选项（可选）。
            </li>
            <li>
              常用选项:{" "}
              <ul>
                <li>
                  style：用于指定格式类型，适用于 Number 对象。可以是：
                  <ul>
                    <li>'decimal'：数字格式（默认）</li>{" "}
                    <li>'currency'：货币格式</li> <li>'percent'：百分比格式</li>{" "}
                    <li>'unit'：单位格式</li>
                  </ul>
                </li>
                <li>
                  currency：指定货币的 ISO 代码（如 'USD'、'EUR'、'JPY'）。
                </li>
                <li>
                  currencyDisplay：定义货币符号如何显示。{" "}
                  <ul>
                    <li>'symbol'：显示货币符号（如 $）</li>
                    <li>'code'：显示货币代码（如 USD）</li>
                    <li>'name'：显示货币名称（如 dollar）</li>
                  </ul>
                </li>

                <li>
                  minimumFractionDigits 和
                  maximumFractionDigits：指定小数位数的最小和最大值。
                </li>
                <li>minimumIntegerDigits：整数部分的最小位数。</li>
                <li>useGrouping：是否使用分组分隔符（如千位分隔符）。</li>
                <li>hour12：用于 Date 对象，指定是否使用 12 小时制。</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>table元素</strong>{" "}
          <ul>
            <li>
              属性：{" "}
              <ul>
                <li>
                  border：指定表格边框的宽度。例如， |table border="1"|
                  将创建一个带有边框的表格。
                </li>
                <li>cellpadding：设置单元格内容与边框之间的距离。</li>
                <li>cellspacing：设置单元格之间的距离。</li>
                <li>
                  width 和 height：定义表格的宽度和高度（通常通过 CSS 控制）
                </li>
              </ul>
            </li>
            <li>
              table元素下， <code>thead</code>表头， <code>tbody</code>
              表格主体， <code>tfoot</code>表尾。
              逻辑分离以便于管理和样式控制。在每个component下都由{" "}
              <code>tr</code>元素包围。详情看下。
            </li>
            <li>
              <strong>
                <code>tbody</code>元素
              </strong>
              ：用于定义表格的主体部分，包含数据行。在简单表格中，|tbody|
              可以省略，但建议使用以提高可读性。
            </li>
            <li>
              <strong>
                <code>tr</code>元素
              </strong>
              ：定义一个表格行（Table
              Row），包含一组相关的单元格。tr是行内容器，作为 th(表头单元) 和
              td(表格数据单元) 的容器。可以多次使用 tr 来定义多个行。 e.g.
              在tbody中可以有很多个tr，每个tr中又包裹着多个 td元素
            </li>
            <li>
              <strong>
                <code>td</code>元素
              </strong>
              ：定义一个表格的单元格，用于显示数据。可以包含文本、链接、图像等各种内容。可以选择
              colspan 和 rowspan【可选属性】，用于跨列或跨行合并单元格。{" "}
              <ul>
                <li>colspan：指定单元格跨越的列数。</li>
                <li>rowspan：指定单元格跨越的行数。</li>
              </ul>
            </li>
            <li>
              <strong>
                <code>th</code>元素
              </strong>
              ： 代表表头单元格（Table Header）它与 "td"
              类似，但用于定义表格的标题行或列，可以提升数据的可读性和语义化。"th"
              通常用在表格的 "thead" 部分，但也可以在 "tbody" 和 "tfoot"
              中使用以提供不同部分的标题信息。"th"
              默认以粗体显示其内容，并水平居中。
            </li>
          </ul>
        </li>

        <li>
          <strong>
            <code>label</code>元素
          </strong>{" "}
          <ul>
            <li>
              用于定义表单控件的标注文本，并将其与表单控件关联，以便用户在点击标签时能自动聚焦到相应的输入控件。
            </li>
            <li>
              label标签中没有value属性，通过 for 属性（或在 React 中使用
              htmlFor）与表单控件关联。
            </li>
            <li>
              下面是 "for属性" 和 "htmlFor属性" 的区别和用法：
              <table className="label-element-table">
                <thead>
                  <tr>
                    <th>特性</th>
                    <th>
                      HTML 中的 <code>for</code>
                    </th>
                    <th>
                      React 中的 <code>htmlFor</code>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>作用</td>
                    <td colSpan={2}>绑定 "label" 和表单控件</td>
                  </tr>
                  <tr>
                    <td>属性名称</td>
                    <td>
                      <code>for</code>
                    </td>
                    <td>
                      <code>htmlFor</code>
                    </td>
                  </tr>
                  <tr>
                    <td>原因</td>
                    <td>标准 HTML 属性</td>
                    <td>避免与 JavaScript 保留字冲突</td>
                  </tr>
                  <tr>
                    <td>使用场景</td>
                    <td>普通 HTML 文档</td>
                    <td>React 应用</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              其他全局属性：{" "}
              <ul>
                <li>id：定义元素的唯一标识符。</li>
                <li>class：用于指定一个或多个类名，通常用于 CSS 样式。</li>
                <li>style：直接定义内联样式。</li>
                <li>
                  title：为元素提供额外的信息，当用户将鼠标悬停在元素上时会显示为提示。
                </li>
                <li>hidden：如果存在该属性，表示元素不会被显示。</li>
                <li>
                  dir：设置文本方向，值可以是 ltr（从左到右）、rtl（从右到左）或
                  auto。
                </li>
                <li>lang：指定元素中内容的语言。</li>
              </ul>
            </li>

            <li>
              label还支持 事件属性 ：{" "}
              <ul>
                <li>
                  鼠标事件：
                  <ul>
                    <li>onclick：用户点击元素时触发。</li>
                    <li>onmouseover：鼠标指针移动到元素上时触发。</li>
                    <li>onmouseout：鼠标指针移出元素时触发。</li>
                  </ul>
                </li>
                <li>
                  键盘事件：{" "}
                  <ul>
                    <li>onkeydown：用户按下键盘按键时触发。</li>
                    <li>onkeyup：用户释放键盘按键时触发。</li>
                  </ul>
                </li>

                <li>
                  焦点事件：{" "}
                  <ul>
                    <li>onfocus：元素获得焦点时触发。</li>
                    <li>onblur：元素失去焦点时触发。</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              自定义数据属性允许开发者将自定义数据嵌入到 HTML 中。这些属性以
              data- 开头，并可以通过 JavaScript 轻松访问。{" "}
            </li>
          </ul>
        </li>
      </ol>

      <h2>Real Practices</h2>
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
              <li>
                input 框 必填，且利用 name 和 onChange 来 单一命名内容 和
                控制变化{" "}
              </li>
              <li>
                hook: useState: 提交form后清空input框。 所有input &
                textarea都需要设置自己的变量，并初始化
              </li>
              <li>
                css选择器优先级, <code>display: inline-block</code>
                允许元素不会独占一行，可以与其他行内或行内块级元素并排显示；且可以设置宽度、高度、内边距、边框和外边距。{" "}
              </li>
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
          <Link
            to="./flight-booker"
            className="li-title"
            id="flight-booker-link"
          >
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
          <Link to="/increment-and-decrement-counter" className="li-title">
            Increment and Decrement Counter
          </Link>
          <div className="important-paragraph">
            <h3>考点/内容点:</h3>
            <ul>
              <li>对于useState HOOK 的使用</li>
              <li>对className的切换</li>
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
              <li>css 布局。对display: flex 的应用</li>
              <li>
                当 flex-grow 和 flex-shrink 都为 0 时，flex
                项目的大小将完全由其内容和其他样式（如 width 和 height）决定。
                项目不会尝试占据多余空间或在空间不足时收缩。
                这种设置在需要固定大小的项目时非常有用，例如固定宽度的按钮或标签。
              </li>
              <li>
                只要父组件是flex，那么子组件可以通过 <code>flex-grow: 1;</code>{" "}
                来填充剩余空间。
              </li>
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
                表示元素是否对辅助技术隐藏，值为 true 或 false.
                默认值为false，元素对辅助技术是可见的。
                如果有些内容只是装饰性的，对用户无实质帮助，可以使用
                aria-hidden="true"。例如，图标、装饰性的图像或分隔符。
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
          <Link to="/analog-clock" className="li-title" id="analog-clock-link">
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
          <Link
            to="/digital-clock"
            className="li-title"
            id="digital-clock-link"
            ref={sectionRef}
          >
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
                component负责不同的功能，来提高代码阅读量。主组件来负责整合这些功能。
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="/grid-light" className="li-title">
            Grid Light
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/grid-lights">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul>
              <li>
                CSS: 对 grid-template-columns 的使用.
                这个属性用于定义每列的宽度。{" "}
              </li>
              <li>
                <code>repeat(...)</code>: 这是 CSS 中的 repeat
                函数，简化了重复声明列宽的工作。语法是{" "}
                <code>repeat(count, value)</code>: count: 指定重复次数; value:
                指定每次重复的值。
              </li>
              <li>
                在这个例子中： dollar sign 后面的这一串 是 JavaScript
                模板字符串语法，它会插入 config[0].length 的值，即 config
                数组第一行的长度（列数）。 而 <code>1fr</code> 是一个 CSS
                单位，表示一份可用的网格空间。fr 是 fraction
                的缩写，表示网格容器可用空间的一个比例单位。
              </li>
              <li>
                对 <code>Array.prototype.flat()</code>
                方法用于按照指定的深度递归地将数组展开，并返回一个新数组。flat(1)
                表示将数组展开一层。
              </li>
              <li>
                <code>filter(Boolean)</code>{" "}
                是一种常见的技巧，用于过滤数组中的假值。Boolean 是 JavaScript
                中的一个全局对象，可以用作函数来将值转换为布尔值。它会将所有“假值”转换为
                false，并将所有“真值”转换为 true。
              </li>
            </ul>
            <h4>补充学习：map</h4>
            <ul>
              <li>
                <strong>
                  <code>map</code>
                </strong>{" "}
                是一个非常有用的数组方法，用于<strong>遍历数组</strong>
                并对每个元素执行一个函数，然后返回一个新的数组，其中包含每次函数调用的结果。
              </li>
              <li>
                <strong>语法</strong>:{" "}
                <code>
                  array.map(callback(currentValue, index, array), thisArg)
                </code>{" "}
                <ul>
                  <li>
                    <strong>
                      <code>callback</code>
                    </strong>
                    : 一个函数，它会为数组中的每个元素执行。它接收三个参数：
                  </li>
                  <li>
                    <strong>
                      <code> currentValue</code>
                    </strong>
                    : 当前处理的元素。
                  </li>
                  <li>
                    <strong>
                      <code> index</code>
                    </strong>
                    (optional): 当前处理元素的索引。
                  </li>
                  <li>
                    <strong>
                      <code> array</code>
                    </strong>
                    (optional): 调用 map 方法的数组本身。
                  </li>
                  <li>
                    <strong>
                      <code> thisArg</code>
                    </strong>
                    (optional): 执行 callback 时用于 this 的值。
                  </li>
                </ul>
              </li>
              <li>
                基本示例: map 方法遍历 numbers
                数组中的每个元素，并将每个元素乘以2，结果是一个新数组 [2, 4, 6,
                8]。{" "}
                <code>
                  const numbers = [1, 2, 3, 4]; const doubled =
                  numbers.map(number =指向 number * 2); console.log(doubled); //
                  输出: [2, 4, 6, 8]
                </code>
              </li>
              <li>在 React 中，map 常用于遍历数组并返回 JSX 元素列表。</li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="/like-button" className="li-title">
            Like Button Various States
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/like-button">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul>
              <li>useState 对 state/状态的管理</li>
              <li>
                对于同一个组件，在不同状态下的
                状态管理，icon修改，css，className命名
              </li>
              <li>
                async function 和 try...catch...finally... 语法，
                (比较固定的)errorMessage的处理
              </li>
              <li>调用API的语法</li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="/progress-bar-ii" className="li-title">
            Progress Bar II (With Action Button)
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/progress-bars-ii">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul></ul>
          </div>
        </li>

        <li>
          <Link to="/string-convertor-paragraph" className="li-title">
            String Convertor
          </Link>
          <div className="important-paragraph">
            <h3>考点/内容点:</h3>
            <ul></ul>
          </div>
        </li>

        <li>
          <Link to="/star-rating" className="li-title">
            Star Rating
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/star-rating">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul></ul>
          </div>
        </li>

        <li>
          <Link to="/to-do-list" className="li-title">
            To Do List
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/todo-list">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul></ul>
          </div>
        </li>

        <li>
          <Link to="/tic-tac-toe" className="li-title">
            Tic Tac Toe
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/tic-tac-toe">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul></ul>
          </div>
        </li>

        <li>
          <Link to="/fetch-job-board" className="li-title">
            Fetch Job Board
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/job-board">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul>
              <li>Fetch API的implementation，记得要async function！！！ </li>
              <li> & middot; : 表示一个 dot </li>
              <li>
                {" "}
                <code>new Date(time * 1000).toLocaleString()</code>:
                显示发布者和发布时间（转换为本地时间格式）
              </li>
            </ul>
            <h4>补充学习: BEM(Block, Element, Modifier) 命名规范</h4>
            <ul>
              <li>
                BEM（Block, Element, Modifier）是一种 CSS
                命名约定，用于创建可复用的组件和代码共享。它的基本思想是将页面的
                UI
                分为独立的模块（Block），并用元素（Element）和修饰符（Modifier）来描述模块内部的组成部分及其状态。
              </li>
              <li>
                BEM 命名规范的基本形式是：{" "}
                <ul>
                  <li>
                    Block:{" "}
                    <strong>
                      <code>block-name</code>
                    </strong>
                    . e.g. Block:{" "}
                    <strong>
                      <code>fetch-job-board-post</code>
                    </strong>
                    : 这是一个独立的 UI 模块，代表一个职位发布条目。
                  </li>
                  <li>
                    Element:{" "}
                    <strong>
                      <code>block-name__element-name</code>
                    </strong>
                    . e.g. Element:{" "}
                    <strong>
                      <code>fetch-job-board-post__title</code>
                    </strong>
                    : fetch-job-board-post__title 是 fetch-job-board-post
                    模块中的一个元素，表示职位发布条目中的标题。
                  </li>
                  <li>
                    Modifier:{" "}
                    <strong>
                      <code>block-name--modifier-name</code>
                    </strong>
                    .
                  </li>
                </ul>
              </li>
              <li>
                使用 BEM 命名规范的主要好处有：
                <ul>
                  <li>
                    清晰的结构：通过命名可以清晰地看到一个元素属于哪个模块，提高代码的可读性。
                  </li>
                  <li>
                    可维护性：CSS
                    类名之间没有冲突，不同模块之间的样式不会相互影响，易于维护和扩展。
                  </li>
                  <li>
                    模块化：每个 Block
                    可以独立开发和测试，然后组合成复杂的页面，增强代码的复用性。
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="/stopwatch" className="li-title" id="stopwatch-link">
            Stopwatch
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/stopwatch">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul>
              <li>
                Hook的使用：通过 useRef 存储上一次计时的时间戳，useState
                管理总时间和计时器 ID
              </li>
            </ul>

            <h4>
              补充学习: <code>Math.floor()</code>
            </h4>
            <ul>
              <li>
                <code>Math.floor()</code>: 是 JavaScript
                中的一个内置函数，它用于向下取整一个数字。具体来说，它会返回小于或等于给定数字的最大整数。这个函数在处理浮点数时非常有用，尤其是在需要舍弃小数部分的情况下。
                <li>
                  示例：{" "}
                  <ol>
                    <li>e.g. Math.floor(4.7); // 返回 4</li>
                    <li>e.g. Math.floor(4.4); // 返回 4</li>
                    <li>e.g. Math.floor(-4.7); // 返回 -5</li>
                    <li>e.g. Math.floor(-4.4); // 返回 -5</li>
                  </ol>
                </li>
                <li>
                  使用场景:{" "}
                  <ol>
                    <li>
                      时间格式化：在秒表或计时器应用中，Math.floor
                      常用于将时间单位（如毫秒）转换为较大单位（如秒、分钟、小时）时，确保向下取整，以免出现超过预期的时间显示。例如，在秒表代码中的使用：
                      <code>
                        const seconds = Math.floor(time / 1000); //
                        将毫秒转换为秒并向下取整
                      </code>
                    </li>

                    <li>
                      分页计算：在处理分页功能时，Math.floor
                      可以用来计算总页数，以确保即使总项数不是每页项数的整数倍，也不会多出一页。例如，{" "}
                      <code>
                        const itemsPerPage = 10; const totalItems = 105; const
                        totalPages = Math.floor(totalItems / itemsPerPage); //
                        返回 10 页
                      </code>
                    </li>

                    <li>
                      坐标计算：在计算图形或游戏中的坐标时，Math.floor
                      可用于确保坐标值是整数，从而避免精度问题。例如，
                      <code>
                        const x = Math.floor(position.x); const y =
                        Math.floor(position.y);
                      </code>
                    </li>
                  </ol>
                </li>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="/transfer-list" className="li-title">
            Transfer List
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/transfer-list">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul></ul>

            <h4>
              补充学习: <code>useId()</code>
            </h4>
            <ul>
              <li>
                <code>useId</code> 是 React 18 中引入的一个新的
                Hook，它用于生成稳定的唯一
                ID。这在需要为多个组件生成唯一标识符时特别有用，例如在表单元素中需要关联{" "}
                <code>"label"</code> 和 <code>"input"</code>{" "}
                元素，或者在列表中为每个项目生成唯一的 key 值。{" "}
                <code>useId</code> 能保证在整个组件生命周期内 ID 的稳定性。
              </li>
              <li>
                <code>useId</code>{" "}
                的用法非常简单，它不需要任何参数，调用它会返回一个唯一的 ID
                字符串。e.g. useId 会返回一个唯一的 ID。这个 ID 被用于 label 的
                htmlFor 属性和 input 的 id 属性，从而将标签和输入框关联起来。
              </li>
              <li>
                示例 2：在列表中使用 useId.
                假设我们有一个需要渲染的列表组件，每个列表项都需要一个唯一的 ID.{" "}
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="/undoable-counter" className="li-title">
            Undoable Counter
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/undoable-counter">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul></ul>
          </div>
        </li>

        <li>
          <Link to="/whack-a-mole" className="li-title">
            Whack A Mole 打地鼠游戏
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/whack-a-mole">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul>
              <li>使用 Fisher-Yates shuffle 洗牌算法， 随机打乱数组顺序。</li>
              <li>
                重制函数记得考虑到所有声明过的变量， 并且清空{" "}
                <code>clearInterval()</code>。
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="/memory-game" className="li-title">
            Memory Game
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/memory-game">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul></ul>
          </div>
        </li>

        <li>
          <Link to="/traffic-light" className="li-title">
            Traffic Light
          </Link>
          <div className="important-paragraph">
            <a href="https://www.greatfrontend.com/questions/user-interface/traffic-light">
              Link
            </a>
            <h3>考点/内容点:</h3>
            <ul>
              <li></li>
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
        <Route
          path="/increment-and-decrement-counter"
          element={<InAndDeCounter />}
        />
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
        <Route path="/grid-light" element={<GridLight />} />
        <Route path="/like-button" element={<LikeButton />} />
        <Route path="/progress-bar-ii" element={<ProgressBarII />} />
        <Route
          path="/string-convertor-paragraph"
          element={<StringConvertorParagraph />}
        />
        <Route path="/star-rating" element={<StarRating />} />
        <Route path="/to-do-list" element={<ToDoList />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/fetch-job-board" element={<FetchJobBoard />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/transfer-list" element={<TransferList />} />
        <Route path="/undoable-counter" element={<UndoableCounter />} />
        <Route path="/whack-a-mole" element={<WhackAMole />} />
        <Route path="/memory-game" element={<MemoryGame />} />
        <Route path="/traffic-light" element={<TrafficLight />} />
      </Routes>
    </Router>
  );
}

export default App;
