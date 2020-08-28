import React from 'react'
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as prodActions from '../redux/actions/productAdd.action'
import AddProductForm from './AddProductForm'


class AddProductPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AddProductForm onSave={this.addMyProduct}/>
        );
    }
}


// const mapDispatchToProps = dispatch => {
//     return {
//         actions: bindActionCreators(prodActions, dispatch) 
//       };
//   }

function mapDispatchToProps(dispatch) {
    return {
      addMyProduct: (prod) => { dispatch(prodActions.addProduct(prod)); }
    };
  }

export default connect(null, mapDispatchToProps)(AddProductPage)