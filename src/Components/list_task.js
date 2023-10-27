import { useDispatch, useSelector } from 'react-redux'
import { Del } from '../reducers/task_slice';
function ListTask(props) {
    const dispatch=useDispatch();
    const tasks=useSelector((state)=>state.task.list);

    const delTask=(name)=>{
        dispatch(Del(name));
    }
    return (
        <>
            <table class="unique-table">
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(function (showTask, idTask) {
                            return (
                                <>
                                    <tr>
                                        <td>{showTask}</td>
                                        <td><button onClick={() =>delTask(showTask)}>Xóa</button></td>
                                    </tr>
                                </>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    )
}
export default ListTask;