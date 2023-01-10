import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import styles from '../../styles/ListingStyles.module.css'
import FirstForms from "../1stpart/FirstForms";

const Listing = () => {
  return (
    <div className={styles.listing}>
      <div className={styles.MainButtons}>
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
          color="error"
        >
          <Button style={{borderRadius : "15px 0 0 15px", border : 0}}>X</Button>
          <Button>Property</Button>
        </ButtonGroup>
      </div>
      <FirstForms></FirstForms>

    </div>
  );
};

export default Listing;
