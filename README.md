# AWS Summit - Amplify App

## Data Modeling

### Create Data Model

Access the Amplify Sandbox at [https://sandbox.amplifyapp.com/](https://sandbox.amplifyapp.com/) to ceate your data model.

![Data model on Amplify Studio](data-model.png)

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

Amplify created a GraphQL schema for our data model at `amplify/backend/api/amplifyDatasource/schema.graphql`:

```graphql
type Owner @model @auth(rules: [{allow: public}]) {
  id: ID!
  name: String!
  email: AWSEmail!
}

enum PetType {
  CAT
  DOG
}

type Pet @model @auth(rules: [{allow: public}]) {
  id: ID!
  name: String!
  description: String
  photo: AWSURL!
  petType: PetType!
  owner: Owner @hasOne
}
```

## Test Locally

### Create new Pet

Modify `src/App.js` to create a new Pet:

```javascript
import { DataStore } from '@aws-amplify/datastore';
import { Pet, PetType } from './models';

function App() {

  const addPet = async() => {
    const newPet = await DataStore.save(new Pet({
      "name": prompt('Name'),
      "photo": prompt('Photo'),
      "petType": PetType.DOG,
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
import { Pet, PetType } from './models';

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

### Pets


| Name              | Description                                     | Photo                                                                                           | Type |
| ----------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---- |
| Basil             | A cat that likes to sleep                       | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Basil.jpg             | CAT  |
| Boris             | An observing cat                                | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Boris-cat.jpg         | CAT  |
| Boris             | A senior, loving Schnauzer                      | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Boris-dog.jpg         | DOG  |
| Chips             | Guilty looking dog, might seat on your sofa     | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Chips.jpg             | DOG  |
| Chuby             | Also known as Chewbacca                         | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Chuby.jpeg            | DOG  |
| Dali              | Dalí, the cat, not the painter 🎨               | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Dali.png              | CAT  |
| Garfield          | Orange cat, might eat your lasagna 🍝           | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Garfield.jpg          | CAT  |
| Gremlina          | Named after the Gremlins 🐈‍⬛                     | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Gremlina.png          | CAT  |
| Lambeau & Fortuna | Festive dogs 🎄                                 | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Lambeau%2BFortuna.jpg | DOG  |
| Milka             | Named after the chocolate 🍫                    | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Milka.jpg             | DOG  |
| Moka              | AWS Community Builder and your next best friend | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Moka.jpg              | DOG  |
| Newman & Eve      | Siblings that get along just fine 🐱🐱           | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Newman%2BEve.jpg     | CAT  |
| Pérola            | Dog or racoon? 🦝                               | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Perola.jpg            | DOG  |
| Sunny             | Enjoys baths and sunny days 🛁☀️                 | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Sunny.jpg             | DOG  |
| Tempestade        | Adorable, but no one can tame her 🌪            | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Tempestade.jpg        | CAT  |
| Theo              | A very sleepy dog                               | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Theo.jpg              | DOG  |
| Twinkle           | The most adorable cat you will ever met         | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Twinkle.jpg           | CAT  |

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
