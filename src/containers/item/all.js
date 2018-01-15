import React from 'react';
import { connect } from 'react-redux';

import { DeleteItem , Edit_Item_State , Edit_Item , UpdateItemApi} from '../../actions/ItemActions';


 class All extends React.Component {
  HandelRemoveItem(id){
    this.props.DeleteItem(id);
  }

  HandelEditItem(id){
    if ( this.props.item.item_edit.active_edit === false ) {
      var Make_active = true;
      this.props.Edit_Item_State(id,Make_active);
    }else{
      var Make_deactive = false;
      this.props.Edit_Item_State('',Make_deactive);
      var item_Update_Info = {
          id:id,
          name:this.refs.name.value,
          desc:this.refs.desc.value,
          price:this.refs.price.value
      };
      this.props.UpdateItemApi(item_Update_Info);
    }
  }

  edittable(id,e){
      this.props.Edit_Item(id,e.target.name,e.target.value );
  }


  render() {
     
      let items = this.props.item.item_data.filter(
            (item)=> {
                return item.name.toLowerCase().indexOf(this.props.item.search.toLowerCase()) !== -1;
              }
            
      );
  	  var AllItems =  items.map( (item,i)=>
  		(
          this.props.item.item_edit.item_id === item.id ? 
            (
              <tr key={i}>
                <td>{item.id}</td>
                <td> 
                  <div className="form-group">
                      <input  type="text" 
                              className="form-control" 
                              value={item.name} 
                              name="name" 
                              ref="name"
                              id="Name"
                              form="update_form"
                              onChange={(e)=>this.edittable(item.id,e)}
                        />
                  </div>
                </td>
                <td> 
                  <div className="form-group">
                      <input  type="text" 
                              className="form-control" 
                              value={item.desc} 
                              name="desc" 
                              ref="desc"
                              id="desc" 
                              form="update_form"
                              onChange={(e)=>this.edittable(item.id,e)}
                        />
                  </div>
                  </td>
                <td> 
                  <div className="form-group">
                      <input  type="text" 
                              className="form-control" 
                              value={item.price} 
                              name="price" 
                              ref="price"
                              id="price" 
                              form="update_form"
                              onChange={(e)=>this.edittable(item.id,e)}
                        />
                  </div>
                </td>
                <td><a onClick={()=>this.HandelRemoveItem(item.id)}><span className="glyphicon glyphicon-remove" ></span></a></td>
                <td>
                  <button type="submit" 
                          className="btn btn-defualt btn-xs"
                          form="update_form" 
                          onClick={
                                  ()=>{
                                       this.HandelEditItem(item.id);
                                      }
                                  }
                  >
                    <span className="glyphicon glyphicon-ok" ></span>
                  </button>
                </td>
               
              </tr>
            ) :  
            (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>{item.price}</td>
                <td><a onClick={()=>this.HandelRemoveItem(item.id)}><span className="glyphicon glyphicon-remove" ></span></a></td>
                <td><a onClick={()=>this.HandelEditItem(item.id)}><span className="glyphicon glyphicon-edit" ></span></a></td>
              </tr>
            )
  		) 
  	)


    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">Items</div>
            
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Desc</th>
                <th>Price</th>
                <th>Remove</th>
                <th>Edit</th>
              </tr>
            </thead>

            <tbody>
            
              {AllItems}
            </tbody>
          </table>
         
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.ItemReducer
  }
}
const mapDispatchToProps = dispatch => {
  return {
    DeleteItem:(id) => {
      dispatch(DeleteItem(id))
    },
    Edit_Item_State:(id,activation) => {
      dispatch(Edit_Item_State(id,activation))
    },
    Edit_Item:(id,col,value) => {
      dispatch(Edit_Item(id,col,value))
    },
     UpdateItemApi:(UpdatedItem) => {
      dispatch(UpdateItemApi(UpdatedItem))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(All);



