import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher'; 

const TabMenu = () => {
  const { t } = useTranslation();
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);

  const handleItemClick = (option) => {
    console.log('Clicked:', option);
    if (option === t('settings')) {
      setShowLanguageSwitcher(true);
    } else {
      setShowLanguageSwitcher(false); 
    }
  };

  return (
    <div className="tab-menu-container">
      <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
        <li>
          <button className="dropdown-item" onClick={() => handleItemClick(t('products'))}>
            {t('products')}
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => handleItemClick(t('settings'))}>
            {t('settings')}
          </button>
        </li>
      </ul>
      {showLanguageSwitcher && <LanguageSwitcher />} 
    </div>
  );
};

export default TabMenu;
