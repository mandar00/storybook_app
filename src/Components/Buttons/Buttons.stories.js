import React from "react";
import Buttons from "./Buttons";

export default {
    title:"collection/buttons",
    component:Buttons,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    //   },
      args: {
        //👇 Now all Button stories will be primary.
        variant:"primary",
    },
}

export const PrimaryButton = () => <Buttons variant='primary'> Primary </Buttons>
 
const Templates= (args) => <Buttons {...args}></Buttons>







export const PrimaryBtn =   Templates.bind({})

PrimaryBtn.args = {
    variant:"primary",
    children:"primary"
}   
PrimaryBtn.parameters = {
    backgrounds: {
      values: [
        { name: 'red', value: '#f001' },
        { name: 'green', value: '#0f01' },
      ],
    },
  }; 


export const secondaryBtn =   Templates.bind({})

secondaryBtn.args = {
    // variant:"secondary",
    children:"secondary"
}       