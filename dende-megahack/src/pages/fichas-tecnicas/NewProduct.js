import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputText from '../../components/InputText';
import Header from '../../components/Header';
import { saveItem } from '../../redux/actions';


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

  useEffect(() => {
    setDate(getDate(actualDate).saveData);
    setFormatDate(getDate(actualDate).showData);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <React.Fragment>
        <h1>Adicionar Produto</h1>
        <Form.Row>
          <Form.Group>
            <Form.Label>Nome do Produto</Form.Label>
            <Form.Control placeholder="Produto" onChange={(e) => setNameProduct(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Data de Cadastro</Form.Label>
            <p>{formatDate}</p>
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

      <Form.Group>
        <Form.Label>Rendimento</Form.Label>
        <Form.Control onChange={(e) => setProduce(e.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Modo de Preparo</Form.Label>
        <Form.Control as="textarea" rows="3" onChange={(e) => setPrepare(e.target.value)} />
      </Form.Group>

      <Form.Control
        placeholder="URL da Imagem do seu Produto"
        onChange={(e) => setImg(e.target.value)}
      />
      <Link to="https://pt-br.imgbb.com/">Saiba como obter a URL da sua imagem</Link>
      <Form.Group>
        <Button
          className="button-verde"
          type="button"
          onClick={() => {
            registerItem(itemList, nameProduct, date, produce, prepare, img);
            history.push('/fichas-tecnicas');
          }}
        >
          Salvar
        </Button>
      </Form.Group>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  itemList: state.registerReducer.itens,
});

const mapDispatchToProps = (dispatch) => ({
  registerItem: (itemList, nameProduct, date, produce, prepare, img) =>
    dispatch(saveItem(itemList, nameProduct, date, produce, prepare, img)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
