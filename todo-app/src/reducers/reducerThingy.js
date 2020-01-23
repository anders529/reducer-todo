export const initialState = [{id:{},item: 'Refactor Things Until They Break!',finished: false}];
export const ListItem = (state, action) => {
    switch(action.type) {
        case 'ADD-ITEM': return [...state,{item: action.payload, finished: false, id: Date.now()}];
        case 'FINISHED': return state.map(item =>{return item.id === action.payload?{...item,finished:!item.finished}:item});
        case 'DELETE': return state.filter(event=>!event.finished);
        default: {return state}
    }
};