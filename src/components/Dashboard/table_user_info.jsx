import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name,
  calories,
  fat,
  carbs,
  protein,
  k,
) {
  return { name, calories, fat, carbs, protein, k };
}



export default function TableUserInfo({data}) {
    
    let rows = data.map((item, index) => {
        return createData(
            item.email,
            item.surname,
            item.lastname,
            item.membership_expiry_date,
            item.membership_status,
            item.phone_number,
        )
    })
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">surname</TableCell>
            <TableCell align="right">lastname</TableCell>
            <TableCell align="right">membership expiry date</TableCell>
            <TableCell align="right">membership status</TableCell>
            <TableCell align="right">phone_number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              {row.protein == "premium" ? 
            (<TableCell sx={{ color: 'black', backgroundColor: '#8cff8c' }} align="right">{row.protein}</TableCell>)
            : 
            (<TableCell align="right">{row.protein}</TableCell>)  
            }
              <TableCell align="right">{row.k}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
