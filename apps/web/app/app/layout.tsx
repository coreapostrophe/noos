import { Box, Paper, Stack } from "@mui/material";
import { FC, PropsWithChildren, ReactNode } from "react";

interface AppLayoutProps extends PropsWithChildren {
  collectionPanel: ReactNode;
  dashboardPanel: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ collectionPanel, dashboardPanel }) => {
  return (
    <Stack direction="row" height="100%">
      <Paper sx={{ p: 2, height: "100%", maxWidth: "20rem", flex: "auto" }}>
        {collectionPanel}
      </Paper>
      <Box sx={{ p: 2, flex: "1" }}>{dashboardPanel}</Box>
    </Stack>
  );
};

export default AppLayout;
