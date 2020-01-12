import React from "react";
import { withRouter  } from 'react-router-dom';
import Header from './Components/Header'
import TableMain from './Components/Table'
import FormMain from './Components/Form'
import {Container, Text} from './style'

function App ()  {
    return(
        <Container>
        <Header></Header>
        <Text>Livros Cadastrados</Text>
        <TableMain></TableMain>
        <Text>Cadastro de Livros</Text>
        <FormMain></FormMain>
        </Container>
    )
}

export default withRouter(App);