import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Table, TableBody, TableCell } from "@material-ui/core";
import { TableContainer, TableHead, TableRow } from "@material-ui/core";
import TableView from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import data from "../../data/AccountMailData";

interface IDataView {
  id: number;
  fav: boolean;
  cuenta: string;
  usuario: string;
  servidor: string;
}

interface IColumns {
  title: string;
  field: string;
}

const columns: Array<IColumns> = [
  { title: "Fav", field: "fav" },
  { title: "Cuenta", field: "cuenta" },
  { title: "Usuario", field: "usuario" },
  { title: "Servidor", field: "servidor" },
];

const useStyles = makeStyles({
  container: {
    maxHeight: 440,
  },
  cellIcon: {
    width: "1%",
  },
});

const DataView = () => {
  const styles = useStyles();

  return (
    <Grid item xs={12}>
      <Paper>
        {/*         <TableView
          columns={[
            { title: "Fav", field: "fav", type: "boolean" },
            { title: "Cuenta", field: "cuenta" },
            { title: "Usuario", field: "usuario" },
            { title: "Servidor", field: "servidor" },
          ]}
          data={data}
        /> */}
        <TableContainer className={styles.container}>
          <Table size="small" stickyHeader aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Fav</TableCell>
                <TableCell>Cuenta</TableCell>
                <TableCell>Usuario</TableCell>
                <TableCell>Servidor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length > 0 ? (
                data.map((item: IDataView) => (
                  <TableRow key={item.id} hover>
                    <TableCell>{item.fav}</TableCell>
                    <TableCell>{item.cuenta}</TableCell>
                    <TableCell>{item.usuario}</TableCell>
                    <TableCell>{item.servidor}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>
  );
};

export default DataView;
