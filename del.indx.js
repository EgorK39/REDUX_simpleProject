// создаю state приложения
const state = [
    {
        id: 1, // для идентицикации задачи
        task: "Do homework", // название задачи
        completed: true // состояние задачи
    },
    {
        id: 2, // для идентицикации задачи
        task: "Kaufe das Brot", // название задачи
        completed: false // состояние задачи
    }
]

// добавление действий
const action = {
    // обязательное поле type
    type: "ADD_TODO",
    task: "Lerne die neuen Wörter",
    id: 3,
}

function reducer(currentState, action) {
    switch (action.type) {
        case "ADD_TODO": {
            const newState = [
                ...currentState,
                {
                    id: action.id,
                    task: action.task,
                    completed: false
                }

            ]
            return newState
        }
        default:
            return currentState
    }
}