import "./cssAdjustment.css";

const CssAdjustment = () => {
  return (
    // 其实className大可不必这么麻烦，只是因为这是React Pratice的一部分，所以才这么写
    <div className="css-adj-page-main-page">
      <h2 className="css-adj-page-header">Header</h2>
      <div className="css-adj-page-main-content-container">
        <div className="css-adj-page-nav">Navigation</div>
        <div className="css-adj-page-main">Main</div>
        <div className="css-adj-page-sidebar">Sidebar</div>
      </div>
      <div className="css-adj-page-footer">Footer</div>
    </div>
  );
};

export default CssAdjustment;

/*
在GreatFrontEnd 中，是这么写的：
import './styles.css';

export default function App() {
  return (
    <>
      <header>Header</header>
      <div className="main-content-container">
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </>
  );
}
*/
