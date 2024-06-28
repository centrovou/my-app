import { useReducer, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';
import { INITIAL_STATE, reducerCard } from './reducer/reducerCard';
const items = [
  {
    id: 1,
    title: 'Товар 1',
  },
  {
    id: 2,
    title: 'Товар 2',
  },
];

INITIAL_STATE.items = items;
function App() {
  const [state, dispatch] = useReducer(reducerCard, INITIAL_STATE);
  const [items, setItems] = useState(INITIAL_STATE.items); //отоброжение карточек каталог на главной

  const addToCard = (item) => {
    dispatch({ type: 'ADD', payload: item });
  };

  return (
    <div className="App">
      <h1>Каталог</h1>
      {items.map((el) => (
        <Card key={el.id} title={el.title} addToCard={addToCard} />
      ))}
      <Cart items={items} />
    </div>
  );
}

export default App;
