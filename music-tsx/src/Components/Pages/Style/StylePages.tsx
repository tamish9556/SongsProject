import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {styled } from '@mui/material/styles';
import {TextField} from '@mui/material';

    export const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
            fontSize:'25px',
            fontFamily:'Cooper Black',
            color:'purple',
            backgroundColor: 'plum',
        },
        [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        },
    }));
    
    export const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            fontSize:'15px',
            fontFamily:'Cooper Black',
            backgroundColor: 'white'
        },
        '&:last-child td, &:last-child th': {
        border: 0,
        },
    }));
    export const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: 'purple',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'purple',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'purple',
          },
          '&:hover fieldset': {
            borderColor: 'purple',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'purple',
          },
        },
      });