import React from 'react';
import { connect } from 'react-redux';
import {AddItem} from '../../actions/ItemActions';




class Create extends React.Component {

	AddItem(event){
		event.preventDefault();
        
		var item={
			name:this.refs.name.value,
			desc:this.refs.description.value,
			price:this.refs.price.value,
			image:this.refs.file.files[0]
		};
		 this.props.AddItem(item);
		this.refs.name.value = '';
		this.refs.description.value = '';
		this.refs.price.value = '';
		
	}
	render() {
	    return (
	    	<div className="top_part create_item_part">
	    		<h1>Add New Item</h1>
			    <form onSubmit={(event)=>this.AddItem(event)} encType="multipart/form-data" >
					<div className="form-group">
					    <label htmlFor="name">Name</label>
					    <input type="text" className="form-control" ref="name" id="name" aria-describedby="nameHelp" placeholder="Enter Item Name"/>
					    <small id="nameHelp" className="form-text text-muted">Better to enter unique name</small>
					</div>
					<div className="form-group">
					    <label htmlFor="description">Description</label>
					    <input type="text" className="form-control" ref="description" id="description" placeholder="Enter Item Description"/>
					</div>
					<div className="form-group">
					    <label htmlFor="price">price</label>
					    <input type="number" className="form-control" ref="price" id="price" placeholder="12" min='0'/>
					</div>
					<div className="form-group">
					    <label htmlFor="file">Image</label>
					    <input type="file" name="file" className="form-control" ref="file" id="file" />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
	      </div>
	    );
	}
}

const mapDispatchToProps = dispatch => {
    return {
      AddItem: (item) => {
        dispatch(AddItem(item))
      },
    }
}

export default connect(null,mapDispatchToProps)(Create);
