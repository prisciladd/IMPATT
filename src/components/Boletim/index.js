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

function createData(Disciplina, Turma, Tipo, CH,MAC, PR, SUB, PAI, BO, TF, MF, Situação) {
  return { Disciplina, Turma, Tipo, CH,MAC, PR, SUB, PAI, BO, TF, MF, Situação };
}

const rows = [
  createData(
    'Atividades Complementares',              'SI 8A NOITE','Regular','200','','','','','',0,'','Indefinido'),
  createData(
    'Computação Cognitiva',                   'SI 8A NOITE','Regular','80','8,13','','','','',4,'','Indefinido'),
  createData(
    'Estágio Supervisionado',                 'SI 8A NOITE','Regular','320','','','','','',0,'','Indefinido'),
  createData(
    'Governança de TI',                       'SI 8A NOITE','Regular','80','8,75','','','','',0,'','Indefinido'),
  createData(
    'Sistemas Integrados de Gestão',          'SI 8A NOITE','Regular','80','4,50','','','','',0,'','Indefinido'),
  createData(
    'Trabalho de Conclusão de Curso - TCC II','SI 8A NOITE','Regular','80','5,70','','','','',16,'','Indefinido')
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 375 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Disciplina</TableCell>
            <TableCell align="center">Turma</TableCell>
            <TableCell align="center">Tipo</TableCell>
            <TableCell align="center">C.H.</TableCell>
            <TableCell align="center">MAC</TableCell>
            <TableCell align="center">PR</TableCell>
            <TableCell align="center">SUB</TableCell>
            <TableCell align="center">PAI</TableCell>
            <TableCell align="center">BO</TableCell>
            <TableCell align="center">TF</TableCell>
            <TableCell align="center">MF</TableCell>
            <TableCell align="center">Situação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <TableRow
            key={row.Disciplina}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <Styles>
              <TableCell component="th" scope="row">
                {row.Disciplina}
              </TableCell>
              </Styles>
              <TableCell align="center">{row.Turma}</TableCell>
              <TableCell align="center">{row.Tipo}</TableCell>
              <TableCell align="center">{row.CH}</TableCell>
              <TableCell align="center">{row.MAC}</TableCell>
              <TableCell align="center">{row.PR}</TableCell>
              <TableCell align="center">{row.SUB}</TableCell>
              <TableCell align="center">{row.PAI}</TableCell>
              <TableCell align="center">{row.BO}</TableCell>
              <TableCell align="center">{row.TF}</TableCell>
              <TableCell align="center">{row.MF}</TableCell>
              <TableCell align="center">{row.Situação}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}