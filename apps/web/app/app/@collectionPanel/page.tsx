"use client";
import { AutoAwesomeMosaicRounded } from "@mui/icons-material";
import { Box, Button, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { useAtom } from "jotai";
import { FC, MouseEvent, useState } from "react";
import { tasksAtom } from "../../../models/task";

const CollectionPanel: FC = () => {
  const [menuEl, setMenuEl] = useState<null | HTMLElement>(null);
  const [tasks] = useAtom(tasksAtom);

  const openMenu = Boolean(menuEl);

  const toggleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const closeMenu = () => {
    setMenuEl(null);
  };

  return (
    <Stack gap={2} sx={{ height: "100%" }}>
      <Box>
        <IconButton
          id="menu-button"
          aria-controls={openMenu ? "app-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={toggleMenu}
        >
          <AutoAwesomeMosaicRounded />
        </IconButton>
      </Box>
      <Menu
        id="app-menu"
        aria-labelledby="menu-button"
        anchorEl={menuEl}
        open={openMenu}
        onClose={closeMenu}
        slotProps={{
          list: { "aria-labelledby": "basic-button" },
          paper: { sx: { minWidth: "10rem" } },
        }}
      >
        <MenuItem onClick={closeMenu}>File</MenuItem>
        <MenuItem onClick={closeMenu}>Edit</MenuItem>
      </Menu>

      <Stack gap={1}>
        {tasks.map((task) => (
          <Button
            key={task.id}
            sx={{ justifyContent: "flex-start", textTransform: "none" }}
          >
            {task.title}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

export default CollectionPanel;
