import { useState } from "react";
import dayjs from "dayjs";
import { Box, Button } from "@mui/material";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

import {
  IPSEFormValues,
  IPSEToDoneValues
} from "./types/productionStepExecution";
import PSEHeader from "./containers/PSEHeader";
import PSEToDoneDialogForm from "./containers/PSEToDoneDialogForm";

const data = {
  name: "Emincer le poirreaux",
  status: "TODO"
};
const App = () => {
  const [openPSEModal, setOpenPSEModal] = useState<boolean>(false);
  const [
    productionStepExecution,
    setProductionStepExecution
  ] = useState<IPSEToDoneValues | null>(null);

  const togglePSEModal = () => setOpenPSEModal(!openPSEModal);

  const handleConfirm = (values: IPSEFormValues) => {
    const newValues = {
      ...values,
      endTime: dayjs.utc().valueOf(),
      status: "DONE"
    };

    setFormValues(newValues);
    console.log("values", newValues);
  };

  return (
    <div className="flexColumn minHeight100">
      {/* header */}
      <PSEHeader />

      {/* content */}
      <Box sx={{ mt: 6 }} className="flexCenter stretchSelf">
        <Button onClick={togglePSEModal} variant="contained">
          Terminer l'étape
        </Button>
      </Box>

      {/* form dialog */}
      <PSEToDoneDialogForm
        open={openPSEModal}
        onClose={togglePSEModal}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default App;
