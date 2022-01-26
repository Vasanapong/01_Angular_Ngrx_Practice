import { Action, createAction, createReducer, on,props } from "@ngrx/store";

const initialState = {
    title : 'Hello Ngrx',
    counter : 10
}

const _reducer = createReducer(
    initialState,
    on(createAction(
        'RANDOM_NUMBER',
        props<{ payload : any}>()
        ),
        (state,{payload})=>({...state,counter:payload})
    )
)

const reducer = (state: any, action: Action) => _reducer(state,action)

export default reducer