import React from "react";

function Title(props: {title:string}){
    return(
            <div id="title" className="text-2xl sm:text-4xl p-16">
                {props.title}
            </div>
    )
}

export default Title
