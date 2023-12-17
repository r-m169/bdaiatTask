import React from 'react';
import { useTranslation } from 'react-i18next';
import './switcher.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='container d-flex gap-3 justify-content-center btns'>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Spanish</button>
    </div>
  );
};

export default LanguageSwitcher;
