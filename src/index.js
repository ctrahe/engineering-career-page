import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { I18n } from 'react-i18nify';
import translations from './i18n.json'

I18n.setTranslations(translations);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
