import { createSlice } from "@reduxjs/toolkit";

export const todoSlider=createSlice({
    name:'todo',
    initialState:{
        todoList:[
        ]
    },
    reducers:{
        addToDo:(state,action)=>{
            let newTodoList={
                id:Math.random(),
                content:action.payload.newContent
            }
            state.todoList.push(newTodoList);
        },
        deleteToDo:(state,action)=>{
            let{todoList}=state;
            state.todoList=todoList.filter((item)=>item.id!==action.payload.id)
        },
        editToDo:(state,action)=>{
            let{todoList}=state;
            state.todoList=todoList.map((item)=>item.id===action.payload.id?action.payload:item);
        }
    },
})


export const{addToDo,deleteToDo,editToDo}=todoSlider.actions

export default todoSlider.reducer;