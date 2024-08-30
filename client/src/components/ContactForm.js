import React from "react";
import { Grid, TextField, Button, Box, Typography, Link } from "@mui/material";

const ContactForm = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Left side with contact information */}
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#2D033B",
            color: "white",
            padding: "2rem",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Typography variant="body2">
            Fill up the form and our team will get back to you within 24 hours
          </Typography>
          <Box sx={{ marginTop: 4 }}>
            <Typography variant="body1">
              <Link href="tel:+233543201893" color="inherit" underline="none">
                📞 +91-9561471054
              </Link>
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <Link
                href="mailto:atulnagose1499@gmail.com"
                color="inherit"
                underline="none"
              >
                ✉️ atulnagose1499@gmail.com
              </Link>
            </Typography>
          </Box>
          <Box sx={{ marginTop: 4 }}>
            {/* Add social media icons here */}
            <Link href="#" color="inherit">
              <i className="fab fa-facebook" style={{ marginRight: 10 }} />
            </Link>
            <Link href="#" color="inherit">
              <i className="fab fa-instagram" style={{ marginRight: 10 }} />
            </Link>
            <Link href="#" color="inherit">
              <i className="fab fa-linkedin" />
            </Link>
          </Box>
        </Grid>

        {/* Right side with the form */}
        <Grid
          item
          xs={12}
          md={6}
          style={{
            padding: "2rem",
            backgroundColor: "#F8F9FA",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h5" gutterBottom color="black">
            Any Question or remarks? Just write us a message
          </Typography>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            value=""
          />
          <TextField
            label="Phone"
            fullWidth
            margin="normal"
            variant="outlined"
            value=""
          />
          <TextField
            label="Message"
            fullWidth
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            placeholder="Write your message"
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "1rem", width: "100%" }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
