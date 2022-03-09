import React from "react";
import { smallIp } from "../Input/Input.stories";
import { mediumIp } from "../Input/Input.stories";
import {PrimaryBtn, PrimaryButton} from "../Buttons/Buttons.stories"
import {secondaryBtn} from "../Buttons/Buttons.stories"
import { SmallInput } from "../Input/Input.stories";

export default{
    title:"form/sub"
    
}

export const PrimarySub = () => (
    <>
        <SmallInput/> <PrimaryButton></PrimaryButton>
    </>
)