import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Table, TableBody, TableCell } from "@material-ui/core";
import { TableContainer, TableHead, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as Data from "../../data/AccountMailData";

interface DataViewProps {
  dataList: Array<Data.IAccountMail>;
  onSelect: (id: number) => void;
}

interface IDataView {
  id: number;
  fav: boolean;
  cuenta: string;
  usuario: string;
  servidor: string;
}

const useStyles = makeStyles({
  container: {
    maxHeight: 400,
  },
});

const DataView: React.FC<DataViewProps> = ({ dataList, onSelect }) => {
  const styles = useStyles();

  const handleOnSelect = (event: any, id: number) => {
    onSelect(id);
  };

  return (
    <Grid item xs={12}>
      <Paper>
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
              {dataList.length > 0 ? (
                dataList.map((item: IDataView) => (
                  <TableRow
                    key={item.id}
                    hover
                    onClick={(event) => handleOnSelect(event, item.id)}
                  >
                    <TableCell>{item.fav ? <FavoriteIcon /> : " "}</TableCell>
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
