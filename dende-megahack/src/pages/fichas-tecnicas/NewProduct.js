import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputText from '../../components/InputText';
import Header from '../../components/Header';
import { saveItem } from '../../redux/actions';
import '../../css/products.css';
import returnLogo from '../../images/icons/return-verde.svg';



const getDate = (actualDate) => {
  const actualDay = actualDate.getDate();
  const actualMonth = (actualDate.getMonth() + 1);
  const actualYear = actualDate.getFullYear();
  return {
    showData: `${actualDay} / ${actualMonth} / ${actualYear}`,
    saveData: `${actualYear}-${actualMonth}-${actualDay}`,
  }
}

function NewProduct(props) {
  const history = useHistory();
  const actualDate = new Date();
  const { itemList, registerItem } = props;

  const [nameProduct, setNameProduct] = useState();
  const [date, setDate] = useState();
  const [formatDate, setFormatDate] = useState();
  const [produce, setProduce] = useState();
  const [prepare, setPrepare] = useState();
  const [img, setImg] = useState();

  const [method, setMethod] = useState('');
  const [total, setTotal] = useState(0);
  const [productPrice, setProductPrice] = useState();

  const [saveDisable, setSaveDisable] = useState(true);

  useEffect(() => {
    setDate(getDate(actualDate).saveData);
    setFormatDate(getDate(actualDate).showData);
  }, []);

  useEffect(() => {
    itemList.forEach((item) => calcCost(item.quantity, item.price));
    methodsCalc(method);
  }, [itemList])

  useEffect(() => {
    if (method, productPrice, nameProduct, itemList, produce, prepare) setSaveDisable(false);
  }, [method, productPrice, nameProduct, itemList, produce, prepare ])
  
  function calcCost(quantity, price) {
    const value = quantity * price;
    setTotal(total + value);
    // methodsCalc(method);
  };

  const methodsCalc = (meth) => {
    if (meth === 'TRA') return setProductPrice(3 * total);
    if (meth === '2x') return setProductPrice(2 * total);
    if (meth === '80%') return setProductPrice(1.8 * total);
  }

  return (
    <React.Fragment>
      <Header />
      <div className="products-list-header">
        <h4 className="products-list-title">Adicionar Ficha Técnica</h4>
        <Link className="add-button-product" to="/fichas-tecnicas">
          <img alt="Voltar" src={returnLogo} height="95" />
          <p>Voltar</p>
        </Link>
      </div>
      <div className="add-product-container">
        <React.Fragment className="">
          <Form.Row className="row-form">
            <Form.Group>
              <Form.Label className="label-form">Nome do Produto</Form.Label>
              <Form.Control placeholder="Produto" onChange={(e) => setNameProduct(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label-form">Data de Cadastro</Form.Label>
              <p className="date-info">{formatDate}</p>
            </Form.Group>
          </Form.Row>
        </React.Fragment>

        <InputText item="Ingrediente" qtde="Quantidade" unidade="Unidade" preco="Preço" />
        {itemList.length > 0 ? (
          <div>
            {itemList.map((item) =>
              item > 0 && item < 1 ? (
                <InputText />
              ) : (
                <InputText item="Ingrediente" qtde="Quantidade" unidade="Unidade" preco="Preço" />
              ),
            )}
          </div>
        ) : (
          false
        )}
        <Form.Control className="button-verde" as="select" onChange={(e) => {
          setMethod(e.target.value)
          methodsCalc(e.target.value)
        }}>
          <option value="metodo">Método de Cálculo</option>
          <option value="TRA">TRA</option>
          <option value="2x">2x</option>
          <option value="80%">80%</option>
        </Form.Control>
        {method !== '' && (
          <div>
            <h5>Preço do produto: {productPrice} </h5>
          </div>
        )}
        <Form.Group>
          <Form.Label className="label-form">Rendimento</Form.Label>
          <Form.Control onChange={(e) => setProduce(e.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Label className="label-form">Modo de Preparo</Form.Label>
          <Form.Control as="textarea" rows="3" onChange={(e) => setPrepare(e.target.value)} />
        </Form.Group>

        <Form.Control
          placeholder="URL da Imagem do seu Produto"
          onChange={(e) => setImg(e.target.value)}
        />
        <Form.Text className="text-muted">
          <a className="info-link" target="blank" href="https://pt-br.imgbb.com/">Saiba como obter a URL da sua imagem</a>
        </Form.Text>
        <Form.Group className="product-save-button">
          <Button
            className="button-verde"
            type="button"
            disabled={saveDisable}
            onClick={() => {
              registerItem(itemList, nameProduct, date, produce, prepare, img, productPrice);
              history.push('/fichas-tecnicas');
            }}
          >
            Salvar
          </Button>
        </Form.Group>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  itemList: state.registerReducer.itens,
});

const mapDispatchToProps = (dispatch) => ({
  registerItem: (itemList, nameProduct, date, produce, prepare, img, productPrice) =>
    dispatch(saveItem(itemList, nameProduct, date, produce, prepare, img, productPrice)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
