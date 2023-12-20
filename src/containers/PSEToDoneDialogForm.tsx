import React, { useRef } from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputAdornment,
  TextField,
  styled
} from "@mui/material";

import { PSEToDoneSchema } from "../utils/validations/productionStepExecutionSchema";

const sx = {
  title: {
    color: "#7C7C7C",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 1.37
  }
};

const StyledDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    width: 357,
    padding: 10
  }
});

// const StyledFormRow = styled("div")({
//   borderRadius: 6,
//   border: "1px solid " + PRODUCTION_SCHEMA_BORDER_COLOR,
//   background: "#FFF"
// });

const PSEToDoneDialogForm = ({ open, onClose }) => {
  const formikRef = useRef();

  const handleConfirm = () => {
    (formikRef.current as any)?.submitForm();
  };

  const handleCancel = () => console.log("cancel");

  const handleSubmit = (values: any) => {
    console.log("values", values);
  };

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title" sx={sx.title}>
        Saisissez le poids réel en sortie pour terminer l'étape de production.
      </DialogTitle>
      <DialogContent sx={{ mt: 1 }}>
        <Formik
          onSubmit={handleSubmit}
          innerRef={formikRef}
          validationSchema={PSEToDoneSchema}
        >
          {({ values, handleChange, handleBlur, errors }) => {
            return (
              <Form>
                <FormControl
                  variant="standard"
                  fullWidth
                  sx={{ mt: 2.5 }}
                  error={!!errors.netWeight}
                >
                  <TextField
                    label="Poids réel en sortie"
                    variant="standard"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.netWeight}
                    error={!!errors.netWeight}
                    fullWidth
                    type="number"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">kg</InputAdornment>
                      )
                    }}
                  />
                  {errors.netWeight && (
                    <FormHelperText>{(errors as any).netWeight}</FormHelperText>
                  )}
                </FormControl>
              </Form>
            );
          }}
        </Formik>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={handleCancel} color="primary">
          Annuler
        </Button>

        <Button onClick={handleConfirm} color="primary" variant="contained">
          Terminer l'étape
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default PSEToDoneDialogForm;
