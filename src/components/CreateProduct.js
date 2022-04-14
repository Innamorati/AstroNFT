import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProductActions from '../redux/actions/ProductActions';
import BasicModal from './ModalEdit';

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
      <BasicModal buttonName='Crear NFT'>
        <form onSubmit={handleAddProduct} style={{
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 100
        }}>
          <input style={{ width: 200 }} placeholder='Name' type="text" name='name' />
          <input style={{ width: 200 }} placeholder='Price' type="text" name='price' />
          <input style={{ width: 200 }} placeholder='Creator' type="text" name='creator' />
          <input style={{ width: 200 }} placeholder='file' type="text" name='file' />
          <textarea name="description" id="" cols="30" rows="10" defaultValue={'Agregar descripcion'}></textarea>
          <input style={{ width: 200 }} placeholder='owner' type="text" name='owner' />
          <input style={{ width: 200 }} placeholder='red' type="text" name='red' />
          <input style={{ width: 200 }} placeholder='contract address' type="text" name='contractAddress' />
          <input style={{ width: 200 }} placeholder='category' type="text" name='category' />
          <input style={{ width: 200 }} placeholder='file type' type="text" name='fileType' />
          <button type='submit'>Cargar</button>
        </form>
      </BasicModal>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        {
          props.allProducts?.map((product, index) =>
            <div>
              <p>{product.name}</p>
              <button onClick={handleDeleteProduct} id={product._id}>Eliminar</button>
              <BasicModal buttonName='Editar'>
                <form id={product._id} onSubmit={handleEditProduct} action="">
                  <input style={{ width: 200 }} defaultValue={product.name} placeholder='Name' type="text" name='name' />
                  <input style={{ width: 200 }} placeholder='Price' type="text" name='price' />
                  <input style={{ width: 200 }} placeholder='Creator' type="text" name='creator' />
                  <input style={{ width: 200 }} placeholder='file' type="text" name='file' />
                  <textarea name="description" id="" cols="30" rows="10" defaultValue={product.description}></textarea>
                  <input style={{ width: 200 }} placeholder='owner' type="text" name='owner' />
                  <input style={{ width: 200 }} placeholder='red' type="text" name='red' />
                  <input style={{ width: 200 }} placeholder='contract address' type="text" name='contractAddress' />
                  <input style={{ width: 200 }} placeholder='category' type="text" name='category' />
                  <input style={{ width: 200 }} placeholder='file type' type="text" name='fileType' />
                  <button type='submit'>Cargar</button>
                </form>
              </BasicModal>
            </div>
          )
        }
      </div>
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