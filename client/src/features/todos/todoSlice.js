import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 0, text: 'walk dog'}, {id: 1, text: 'get groceries'}]
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addTodo: (state, action) => {
            state.todos = [
                ...state.todos,
                {
                    id: state.todos.length,
                    text: action.payload
                }
            ];
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(({id}) => id !== action.payload);
        },
    },
});

export const {addTodo, removeTodo} = todosSlice.actions

export const selectTodos = (state) => state.todos.todos

export default todosSlice.reducer;