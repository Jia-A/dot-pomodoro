import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const TaskContext =  createContext();

const TaskProvider = ( { children } ) => {
    const [ tasks, setTasks ] = useState([]);
    const [editing, setEditing] = useState(false);
    const navigate = useNavigate();
    const [ singleTask, setSingleTask ] = useState({
        name : "",
        duration : 0,
        description : "",
    })

    const taskCollectionResponse = collection(db, "tasks");

   
  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(taskCollectionResponse);
      setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTasks();
  }, []);

  const createTask = async () => {
    const docResponse = await addDoc(taskCollectionResponse, {
      name: singleTask.name,
      duration : singleTask.duration,
      description : singleTask.description,
    });
    setTasks((value) => [
      ...value,
      {
        id: docResponse.id,
        name: singleTask.name,
        duration : singleTask.duration,
        description : singleTask.description,
      },
    ]);
    setSingleTask({
        name : "",
        duration : 0,
        description : "",
    });
  };

  const deleteTask = async (id) => {
    const selectedDocResponse = doc(db, "tasks", id);
    await deleteDoc(selectedDocResponse);
    const tasksAfterDelete = tasks.filter((task) => task.id !== id);
    setTasks(tasksAfterDelete);
  };

  const editTask = async (id) => {
    const selectedDocResponse = doc(db, "tasks", id);
    const dataToUpdate = {
        name: singleTask.name,
        duration : singleTask.duration,
        description : singleTask.description,
    };
    await updateDoc(selectedDocResponse, dataToUpdate);
    const tasksAfterUpdate = tasks.map((task) => task.id === id ? {...singleTask, id: id, updatedOn: new Date()} : task);
    setTasks(tasksAfterUpdate);
    setEditing(false);
    setSingleTask({
        name : "",
        duration : 0,
        description : "",
    });
    navigate("/homepage")
  };

    return (
        <TaskContext.Provider value={{
            tasks,
            setTasks,
            singleTask,
            setSingleTask,
            createTask,
            deleteTask,
            editTask,
            editing,
            setEditing}}>{children}</TaskContext.Provider>
    )
}

const useTask = () => useContext(TaskContext);

export { TaskProvider, useTask };