 import React, {Fragment, useState} from "react";

 const InputTodo = () => {
    const [description, setDescripton] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {description};
            const respond = await fetch("http://localhost:5005/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/"; //refresh after sent
        

            console.log(respond);  
        } catch (err) {
            console.error(err.message);
        }
    }

    return(
        <Fragment>
            <h1 className ="text-center mt-5">Pern Todo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value ={description} onChange={e => setDescripton(e.target.value)}/>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
 };

 export default InputTodo;