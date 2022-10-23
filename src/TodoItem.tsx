interface Props {
    item: Item;
    setItems: any
}

type Item = {
    id: number;
    text: string;
    completed: boolean;
};

function TodoItem({item, setItems}: Props) {
    const updatedTask = {...item, completed: !item.completed}
    const toggleComplete = (updatedTask: Item) => {
        setItems((prevState: Item[]) => {
            return prevState.map((task: Item) => {
                if (task.id === updatedTask.id) {
                    return updatedTask
                }
                return task
            })
        })
    }

    const onDelete = () => {
        setItems((prevState: Item[]) => prevState.filter((task: Item) => task.id !== item.id))
    };

    return (
        <div>
            <input type={"checkbox"}
                   onChange={() => toggleComplete(updatedTask)}
                   checked={item.completed}
            />
            <span style={{textDecorationLine: item.completed ? 'line-through' : ''}}>{item.text}</span>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default TodoItem;