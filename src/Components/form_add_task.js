import { useDispatch } from 'react-redux'
import { Add } from '../reducers/task_slice';
import React, { useState } from 'react';
function FormAddTask(props) {

    const [inputvalue, setInputValue] = useState(null)
    const dispatch = useDispatch();

    const addTask = () => {
        if (inputvalue === null || inputvalue === "") {
            alert("Không Thể Để Trống");
        }
        else {
            dispatch(Add(inputvalue));
            setInputValue("");
        }

    }

    const OnchaneInputHande = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <input type="text" class="input-text" placeholder="Nhập văn bản" value={inputvalue} onChange={OnchaneInputHande} />
            <button onClick={addTask}>Lưu</button>
        </>
    )
}
export default FormAddTask;