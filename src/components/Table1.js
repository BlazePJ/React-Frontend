import {
  Grid,
  TableContainer,
  Paper,
  TableBody,
  Table,
  TableHead,
  TableCell,
  TableRow,
  useTheme
} from "@mui/material";
import { useSelector } from 'react-redux';
import { tokens } from "../theme"

function Table1() {
  const theme=useTheme()
  const colors = tokens(theme.palette.mode)
const contacts = useSelector((state) => state.table.contacts);

  console.log("contacts", contacts);
  return (
    <Grid justifyContent="center" alignItems="center">
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "colors.primary[500] !important"
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Age</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">PhoneNumber</TableCell>
              <TableCell align="left">State</TableCell>
              <TableCell align="left">Temperature</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts?.map((contact) => (
              <TableRow
                key={contact.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{contact.name}</TableCell>
                <TableCell align="left">{contact.age}</TableCell>
                <TableCell align="left">{contact.email}</TableCell>
                <TableCell align="left">{contact.phoneNumber}</TableCell>
                <TableCell align="left">{contact.state}</TableCell>
                <TableCell align="left">{contact.temperature}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default Table1;
