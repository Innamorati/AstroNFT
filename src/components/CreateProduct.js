import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProductActions from '../redux/actions/ProductActions';
import BasicModal from './ModalEdit';
import '../styles/StyleAdmin.css'

function CreateProduct(props) {
  const [reload, setReload] = useState(false);

  useEffect(async () => {
    await props.getAllProducts();
  }, [reload]);

  async function handleAddProduct(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target))
    // console.log(data);
    await props.addProduct(data);
    setReload(!reload);
  }

  async function handleDeleteProduct(event) {
    // console.log(event.target.id)
    await props.deleteProduct(event.target.id)
    setReload(!reload);
  }

  async function handleEditProduct(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target))
    props.updateProduct(event.target.id, data)
    // console.log(data);
    setReload(!reload);
  }


  return (
    <div>

    </div>


  )
}

const mapDispatchToProps = {
  getAllProducts: ProductActions.getAllProducts,
  addProduct: ProductActions.addProduct,
  deleteProduct: ProductActions.deleteProduct,
  updateProduct: ProductActions.updateProduct,
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.ProductReducer.allProducts,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);