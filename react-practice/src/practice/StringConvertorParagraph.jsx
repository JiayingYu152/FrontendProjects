import React from "react";
import parse from "html-react-parser";

const StringConvertorParagraph = () => {
  const message =
    "Please tag @Bob Jones for approval!\n\n" +
    "Here's the max amount we were allotted:\n\n" +
    "&gt;Max spend: $5000\n" +
    "&gt;Max spend per user: $12\n" +
    "&gt;Target spend: $3000\n\n" +
    "Do you think it will be ok?\nOtherwise let's consider a new vendor.";

  const customParse = (text) => {
    //这行代码将所有换行符 (\n) 替换为 HTML 的 <br /> 标签，以保持文本的格式。
    let formattedText = text.replace(/\n/g, "<br />");

    // 处理引用块
    formattedText = formattedText.replace(
      /(^|<br \/>)&gt;(.+?)(?=<br \/>|$)/g,
      "<blockquote>$2</blockquote>"
    );
    /*
        这里使用正则表达式将以 &gt;（即 >）开头的行转换为 HTML 的 <blockquote> 标签。具体解释如下：

        - (^|<br \/>)：匹配行的开头或换行符 <br />。
        - &gt;：匹配 > 符号。
        - (.+?)：懒惰匹配任意字符，直到下一个条件满足。
        - (?=<br \/>|$)：匹配 <br /> 或行的结尾。
        - "$2"：指向匹配组中的第二部分，即引用的内容。
    */

    // 处理段落
    formattedText = formattedText
      .split("<br /><br />")
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("");

    return parse(formattedText);
  };

  const parsedContent = customParse(message);

  return (
    <div>
      <h1>Email Content</h1>
      {parsedContent}
    </div>
  );
};

export default StringConvertorParagraph;
