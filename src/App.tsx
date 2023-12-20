import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

import PSEHeader from "./containers/PSEHeader";
import PSEToDoneDialogForm from "./containers/PSEToDoneDialogForm";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { IPSEFormValues } from "./types/productionStepExecution";

const App = () => {
  const [openPSEModal, setOpenPSEModal] = useState<boolean>(false);

  const togglePSEModal = () => setOpenPSEModal(!openPSEModal);

  const handleConfirm = (values: IPSEFormValues) => {
    const newValues = {
      ...values,
      endTime: dayjs.utc().valueOf(),
      status: "DONE"
    };
    console.log("values", newValues);
  };

  return (
    <div className="flexColumn minHeight100">
      <PSEHeader />
      <Box sx={{ mt: 6 }} className="flexCenter stretchSelf">
        <Button onClick={togglePSEModal} variant="contained">
          Terminer l'étape
        </Button>
      </Box>

      <PSEToDoneDialogForm
        open={openPSEModal}
        onClose={togglePSEModal}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default App;
