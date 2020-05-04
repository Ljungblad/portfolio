import React from "react";
import client from "../../contentful/contentful";
import "./footer.css";
import GithubImg from "../../assets/icons/github.svg";
import EmailImg from "../../assets/icons/email.svg";
import LinkedInImg from "../../assets/icons/linkedin.svg";
import LocationImg from "../../assets/icons/location.svg";

const Footer = () => {
  const [footer, setFooter] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({ content_type: "footer" })
      .then((response) => setFooter(response.items[0]))
      .catch(console.error);
  }, []);

  if (!footer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="footer-wrapper">
      <div className="link-container">
        <img src={EmailImg} alt="icon" loading="lazy" />
        <a href={`mailto:${footer.fields.email}`}>{footer.fields.email}</a>
      </div>
      <div className="link-container">
        <img src={GithubImg} alt="icon" loading="lazy" />
        <a
          href={footer.fields.githubURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {footer.fields.githubName}
        </a>
      </div>
      <div className="link-container">
        <img src={LinkedInImg} alt="icon" loading="lazy" />
        <a
          href={footer.fields.linkedInURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {footer.fields.linkedInName}
        </a>
      </div>
      <div className="link-container">
        <img src={LocationImg} alt="icon" loading="lazy" />
        <a
          href={footer.fields.locationURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {footer.fields.locationName}
        </a>
      </div>
    </div>
  );
};

export default Footer;
