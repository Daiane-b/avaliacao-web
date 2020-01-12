import React, { useState, useEffect, useCallback } from "react";
import { Form } from "../../../SignIn/style";
import api from '../../../../services/api';
import { Container } from './style'

function FormMain () {
    const [state2, setState2] = useState([]);

    const [erro, setErro] = useState('')
    
    const handleInput = useCallback ((event) => {
        event.persist();
        setState2(inputs => ({...inputs, [event.target.name]: event.target.value}));
      }, [state2])
      const postData = async() => {
        if (!state2.codigo || !state2.titulo || !state2.ano || !state2.autor){
          setErro('Preencha todos os campos para cadastrar');
        }
        else {
          const response = await api.post('/livro', state2)

          console.log(response);
  
          //setLivros(inputs => ({...inputs, response}));
        }
        
      }


    return (     
    <Container> 
        <Form onSubmit={postData}> 
            {erro && <p>{erro}</p>}
                    <input 
                        type="text"placeholder="Código" name="codigo"
                        onChange={handleInput}/>
    
                        <input type="text"
                        placeholder="Título"  name = "titulo"
                        onChange={handleInput}/>
    
                        <input type="text"
                        placeholder="Autor" name = "autor"
                        onChange={handleInput}/>
    
                        <input type="text"
                        placeholder="Ano" name = "ano"  
                        onChange={handleInput}/>
                <button type="submit">+</button>
        </Form>
    </Container>
            )
        
}

export default FormMain;