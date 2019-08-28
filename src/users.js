import React from 'react';
import { Create, Edit, DisabledInput, SimpleForm, TextInput, List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" label="Address" />
            <TextField source="phone" />
            <UrlField source="website" />
            <TextField source="company.name" label="Company" />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
  <Edit {...props}>
  <SimpleForm>
  <DisabledInput source="id" />
  <TextInput source="name"/>
  <TextInput source="username"/>
  <TextInput source="email"/>
  <TextInput source="address.street" label="Address"/>
  <TextInput source="phone"/>
  <UrlField source="website"/>
  <TextInput source="company.name" label="Company"/>
  </SimpleForm>
</Edit>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" label="Address" />
      <TextInput source="phone" />
      <UrlField source="website" />
      <TextInput source="company.name" label="Company" />
    </SimpleForm>
  </Create>
);
