import React from "react";
import Input from "./Input";


export default{
    title:"collection/input",
    component:Input
}


export const SmallInput = () => <Input type='text' placeH='enter name' variant='small'></Input>


const Template= (args) => <Input {...args}></Input>

export const smallIp = Template.bind({})

smallIp.args={
    type:"text",
    placeH:"enter your name",
    variant:"small"
}
export const mediumIp = Template.bind({})

mediumIp.args={
    type:"text",
    placeH:"enter your name",
    variant:"medium"
}
export const largeIp = Template.bind({})

largeIp.args={
    type:"text",
    placeH:"enter your name",
    variant:"large"
}