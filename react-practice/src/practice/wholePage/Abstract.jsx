import "./abstract.css";
import { useState } from "react";
import someImage from "../../data/transgender.jpeg";

const HARDCODE_DATA = {
  headerTitle: "How can we help?",
  searchBarPlaceholder: "Search",
  boxInformation: [
    {
      imgUrl: someImage,
      title: "Using Abstract",
      description:
        "Abstract lets you manage, version, and document your designs in one place.",
    },
    {
      imgUrl: someImage,
      title: "Manage your account",
      description:
        "Configure your account settings, such as your email, profile details, and password.",
    },
    {
      imgUrl: someImage,
      title: "Manage organizations, teams, and projects",
      description:
        "Use Abstract organizations, teams, and projects to organize your people and your work.",
    },
    {
      imgUrl: someImage,
      title: "Manage billing",
      description: "Change subscriptions and payment details.",
    },
    {
      imgUrl: someImage,
      title: "Authenticate to Abstract",
      description:
        "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    },
    {
      imgUrl: someImage,
      title: "Abstract support",
      description: "Get in touch with a human.",
    },
  ],
  footerInformation: [
    {
      header: "Abstract",
      content: [
        {
          title: "Start Trial",
          link: `#`,
        },
        {
          title: "Pricing",
          link: `#`,
        },
        ,
        {
          title: "Download",
          link: `#`,
        },
      ],
    },
    {
      header: "Resources",
      content: [
        ,
        {
          title: "Blog",
          link: `#`,
        },
        {
          title: "Help Center",
          link: `#`,
        },
        {
          title: "Release Notes",
          link: `#`,
        },
        {
          title: "Status",
          link: `#`,
        },
      ],
    },
    {
      header: "Community",
      content: [
        ,
        {
          title: "Twitter",
          link: `#`,
        },
        {
          title: "LinkedIn",
          link: `#`,
        },
        {
          title: "Facebook",
          link: `#`,
        },
        {
          title: "Dirbbble",
          link: `#`,
        },
        ,
        {
          title: "Podcast",
          link: `#`,
        },
      ],
    },
    {
      header: "Company",
      content: [
        ,
        {
          title: "About Us",
          link: `#`,
        },
        {
          title: "Careers",
          link: `#`,
        },
        {
          title: "Legal",
          link: `#`,
        },
      ],
      additionContent: [
        {
          title: "Contact Us",
          link: `info@xxx.com#`,
        },
      ],
    },
  ],
  copyRightInformation: {
    imgUrl: someImage,
    title: "@Copyright 2024",
    companyName: "Company Name",
    message: "All rights reserved.",
  },
};

const Abstract = () => {
  const [searchBarInput, setSearchBarInput] = useState("");

  console.log(someImage);

  return (
    <div className="abstract-container">
      <header className="abstract-header-container">
        <div className="abstract-header-left-container">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          />
          <span> &middot; </span>
          <a href="/whole-page/abstract">Help Center</a>
        </div>
        <div className="abstract-header-right-container">
          <button type="button" className="abstract-header-right-submit-button">Submit a request</button>
          <button type="button" className="abstract-header-right-sign-in-button">Sign in</button>
        </div>
      </header>
      <main className="abstract-main-container">
        <div className="abstract-main-upper-container">
          <h1>{HARDCODE_DATA.headerTitle}</h1>
          <input
            type="text"
            value={searchBarInput}
            onChange={(e) => setSearchBarInput(e.target.value)}
            placeholder={HARDCODE_DATA.searchBarPlaceholder}
            className="abstract-main-upper-search-bar"
          />
        </div>
        <div className="abstract-main-bottom-container">
          {HARDCODE_DATA.boxInformation.map((box, index) => (
            <div key={index} className="abstract-main-bottom-box">
              <img
                src={box.imgUrl ? box.imgUrl : someImage}
                className="abstract-main-bottom-box-img"
                alt={box.title}

              />
              <div className="abstract-main-bottom-right-content">
                <h3 className="abstract-main-bottom-box-title">{box.title}</h3>
                <p className="abstract-main-bottom-box-description">
                  {box.description}
                </p>
                <a href="#" className="abstract-main-bottom-box-link">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="abstract-footer-container">
        {HARDCODE_DATA.footerInformation.map((footerComponent, index) => (
          <div key={index} className="abstract-footer-inner-column">
            <h5>{footerComponent.header}</h5>
            <ul>
              {footerComponent.content.map((content, index) => (
                <li key={index}>
                  <a href={content.link}>{content.title}</a>
                </li>
              ))}
              {index === 3 && footerComponent.additionContent && (
                <>
                  <h6 className="abstract-footer-contact-us-title">{footerComponent.additionContent[0].title}</h6>
                  <p className="abstract-footer-contact-us-paragraph">{footerComponent.additionContent[0].link}</p>
                </>
              )}
            </ul>
          </div>
        ))}

        {HARDCODE_DATA.copyRightInformation && (
          <div className="abstract-footer-inner-column-copyright">
            <img src={HARDCODE_DATA.copyRightInformation.imgUrl} />
            <p>{HARDCODE_DATA.copyRightInformation.title}</p>
            <p>{HARDCODE_DATA.copyRightInformation.companyName}</p>
            <p>{HARDCODE_DATA.copyRightInformation.message}</p>
          </div>
        )}
      </footer>
    </div>
  );
};

export default Abstract;
