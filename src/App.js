import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css";
import Shop from "./pages/Shop";
import Single from "./pages/Single";

const initState = {
  products: [
    {
      id: 1,
      categoryId: 1,
      title: "Title",
      description: "Description",
      quantity: 10,
      price: 500,
      imageUrl:
        "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
    }
  ],
  categories: [{ id: 1, name: "Computer" }],
  carts: []
};

export const AppContext = React.createContext();

const reducer = (state, action) => {
  return state;
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Shop}/>
          <Route path="/single/:productId" component={Single}/>
          </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
