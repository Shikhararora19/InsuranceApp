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
        <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-6 items-center justify-center text-center">Insurance Items</h1>
          <AddItemForm />  {/* Render the form to add items */}
          <ItemList />  {/* Render the list of items */}
      </div>
    </ItemProvider>
  </React.StrictMode>
);

reportWebVitals();
