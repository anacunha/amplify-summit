# AWS Summit - Amplify App

## Data Modeling

## Test Locally

Modify `src/App.js` to create a new Pet:

```javascript
import { DataStore } from '@aws-amplify/datastore';
import { Pet, Sex, Size } from './models';

function App() {
  const addPet = async() => {
    const newPet = await DataStore.save(new Pet({
      "name": prompt('Name'),
      "picture": prompt('Picture'),
      "sex": Sex.MALE,
      "size": Size.SMALL,
      "description": prompt('Description')
    }));

    console.log(newPet);
  }

  return (
    <div className="App">
      <button onClick={addPet}>Add Pet</button>
    </div>
  );
}

export default App;

```
