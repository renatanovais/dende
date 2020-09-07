import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputText from '../../components/InputText';
import Header from '../../components/Header';
import { saveItem } from '../../redux/actions';

function NewProduct(props) {
  const history = useHistory();
  const { itemList, registerItem } = props;

  const [prepare, setPrepare] = useState();
  const [img, setImg] = useState();
  const [produce, setProduce] = useState();
  const [date, setDate] = useState();
  const [item, setItem] = useState();

  return (
    <React.Fragment>
      <Header />
      <React.Fragment>
        <h1>New Produto</h1>

        <Form.Row>
          <Form.Group>
            <Form.Label>Nome do Produto</Form.Label>
            <Form.Control placeholder="Produto" onChange={(e) => setItem(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Data de Cadastro</Form.Label>
            <Form.Control type="date" onChange={(e) => setDate(e.target.value)} />
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
            registerItem(itemList, item, date, produce, prepare, img);
            history.push('/fichas-tecnicas');
          }}
        >
          Ok
        </Button>
      </Form.Group>
      <Form.Group>
        <Button
          className="button-verde"
          type="button"
          onClick={() => history.push('/fichas-tecnicas/details')}
        >
          Detalhes
        </Button>
      </Form.Group>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  itemList: state.registerReducer.itens,
});

const mapDispatchToProps = (dispatch) => ({
  registerItem: (itemList, item, date, produce, prepare, img) =>
    dispatch(saveItem(itemList, item, date, produce, prepare, img)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
