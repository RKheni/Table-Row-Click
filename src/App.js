import './App.css';
import React, {useState, useEffect} from 'react';
import Table from './components/Table';
import ItemPage from './components/ItemPage';

function App() {
  const [selectedItem, setSelectedItem] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make the API call to fetch the data
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (item) => {
    setSelectedItem(item);
    console.log('click')

  };

  return (
    <div className="App">
      {selectedItem.id ? (
        <ItemPage selectedItem={selectedItem} />
        ) : (
        <Table data={data} handleClick={handleClick} />
      )}
    </div>
  );
}

export default App;
