export const dataReducer=(state, action)=>{
    switch(action.type){
        case "ADD_SHOE":
            return {data:[ action.payload, ...state.data]};
        case "DELETE_SHOE":
            return {
                data: state.data.filter((data)=>data.img!==action.payload),

            };
        default:
            return state;
    }
}