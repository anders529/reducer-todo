import React from "react"
const ToDo = props => {
    return (
        <>
            {props.state.map(item => {
                return(
                   <div onClick={()=> props.render(item.id)}
                        key={item.id}>
                        <p>{item.item}</p>
                   </div>
            )})}
        </>
    )};
export default ToDo;
