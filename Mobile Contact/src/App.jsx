import React from "react";
import Navbar from "./components/navbar/Navbar";
import Contacts from "./components/contacts/Contacts";
import EditContact from "./components/contacts/EditContact";
import AddContact from "./components/contacts/AddContact";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
      <Navbar />
        <Switch>
          <Route path="/contacts/add" exact component={AddContact} />
          <Route path="/edit/:id" exact component={EditContact}/>
          <Route path="/" exact component={Contacts} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
