import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* Learn from CEOs & SDEs */}
        </Typography>
        <Box>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button color="inherit">Login</Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button color="inherit">Sign Up</Button>
          </motion.div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
