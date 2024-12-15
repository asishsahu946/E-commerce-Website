import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: [],
    loading: false,
    err: ""
}

export const getUsers = createAsyncThunk("user", async() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
})

const userSlice = createSlice({
    name:"user",
    initialState,
    extraReducers(builder) {
        builder.addCase(getUsers.pending,(state)=>{
            state.loading = true
        }).addCase(getUsers.fulfilled, (state, action)=> {
            state.loading =  false
            state.err = "",
            state.data = action.payload
        }).addCase(getUsers.rejected, (state, action)=> {
            state.loading =  false
            state.err = action.payload,
            state.data = []
        })
    }
})

export default userSlice.reducer