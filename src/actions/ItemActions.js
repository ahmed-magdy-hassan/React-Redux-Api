import axios from "axios";


export function GetItems(){
			return (dispatch)=>{
				return axios.get('http://127.0.0.1:8000/api/items/all')
							.then(function(response){
								localStorage.setItem('items', JSON.stringify(response.data.item));
								dispatch(ClearState());
								response.data.item.map( 
										(data)=>{
											return dispatch(SetItemState(data));
										}  
									)
							})
							.catch(function (error) {
								console.log(error.response);
							});
			};



}

export function ClearState() {
	return {
		type: 'CLEARITEMSTATE',
		payload: {}
	}
}

export function SetItemState(item) {
	return {
		type: 'GETITEMS',
		payload: item
	}
}
export function AddItemToState(item) {
	return {
		type: 'AddItem',
		payload: item
	}
}

export function AddItem(item) {
		var formdata = new  FormData();
		formdata.append('image',item.image);
		formdata.append('name',item.name);
		formdata.append('desc',item.desc);
		formdata.append('price',item.price);

	return (dispatch)=>{
			return axios.post('http://127.0.0.1:8000/api/items/create', formdata,
			  {     
			    headers: { 'content-type': 'multipart/form-data' }
			  }
			  )
			  .then(function (response) {
				//dispatch(AddItemToState(response.data.item));	  
			  })
			  .catch(function (error) {
			    console.log(error.response.data);
			});
	};
}


export function SearchByName(name) {
	return {
		type: 'SEARCH_ITEM',
		payload: name
	}
}

export function DeleteItem(id) {
	return (dispatch)=>{
		return axios.delete('http://127.0.0.1:8000/api/items/delete/'+id)
					.then(function (response) {
						dispatch(Delete_Item_State(id));
						console.log(response);
					})
					.catch(function (error) {
					    console.log(error);
					});
	};
}
export function Delete_Item_State(id) {
	return {
		type: 'Delete_Item',
		payload: id
	}
}

export function Edit_Item_State(id,activation) {
	return {
		type: 'Edit_Item_active',
		item_id: id,
		active_edit:activation
	}
}

export function Edit_Item(id,col,value) {
	return {
		type: 'Edit_Item',
		id: id,
		col:col,
		value:value
		}
}


export function UpdateItemApi(item) {
	//console.log(item);
	return (dispatch)=>{
			return axios.put('http://127.0.0.1:8000/api/items/update/'+item.id, {
					name:item.name,
					desc:item.desc,
					price:item.price
			  },{
			  	 headers: {'Accept': 'application/json'}
			  }
			  )
			  .then(function (response) {
				console.log('done');
			  })
			  .catch(function (error) {
			    console.log(error.response);
			});

	};
}




















