import React from 'react';
import { connect } from 'react-redux';

import { SearchByName } from '../../actions/ItemActions';



export class Search extends React.Component {
	HandleSearch(event){
		this.props.SearchByName(event.target.value);
	}

    render() {
	    return (
	    	<div className="top_part">
		     	<div className="form-group">
					<label htmlFor="name">Search By Name </label>
					<input 	type="text" 
							className="form-control" 
							id="name" 
							aria-describedby="nameHelp" 
							placeholder="Enter Item Name"
							value={this.props.item.search}
							onChange={(event)=>this.HandleSearch(event)}
					/>
				</div>
			</div>
	    );
    }
}

const mapStateToProps  = (state)=>{
    return {
       item: state.ItemReducer
    }
};
const mapDispatchToProps = dispatch => {
  return {
    SearchByName:(name) => {
      dispatch(SearchByName(name))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);