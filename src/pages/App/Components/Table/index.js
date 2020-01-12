import { TableHead, Table, TableRow, TableBody, TableCell, Button } from '@material-ui/core';
import React, { useState, useEffect, useMemo } from "react";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import api from '../../../../services/api';
import { Container } from './style';


debugger
function TableMain () {
    const [livros, setLivros] = useState([]);


    useEffect( () => { fetchData(livros) }, [] );

    const fetchData = async () => {
            const response = await api.get('/livro');
            setLivros(response.data) 
    }
    const delData = async(id) => {
        await api.delete('/livro/'+id)
        fetchData();
      }

      const updData = async(id, key, event) => {
        //await api.delete('/livro/'+id)

        debugger
        //const index = livros.findIndex(livro);

        let livros2 = [...livros]
        livros2[key][event.target.name] = event.target.value

        console.log(livros2)

        await api.put('/livro/'+id, livros2[key])

        
        //livros.splice(index, 1)
  
        //setLivros(livros)
        //fetchData();
      }
        
    return(
    <Container>
    <Table aria-label="simple table">
    <TableHead><TableRow>
        <TableCell></TableCell>
        <TableCell align="left">Código</TableCell>
        <TableCell align="left">Título</TableCell>
        <TableCell align="left">Autor</TableCell>
        <TableCell align="left">Ano</TableCell>
        </TableRow> 
    </TableHead>
    <TableBody>
    {livros.map( (livro, key) => (
        <TableRow key={livro.id} scope="row">
          <TableCell><Button onClick={() => delData(livro.id)}><DeleteOutlinedIcon/></Button></TableCell>    
        <TableCell align="left">{<input defaultValue={livro.codigo}  
        onChange={ (e) => (updData(livro.id,key, e)) } name="codigo" type="number"/> }</TableCell>
        <TableCell align="left">{<input defaultValue={livro.titulo}  
        onChange={ (e) => (updData(livro.id,key, e)) } name = "titulo"/> }</TableCell>
        <TableCell align="left">{<input defaultValue={livro.autor}  
        onChange={ (e) => (updData(livro.id,key, e))} name="autor"/>}</TableCell>
        <TableCell align="left">{<input defaultValue={livro.ano}  
        onChange={ (e) => (updData(livro.id,key, e)) } name="ano" type="number"/> }</TableCell>
        </TableRow>
    ))}
    </TableBody>
    </Table>
    </Container>
    );

}


export default TableMain;