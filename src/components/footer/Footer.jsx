import React from 'react';
import './footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
      <div className="container">
        <p>{t('© 2023 Your Website. All Rights Reserved.')}</p>
      </div>
  );
};

export default Footer;
