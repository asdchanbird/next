import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: [
            {id: 1, name: "first todo on redux"},
            {id: 2, name: "second todo in list"},
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
        }
    }
})

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;