import React from 'react';
import styles from './ContactList.module.scss';
import { Link } from '../../models/link.model';

export const ContactsList: React.FC<{
  title: string;
  contacts: Link[];
}> = ({ title, contacts }) => {
  return (
    <div className={styles['ah-c-contacts-list']}>
      <h3 className={`${styles['ah-c-contacts-list__title']} ah-feature-title`}>
        {title}
      </h3>
      <ul className={styles['ah-c-contacts-list__list']}>
        {contacts?.map((contact) => {
          return (
            <li
              key={contact.id}
              className={styles['ah-c-contacts-list__list-item']}
            >
              {contact.link ? (
                <a
                  href={contact.link}
                  target="_blank"
                  className="ah-feature-subtitle"
                >
                  <div className={styles['ah-c-contacts-list__icon']}>
                    {React.createElement(contact.icon)}
                  </div>
                  <div>{contact.caption}</div>
                </a>
              ) : (
                <a
                  className={`ah-feature-subtitle ${styles['ah-c-contacts-list--no-events']}`}
                >
                  <div className={styles['ah-c-contacts-list__icon']}>
                    {React.createElement(contact.icon)}
                  </div>
                  <div>{contact.caption}</div>
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsList;
