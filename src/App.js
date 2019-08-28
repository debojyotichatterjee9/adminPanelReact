import React, { Component } from "react";
import { Admin, Resource, EditGuesser } from "react-admin";
import authProvider from "./authProvider";
import { UserList, UserEdit, UserCreate } from './users';
import jsonServerProvider from "ra-data-json-server";

const dataProvider =
  jsonServerProvider("https://jsonplaceholder.typicode.com");

class App extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/>
      </Admin>
    );
  }
}
export default App;
