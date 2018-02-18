import React from 'react';
import ReactDOM from 'react-dom';
import { I18n } from 'react-i18nify';

import App from './App';
import translations from './i18n.json'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

I18n.setTranslations(translations);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
