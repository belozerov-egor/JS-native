import React from "react";
import {ManType} from "./destructuring assignment.test";

type PropsType = {
title: string
    man: ManType
}

export const  ManComponent: React.FC<PropsType> = (props) => {
    const {title} = props
    const {name}= props.man

    // Можно еще вот так const {title, man: {name}}=props

return <div>
    <h1>{props.title}</h1>
    <hr/>
    <div>{props.man.name}</div>
</div>
}