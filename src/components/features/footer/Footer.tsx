import React from 'react';
import classes from './Footer.module.scss';
import { FooterDescriptionItem } from '../../../models/footer-description.model';
import { Link } from '../../../models/link.model';
import signatureImage from '../../../assets/images/ah_signature_white.png';

const Footer: React.FC<{
  contactLinks: Link[];
  description: FooterDescriptionItem[];
  className?: string;
}> = ({ contactLinks, description, className }) => {
  return (
    <div
      className={`${classes['ah-c-footer']} ${
        className || ''
      } ah-bg-gradient--darkergreydarkgrey`}
    >
      <div className="ah-container">
        <div className={classes['ah-c-footer__image-container']}>
          <img src={signatureImage} />
        </div>

        <ul className={classes['ah-c-footer__contact-links']}>
          {contactLinks.map((contact) => (
            <li
              key={contact.id}
              className={classes['ah-c-footer__contact-link']}
            >
              <a
                href={contact.link}
                target="_blank"
                className="ah-feature-text"
              >
                {React.createElement(contact.icon)}
              </a>
            </li>
          ))}
        </ul>

        <ul className={classes['ah-c-footer__description']}>
          {description.map((item) => (
            <li key={item.id}>
              <p className="ah-feature-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
