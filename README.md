# Food order application

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantConatainer
- - RestaurantCard
- - Img
- - Name of Res, Star Rating, Cuisines, Delivery Time
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

# Two types if Export/Import

- Default Export/Import
  export default Component
  import Component from "path"

- Named Export/Import
  export const name
  import {name} from "path"

# React Hooks

    Normal JS utility functions
    - useState() - superpowerful react hook
    - useEffect()

# Routing in web apps

- client side routing
- server side routing

Dynamic routing

# bundling

- chunking
- code splitting
- dynamic bundling
- lazy loading => on demand loading

# App component

(state=user) - <Body user={user} /> - <RestaurantMenu user=>

- RestaurantCard user={user} - <h4>{user} </h4>
  profile drilling
  if you have data in parent and want to access in children and children ... data passing to chain called drilling
- passing data from child to parent
  - useCustomHooks
  -
<<<<<<< HEAD


# Redux Toolkint
 - Install library 
  npm install @reduxjs/toolkit 
  npm install react-redux
- Build our store
- Connect our to store to our app
- Slice (cart slice)
- dispatch (action)
- selector

# Testing for developers
- Unit Testing
- Integrated Testing
- End To End Testing

# Setting up Testing in our app
  - Install  React Testing Library
  - Install jest
  - Install Babel dependencies
  - Configure Babel
  - Configure Parcel config file to disable default babel transpilation
  - Jest configuration - npx jest --init
  - Install jsdom library
  create folder __test__ for testing files. (__ means dunder)
  - Install @babel/preset-react to make JSX work in test cases.
  - Include @babel/preset-react inside babel config
  - Install npm i -D @testing-libarary/jest-dom
=======
>>>>>>> 253a3b9510704957aca17443cfc49dd76f47f70e
