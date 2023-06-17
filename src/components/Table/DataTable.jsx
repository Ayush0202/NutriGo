import PropTypes from "prop-types"

// material ui
import { styled } from "@mui/material/styles"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

// table style
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
}));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0
    }
}));




const DataTable = (props) => {
    return (
        <>

            <h2 style={{textAlign: 'left', color:'black', fontSize:'24px'}}>Nutritional Values</h2>

            <TableContainer component={Paper}>

                <Table sx={{ maxWidth: "10" }} aria-label="customized table">

                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Serving size per {props.serving_size}/grams </StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>

                        {/* 1st para */}
                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row">
                                Carbohydrates
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {props.carbohydrates}
                            </StyledTableCell>
                        </StyledTableRow>


                        {/* 2nd para */}
                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row">
                                Cholesterol
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {props.cholesterol}
                            </StyledTableCell>
                        </StyledTableRow>


                        {/* 3rd para */}
                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row">
                                Saturated Fat
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {props.saturated_fat}
                            </StyledTableCell>
                        </StyledTableRow>


                        {/* 4th para */}
                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row">
                                Total Fat
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {props.total_fat}
                            </StyledTableCell>
                        </StyledTableRow>


                        {/* 5th para */}
                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row">
                                Fiber Content
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {props.fiber_content}
                            </StyledTableCell>
                        </StyledTableRow>


                        {/* 6th para */}
                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row">
                                Potassium
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {props.potassium}
                            </StyledTableCell>
                        </StyledTableRow>


                        {/* 7th para */}
                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row">
                                Protein
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {props.protein}
                            </StyledTableCell>
                        </StyledTableRow>


                        {/* 8th para */}
                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row">
                                Sodium
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {props.sodium}
                            </StyledTableCell>
                        </StyledTableRow>


                        {/* 9th para */}
                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row">
                                Sugar
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {props.sugar}
                            </StyledTableCell>
                        </StyledTableRow>

                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

DataTable.propTypes = {
    serving_size: PropTypes.number,
    carbohydrates: PropTypes.number,
    cholesterol: PropTypes.number,
    saturated_fat: PropTypes.number,
    total_fat: PropTypes.number,
    fiber_content: PropTypes.number,
    potassium: PropTypes.number,
    protein: PropTypes.number,
    sodium: PropTypes.number,
    sugar: PropTypes.number
};
  

export default DataTable