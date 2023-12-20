import React, { useRef } from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { PSEToDoneSchema } from "../utils/validations/productionStepExecutionSchema";

// const StyledFormRow = styled("div")({
//   borderRadius: 6,
//   border: "1px solid " + PRODUCTION_SCHEMA_BORDER_COLOR,
//   background: "#FFF"
// });

const PSEToDoneDialogForm = () => {
  const formikRef = useRef();

  const handleConfirm = () => {
    (formikRef.current as any)?.submitForm();
  };

  const handleCancel = () => console.log("cancel");

  const handleSubmit = (values: any) => {
    console.log("values", values);
  };

  return (
    <Stack className="flexColumn stretchSelf flex1" spacing={2}>
      <div className="flexRow spaceBetween stretchSelf">
        <Typography>Mik.</Typography>
        <Stack direction="row" spacing={2}>
          <Button onClick={handleCancel}>Annuler</Button>
          <Button variant="contained" onClick={handleConfirm}>
            Enregister
          </Button>
        </Stack>
      </div>
      <Formik
        onSubmit={handleSubmit}
        innerRef={formikRef}
        validationSchema={PSEToDoneSchema}
      >
        {({ values }) => {
          return (
            <Form className="flexColumn stretchSelf flex1">
            </Form>
          );
        }}
      </Formik>
    </Stack>
  );
};

export default PSEToDoneDialogForm;
