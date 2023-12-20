import React, { useRef } from "react";
import { Formik, Form } from "formik";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  TextField
} from "@mui/material";

import { PSEToDoneSchema } from "../utils/validations/productionStepExecutionSchema";

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
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title" sx={{ pb: 0 }}>
        Ajouter un mode de transformation
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
                    label="Mode de transformation"
                    variant="standard"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.netWeight}
                    error={!!errors.netWeight}
                    fullWidth
                    type="number"
                  />
                  {errors.netWeight && (
                    <FormHelperText>{errors.netWeight}</FormHelperText>
                  )}
                </FormControl>
              </Form>
            );
          }}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default PSEToDoneDialogForm;
