import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RestaurantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="address" multiline source="address" />
        <TextInput label="phone" source="phone" />
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Edit>
  );
};
