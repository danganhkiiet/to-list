import FormAddTask from "../Components/form_add_task";
import ListTask from "../Components/list_task";
import React, { useState } from "react";
function Index(props) {

    // const [inputvalue, setInputValue] = useState(null);
    // const [task, setTask] = useState([]);
    // const Add = () => {
    //     if (inputvalue === null || inputvalue === "") {
    //         alert("Không Thể Để Trống");
    //     }
    //     else {
    //         setTask(task.concat(inputvalue));
    //         setInputValue("");
    //     }
    // }
    // const Del = (name) => {
    //     setTask(task.filter(showTask => showTask !== name));
    // }
    // const inputHande = (e) => {
    //     setInputValue(e.target.value);
    // }

    return (
        <>
            <div class="wrapper">
                <FormAddTask/>
                <ListTask/>
            </div>

        </>
    )
}
export default Index;