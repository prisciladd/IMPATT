import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Styles } from './Styles';

function createData(name, Período, Curso, Turma, Série, Situação) {
  return { name, Período, Curso, Turma, Série, Situação };
}

const rows = [
  createData(
    <Link to="/Boletim">
      <button className="btn btn-boletim">
      <span className="visualization">Visualizar </span>
      <img src="/search.png" alt="Ícone de pesquisa" />
      </button>
      </Link>,'2023/1','Curso de Sistemas de Informação','SI 8A NOITE','8º Semestre','Ativa'),
  createData(
    <Link to="/Boletim">
      <button className="btn btn-boletim">
      <span className="visualization">Visualizar </span>
      <img src="/search.png" alt="Ícone de pesquisa" />
      </button>
    </Link>,'2022/2','Curso de Sistemas de Informação','SI 7A NOITE','7º Semestre','Concluída'),
  createData(
    <Link to="/Boletim">
      <button className="btn btn-boletim">
      <span className="visualization">Visualizar </span>
      <img src="/search.png" alt="Ícone de pesquisa" />
      </button>
    </Link>,'2022/1','Curso de Sistemas de Informação','SI 6A NOITE','6º Semestre','Concluída'),
  createData(
    <Link to="/Boletim">
      <button className="btn btn-boletim">
      <span className="visualization">Visualizar </span>
      <img src="/search.png" alt="Ícone de pesquisa" />
      </button>
    </Link>,'2021/2','Curso de Sistemas de Informação','SI 5A NOITE','5º Semestre','Concluída'),
  createData(
    <Link to="/Boletim">
      <button className="btn btn-boletim">
      <span className="visualization">Visualizar </span>
      <img src="/search.png" alt="Ícone de pesquisa" />
      </button>
    </Link>,'2021/1','Curso de Sistemas de Informação','SI 4B NOITE','4º Semestre','Concluída'),
  createData(
    <Link to="/Boletim">
      <button className="btn btn-boletim">
      <span className="visualization">Visualizar </span>
      <img src="/search.png" alt="Ícone de pesquisa" />
      </button>
    </Link>,'2020/2','Curso de Sistemas de Informação','SI 3B NOITE','3º Semestre','Concluída'),
  createData(
    <Link to="/Boletim">
      <button className="btn btn-boletim">
      <span className="visualization">Visualizar </span>
      <img src="/search.png" alt="Ícone de pesquisa" />
      </button>
    </Link>,'2020/1','Curso de Sistemas de Informação','SI 2B NOITE','2º Semestre','Concluída'),
  createData(
    <Link to="/Boletim">
      <button className="btn btn-boletim">
      <span className="visualization">Visualizar </span>
      <img src="/search.png" alt="Ícone de pesquisa" />
      </button>
    </Link>,'2019/2','Curso de Sistemas de Informação','SI 1B NOITE','1º Semestre','Concluída'),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 375 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">Período</TableCell>
            <TableCell align="center">Curso</TableCell>
            <TableCell align="center">Turma</TableCell>
            <TableCell align="center">Série</TableCell>
            <TableCell align="center">Situação da Matrícula</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <Styles>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              </Styles>
              <TableCell align="center">{row.Período}</TableCell>
              <TableCell align="center">{row.Curso}</TableCell>
              <TableCell align="center">{row.Turma}</TableCell>
              <TableCell align="center">{row.Série}</TableCell>
              <TableCell align="center">{row.Situação}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}