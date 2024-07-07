import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RestaurantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="address" multiline source="address" />
        <TextInput label="phone" source="phone" />
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Create>
  );
};
