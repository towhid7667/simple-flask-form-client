import React from "react";
import { ButtonGroup, capitalize, createTheme, ThemeProvider } from '@mui/material';
import { Button } from '@mui/material';
import { grey } from "@mui/material/colors";
import styles from './../../styles/ButtonGroup.module.css'

const Buttongroup = () => {
    const theme = createTheme({
        palette : {
            primary : {
                main : grey[200]
            }
        }
    })
  return (
    <div>
        <ThemeProvider theme={theme}>
      <ButtonGroup
        variant="contained"
        aria-label="outlined button group"
        
       
      >
        <Button className={styles.Group}>Property</Button>
        <Button className={styles.Group}>Space</Button>
        <Button className={styles.Group}>Exterior</Button>
        <Button className={styles.Group} color="error">Facilities</Button>
        <Button className={styles.Group}>Legal Documents</Button>
      </ButtonGroup>
      </ThemeProvider>
    </div>
  );
};

export default Buttongroup;
