import React from "react"
import {Fragment} from "react";

function Introduction(props: {img: any, alt: string}){
    return (
            <img src={require("../images/" + props.img)} alt={props.alt} className="object-contain h-1/2 w-screen "/>
    )
}

export default Introduction