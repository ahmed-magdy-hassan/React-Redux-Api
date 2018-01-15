const Item = {
    item_data: '',
    search:'',
    item_edit:{
        item_id:'',
        active_edit:false
    }
};
const ItemReducer = (state = Item, action) =>{
    switch (action.type) {
        case "GETITEMS":
              state = {
                ...state,
                item_data: [...state.item_data,action.payload]
            };
            break;
        case "CLEARITEMSTATE":
              state = {
                ...state,
                item_data: action.payload
            };
            break;
        case "SEARCH_ITEM":
              state = {
                ...state,
                search: action.payload
            };
            break;
        case "AddItem":
              state = {
                ...state,
                item_data: [...state.item_data,action.payload]
            };
            break;
        case "Delete_Item":
              state = {
                ...state,
                item_data: [
                    ...state.item_data.filter(item => item.id === action.payload)
                ]
            };
            break;
        case "Edit_Item_active":
              state = {
                ...state,
                item_edit: {
                    item_id: action.item_id,
                    active_edit: action.active_edit
                }
            };
            break;
         case "Edit_Item":
               var item_data =  state.item_data.map(item => {
                    if (item.id === action.id) {
                        console.log(item[action.col]);
                         item[action.col] = action.value;
                    }
                   return item;
                });

              state = {
                ...state,
                item_data: item_data
            };
            break;
        default:
            return state;
    }

    return state;
};

export default ItemReducer;

