import React from "react"

function Article(props:{children:any}){

    return(
        <div className="bg-accent-col mx-8 sm:mx-12">
            {props.children}
        </div>
    )

}

export default Article