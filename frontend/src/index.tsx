import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ItemProvider } from './Context/ItemContext'; // Import ItemProvider
import AddItemForm from './components/AddItemForm'; // Import AddItemForm
import ItemList from './components/ItemList'; // Import ItemList

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ItemProvider> {/* Wrap everything inside ItemProvider */}
      <div style={{ maxWidth: '500px', margin: 'auto', textAlign: 'center', padding: '20px' }}>
        <h1>Insurance Items</h1>
        <AddItemForm />  {/* Render the form to add items */}
        <ItemList />  {/* Render the list of items */}
      </div>
    </ItemProvider>
  </React.StrictMode>
);

reportWebVitals();
