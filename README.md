# AWS Summit - Amplify App

## Data Modeling

## Test Locally

### Pull from Sandbox

### Create new Pet

Modify `src/App.js` to create a new Pet:

```javascript
import { DataStore } from '@aws-amplify/datastore';
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

  return (
    <div className="App">
      <button onClick={addPet}>Add Pet</button>
    </div>
  );
}

export default App;
```

### List Pets

We will use React's [`useEffect`](https://reactjs.org/docs/hooks-effect.html) to fetch Pets when loading the App:

```javascript
import { DataStore } from '@aws-amplify/datastore';
import { useEffect } from 'react';
import { Pet, Sex, Size } from './models';

function App() {

  useEffect(() => {
    const getPets = async() => {
      const models = await DataStore.query(Pet);
      console.log(models);
    }

    getPets()
  }, []);

  ...
}

export default App;
```

## Deploy

### Pull 

Login in the browser and then go back to the terminal to configure your app:

```
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
```

## Content

## User Interface

## Authentication
