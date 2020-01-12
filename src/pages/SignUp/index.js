import { Container, Form } from './styles';
import React, { Component } from 'react';
import { Link, withRouter  } from 'react-router-dom';

import api from '../../services/api';

class SignUp extends Component {
    state = {
        username:"",
        email:"",
        password:"",
        error: ""
    };

    handleSignUp = async e => {
        e.preventDefault();
        const { username, email, password } = this.state;
        if (!username || !email || !password){
            this.setState({error: "Preencha todos os campos para se cadastrar"});
        }
        else {
            try{
                await api.post("/users", { username, email, password });
                this.props.history.push("/");
            }
            catch(err){
                this.setState({ error: "Ocorreu um erro ao registrar sua conta: "+ err });
            }
        }
      };

    render() {
        return(
            <Container>
                <Form onSubmit={this.handleSignUp}>
                {this.state.error && <p>{this.state.error}</p>}
                    <input type="text"
                    placeholder="Usuário"
                    onChange={e => this.setState({username: e.target.value})}/>

                    <input type="email"
                    placeholder="Email"
                    onChange={e => this.setState({email: e.target.value})}/>

                    <input type="password"
                    placeholder="Senha"
                    onChange={e => this.setState({password: e.target.value})}/>

                    <button type="submit">Cadastrar</button>
                    <Link to="/">Fazer login</Link>
                </Form>
            </Container>
    );
    }
}

export default withRouter(SignUp);
//adiciona a propriedade history que possibilita mudar de página.