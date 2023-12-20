import { useState } from "react";
import dayjs from "dayjs";
import { Box, Button, Stack, Typography } from "@mui/material";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

import {
  IPSEFormValues,
  IProductionStepExecution
} from "./types/productionStepExecution";
import PSEHeader from "./containers/PSEHeader";
import PSEToDoneDialogForm from "./containers/PSEToDoneDialogForm";

// dummy data
const data: IProductionStepExecution = {
  name: "Emincer le poirreaux",
  status: "TODO"
};

const App = () => {
  const [openPSEModal, setOpenPSEModal] = useState<boolean>(false);
  const [productionStepExecution, setProductionStepExecution] = useState<
    IProductionStepExecution
  >(data);

  const togglePSEModal = () => setOpenPSEModal(!openPSEModal);

  const handleConfirm = (values: IPSEFormValues) => {
    const newValues = {
      ...productionStepExecution,
      ...values,
      endTime: dayjs.utc().valueOf(),
      status: "DONE"
    };

    setProductionStepExecution(newValues as IProductionStepExecution);
    console.log("values", newValues);
  };

  const resetStep = () => setProductionStepExecution(data);

  const isTodo = productionStepExecution.status === "TODO";

  return (
    <div className="flexColumn minHeight100">
      {/* header */}
      <PSEHeader />

      {/* content */}
      <Box sx={{ mt: 6 }} className="flexCenter stretchSelf">
        <Button onClick={togglePSEModal} variant="contained" disabled={!isTodo}>
          {isTodo ? "Terminer l'étape" : "Etape terminée"}
        </Button>
      </Box>

      {/* result */}
      {!isTodo && (
        <Stack spacing={2} className="flexCenter stretchSelf" sx={{ mt: 2 }}>
          <Typography>
            Etape terminée à{" "}
            <em>
              {dayjs.utc(productionStepExecution.endTime).format("HH[h]mm:ss")}
            </em>
          </Typography>
          <Button onClick={resetStep} variant="text">
            Réinitialiser l'étape
          </Button>
        </Stack>
      )}

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
