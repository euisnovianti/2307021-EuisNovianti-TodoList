import { useState } from "react";

const TodoList = ({ todos }) => {
    const [showAlert, setShowAlert] = useState(false);

    const handleDeleteClick = (todo) => {
        setSelectedTodo(todo);
        showAlert(true);

    }

    const comfirnDelete = () => {
        setShowAlert(false);
        setSelectedTodo(null);
    }

    if (todos.length === 0) {
        return (
            <div className="mt-6">
                <div className="bg-teal-50 border border-teal-300 rounded p-6">
                    <h2 className="text-lg font-semibold text-teal-800 mb-2">No todos to display</h2>
                    <p className="text-teal-700"> please add some todos to get started!</p>
                    </div>
                    </div>
        )
    }

    return (
        <div className="mt-6">
            {showAlert && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
                        <h3 className="text-lg font-semibold mb-2">Delete Todo</h3>
                            <p className="text-gray-700">
                            Are you sure you want to delete this todo?
                            </p>
                            <div className="mt-4 flex justify-end space-x-2">
                                <button
                                onClick={cancelDelete}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>

    )}

    <div className="space-y-4">
        {todos.map((todo) => (
            <div
            key={todo.id}
            className="bg-white shadow-md rounded p-4 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold">{todo.judul}</h3>
                    <p className="text-gray-600">deskripsi : {todo.deskripsi}</p>
                </div>
                <button
                onClick={() => handleDeleteClick(todo)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                </button>
            </div>
        ))}
    </div>
        </div>
    )
}
export default TodoList;




            