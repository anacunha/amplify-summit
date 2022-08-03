import { DataStore } from '@aws-amplify/datastore';
import { useEffect } from 'react';
import { Pet, Sex, Size } from './models';

function App() {
  const addPet = async() => {
    const newPet = await DataStore.save(new Pet({
      "name": prompt('Name'),
      "picture": prompt('Picture'),
      "sex": Sex.FEMALE,
      "size": Size.MEDIUM,
    }));

    console.log(newPet);
  }

  useEffect(() => {
    const getPets = async() => {
      const models = await DataStore.query(Pet);
      console.log(models);
    }

    getPets()
  }, []);

  return (
    <div className="App">
      <button onClick={addPet}>Add Pet</button>
    </div>
  );
}

export default App;
