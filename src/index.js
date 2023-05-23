import React from 'react';
import ReactDOM from 'react-dom/client';

import ProductList from './Product';

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);

root.render(<ProductList />);