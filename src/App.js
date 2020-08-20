import React, { Component } from 'react';
import authProvider from './authProvider';
import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

class App extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={UserList} edit={EditGuesser} />
      </Admin>
    );
  }
}
export default App;
