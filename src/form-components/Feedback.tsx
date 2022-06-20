import { Button } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { Alert, AlertColor } from "@mui/material";
import React from "react";

export interface FeedBackPropos {
  isOpen: boolean;
  severity: AlertColor;
  message: string;
  onClose: () => void;
}

export const FeedBack = ({
  isOpen,
  severity,
  message,
  onClose,
}: FeedBackPropos) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
      <Alert variant="filled" severity={severity}>
        {message}
        <Button style={{ color: "#FFF" }} onClick={handleClose}>
          X
        </Button>
      </Alert>
    </Slide>
  );
};
