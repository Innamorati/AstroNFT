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
          <div className='cargaNFT'>
            <BasicModal buttonName='Crear NFT'>
                <form className='btnEdit' onSubmit={handleAddProduct}>
                    <div className='containerForm'>
                      <div className='divForm'>
                        <input className='form-input' placeholder='Name' type="text" name='name' />
                      </div>
                      <div className='divForm'>
                        <input className='form-input' placeholder='Price' type="text" name='price' />
                      </div>
                    </div>
                    <div className='containerForm'>
                      <div className='divForm'>
                        <input className='form-input' placeholder='Creator' type="text" name='creator' />
                      </div>
                      <div className='divForm'>
                        <input className='form-input' placeholder='file' type="text" name='file' />
                      </div>
                    </div>
                    <div className='containerForm'>
                      <div className='divForm'>
                        <textarea name="description" id="" className='textArea' placeholder='Agregar descripcion...'></textarea>
                      </div>
                    </div>
                    <div className='containerForm'>
                      <div className='divForm'>
                        <input className='form-input' placeholder='owner' type="text" name='owner' />
                      </div>
                      <div className='divForm'>
                        <input className='form-input' placeholder='red' type="text" name='red' />
                      </div>
                    </div>
                    <div className='containerForm'>
                      <div className='divForm'>
                        <input className='form-input' placeholder='contract address' type="text" name='contractAddress' />
                      </div>
                      <div className='divForm'>
                        <input className='form-input' placeholder='category' type="text" name='category' />
                      </div>
                    </div>
                    <div className='containerForm'>
                      <input  className='divForm form-input' placeholder='file type' type="text" name='fileType' />
                    </div>
                    <button className='containerForm btnCarga' type='submit'>Cargar</button>
                </form>
            </BasicModal>
          </div>
          <div className='styleAdmin'>
                {
                    props.allProducts?.map((product, index) =>
                        <div className='productAdmin'>
                            <div className='imgNFT'
                                style={{
                                    background: `url('${product.file}')`,
                                    backgroundPosition: "center",
                                    backgroundSize: 'cover',
                                    objectFit: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            />
                            <p>{product.name}</p>
                            <div className='btnCrud'>
                                <button className='btnDelete' onClick={handleDeleteProduct} id={product._id}>Eliminar</button>
                                  <BasicModal buttonName='Edit'>
                                      <form id={product._id} onSubmit={handleEditProduct} action="" className='btnEdit'>
                                        <div className='containerForm'>
                                          <div className='divForm'>
                                            <input className='form-input' defaultValue={product.name} placeholder='Name' type="text" name='name' />
                                          </div>
                                          <div className='divForm'>
                                            <input className='form-input' placeholder='Price' type="text" name='price' />
                                          </div> 
                                        </div>
                                        <div className='containerForm'>
                                          <div className='divForm'>
                                            <input className='form-input' placeholder='Creator' type="text" name='creator' />
                                          </div>
                                          <div className='divForm'>
                                            <input className='form-input' placeholder='file' type="text" name='file' />
                                          </div>
                                        </div>
                                        <div className='containerForm'>
                                          <div className='divForm'>
                                            <textarea className='textArea' name="description" id="" defaultValue={product.description} placeholder='Entra a message...'></textarea>
                                          </div>
                                        </div>
                                        <div className='containerForm'>
                                          <div className='divForm'>
                                            <input className='form-input' placeholder='owner' type="text" name='owner' />
                                          </div>
                                          <div className='divForm'>
                                            <input className='form-input' placeholder='red' type="text" name='red' />
                                          </div>
                                        </div>
                                        <div className='containerForm'>
                                          <div className='divForm'>
                                            <input className='form-input' placeholder='contract address' type="text" name='contractAddress' />
                                          </div> 
                                          <div className='divForm'>
                                            <input className='form-input' placeholder='category' type="text" name='category' />
                                          </div>
                                        </div>
                                          <div className='containerForm divForm'>
                                            <input className='form-input' placeholder='file type' type="text" name='fileType' />
                                          </div> 
                                          <button type='submit' className='containerForm btnCarga'>Cargar</button>
                                      </form>
                                  </BasicModal>
                          </div>
                      </div>
                    )
                }
            </div>
          )

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