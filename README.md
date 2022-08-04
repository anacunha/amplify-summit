# AWS Summit - Amplify App

## Data Modeling

Access the Amplify Sandbox at [https://sandbox.amplifyapp.com/](https://sandbox.amplifyapp.com/) to ceate your data model.

## Test Locally

### Create a React app

```shell
npx create-react-app@latest adopt-a-pet
cd adopt-a-pet
```

### Install Amplify CLI

```shell
curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL
```

### Pull from Sandbox

```shell
amplify pull --sandboxId <sandboxId>
```

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

## Content

## User Interface

```shell
npm install @aws-amplify/ui-react
```

Configure Amplify on `src/index.js`:

```javascript
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
```

## Authentication
