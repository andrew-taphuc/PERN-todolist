import React, {Fragment, useState} from "react";

const EditTodo = ({todo}) => {
    const [description, setDescripton] = useState(todo.description);

    //edit description func

    const updateDescription = async (e) => {
        e.preventDefault();
         try {
            const body = { description };
            const respond = await fetch(`http://localhost:5005/todos/, {
                method:"PUT",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            window.location = "/";
         } catch (err) {
            console.error(err.message);
         }
    };
    return(
        <Fragment>
<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
  Edit
</button>

<div class="modal fade" id={`id${todo.todo_id}`} onClick={() => setDescripton(todo.description)}>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={() => setDescripton(todo.description)}></button>
      </div>
      <div class="modal-body">
        <input type="text" className="form-control" value={description} onChange={e => setDescripton(e.target.value)}/>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-bs-dismiss="modal" onClick={e => updateDescription(e)}>Edit</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => setDescripton(todo.description)}>Close</button>

      </div>

    </div>
  </div>
</div>
        </Fragment>
    )
};

export default EditTodo;