import React from "react";
import parse from "html-react-parser";

// 处理 Markdown 转换
const convertMarkdown = (markdownMessage) => {
  // 替换换行符为 <br />
  let formattedText = markdownMessage.replace(/\n/g, "<br />");

  // 处理引用块
  formattedText = formattedText.replace(
    /(^|<br \/>)&gt;(.+?)(?=<br \/>|$)/g,
    "<blockquote>$2</blockquote>"
  );

  // 处理段落
  formattedText = formattedText
    .split("<br /><br />")
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  // 处理 Markdown 标题
  formattedText = formattedText.replace(
    /^(#{1,6})\s*(.+)$/gm,
    (match, p1, p2) => {
      const level = p1.length;
      return `<h${level}>${p2}</h${level}>`;
    }
  );

  // 处理加粗
  formattedText = formattedText.replace(
    /\*\*(.+?)\*\*/g,
    "<strong>$1</strong>"
  );

  // 处理斜体
  formattedText = formattedText.replace(/[*_](.+?)[*_]/g, "<em>$1</em>");

  return parse(formattedText);
};

// 处理富文本编辑器
const convertRichText = (richTextMessage) => {
  let formattedText = richTextMessage;

  // 处理超链接
  formattedText = formattedText.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1">$1</a>'
  );

  // 处理换行符
  formattedText = formattedText.replace(/\n/g, "<br />");

  return parse(formattedText);
};

// 处理聊天应用
const convertChatApplication = (chatMessage) => {
  let formattedText = chatMessage;

  // 处理表情符号
  formattedText = formattedText.replace(
    /:\)/g,
    '<img src="smile.png" alt="smile" />'
  );

  // 处理用户提及
  formattedText = formattedText.replace(
    /@(\w+)/g,
    '<a href="/user/$1">@$1</a>'
  );

  return parse(formattedText);
};

const StringConvertorParagraph = () => {
  const markdownMessage =
    "Please tag @Bob Jones for approval!\n\n" +
    "Here's the max amount we were allotted:\n\n" +
    "&gt;Max spend: $5000\n" +
    "&gt;Max spend per user: $12\n" +
    "&gt;Target spend: $3000\n\n" +
    "Do you think it will be ok?\nOtherwise let's consider a new vendor.";

  const richTextMessage =
    "Visit our website at https://example.com\n\n" +
    "For more **bold** and *italic* text.";

  const chatMessage =
    "Hi @john, can you please review the document?\n" +
    "I'm happy with the current state :)";

  const parsedMarkdownMessage = convertMarkdown(markdownMessage);
  const parsedRichTextMessage = convertRichText(richTextMessage);
  const parsedChatMessage = convertChatApplication(chatMessage);

  return (
    <div>
      <h1>String Convertor Paragraph</h1>

      <h2>Markdown Convertor</h2>
      <h3>Email Content</h3>
      <p>
        <strong>Original Message:</strong> {markdownMessage}
      </p>
      <p>
        <strong>After Convention:</strong> {parsedMarkdownMessage}
      </p>

      <h2>Rich Text Convertor</h2>
      <h3>Rich Text Content</h3>
      <p>
        <strong>Original Message:</strong> {richTextMessage}
      </p>
      <p>
        <strong>After Convention:</strong> {parsedRichTextMessage}
      </p>

      <h2>Chat Application Convertor</h2>
      <h3>Chat Content</h3>
      <p>
        <strong>Original Message:</strong> {chatMessage}
      </p>
      <p>
        <strong>After Convention:</strong> {parsedChatMessage}
      </p>
    </div>
  );
};

export default StringConvertorParagraph;
