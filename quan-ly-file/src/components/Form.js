import React, {Component} from "react";
import _ from 'lodash';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: (this.props.id_max +1),
        id_parent: this.props.idSeft,
        name: '',
        type: '',
        created_at: {},
        updated_at: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event){
      const {id, name, type, id_parent, created_at, updated_at } = this.state;
      let itemAdd = {
        id: id,
        id_parent: id_parent,
        name: name,
        type: type,
        created_at: created_at,
        updated_at: new Date(),
      }
      this.props.onAdd(itemAdd);
      event.preventDefault();
  }
  
  handleCancel(){
    this.props.onClickCancel();
  }
  componentDidMount(){
    const {itemEdit} = this.props; 
    if( !(_.isEmpty(itemEdit)) ){
      this.setState({ 
        id: itemEdit.id,
        id_parent: itemEdit.id_parent,
        name: itemEdit.name,
        type: itemEdit.type,
        created_at: itemEdit.created_at
      })
    }
  }

  render() {
    const {name, type } = this.state;
    return (
      <div>
        <form className="form-general" onSubmit = {this.handleSubmit}>
          <label> Tên </label>
          <input name="name" value={name} onChange={this.handleChange} />

          <label> Loại </label>
          <input name="type" value={type} onChange={this.handleChange} />
          
          <button type="submit" className="primary" > Xác nhận </button>
          <button className ="secondary" onClick = {this.handleCancel}> Cancel </button>
        </form>
      </div>
    );
  }
}

export default Form;