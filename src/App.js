// import React from 'react';
// import ItemListContainer from './components/ItemListContainer';
import './App.css';
// import NavBar from './components/NavBar';
// import AppFunction from './components/AppFunction';
import { useEffect, useState } from "react";
import ItemListContainer from "./components/ItemListContainter/ItemListContainer"

// const App = () => {
//   return (
//     <>
//       <NavBar />
//       <ItemListContainer title= "Mis productos" />
//       <AppFunction />
//     </>
//   );
// }

function App() {

  const[items, setItems] = useState([]);

  useEffect(() => {
    new Promise((todoBien, todoMal) => {
      setTimeout(() => {
        todoBien(['a','b','c','d'])
      },2000);
    }).then(resultado => setItems(resultado))
  });

  return (
    <div className="App">
      <ItemListContainer items={items} />
    </div>
  );
}

export default App;
