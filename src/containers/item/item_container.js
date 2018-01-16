import React from 'react';
import { connect } from 'react-redux';
import All from './all';
import Create from './create';
import Search from './search';
import {GetItems} from '../../actions/ItemActions';

class Item_container extends React.Component {
	constructor(props){
		super();
		props.GetItems();
	}
    render() {
	    return (
		 	<div className="container">
		 		<h1>Item Page</h1>
		      	<div className="row">
		      		<div className="col-md-8 ">
		      			<Search  />
		      			{this.props.items.length > 0 ? 
		      				
		      				(

		      					<All />
		      				):
		      				<h2>No Items , Please Add Item</h2>
		      			}
			      	</div>

			      	<div className="col-md-4">
			      		<Create/>
			      	</div>
			      	
		      	</div>
		    </div>
	    );
    }
}
const mapStateToProps = state => {
  return {
    items: state.ItemReducer.item_data
  }
}
const mapDispatchToProps = dispatch => {
  return {
    GetItems:() => {
      dispatch(GetItems())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Item_container)
