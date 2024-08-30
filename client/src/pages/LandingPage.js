import React, { useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  CardActions,
} from "@mui/material";
import Link from "@mui/material/Link";
import { motion } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import LinkedInPostCard from "../components/LinkedInPostCard";
const posts = [
  {
    title: "Amazing Tech Update",
    image:
      "https://images.assettype.com/freepressjournal/2020-06/b8cec19e-04c8-4f8b-a3ee-3eacc0aad8b7/c_sushant_singh_rajput_3rd_lead_june_15.jpg?w=1200",
    url: "https://www.linkedin.com/posts/vivek-nagose-06779a102_ai-genai-gan-activity-7220332393042198528-qy9U?utm_source=share&utm_medium=member_android",
  },
  {
    title: "Innovation in AI",
    image:
      "https://watermark.lovepik.com/photo/20211120/large/lovepik-the-golden-wedding-stage-picture_500501082.jpg",
    url: "https://www.linkedin.com/posts/vivek-nagose-06779a102_which-ai-models-can-be-used-in-selection-activity-7138833175954317313-9eNu?utm_source=share&utm_medium=member_android",
  },
  {
    title: "Future of Remote Work",
    image: "https://via.placeholder.com/300",
    url: "https://www.linkedin.com/pulse/future-of-remote-work",
  },
  {
    title: "Top 10 Programming Languages",
    image: "https://via.placeholder.com/300",
    url: "https://www.linkedin.com/pulse/top-10-programming-languages",
  },
  {
    title: "Understanding Quantum Computing",
    image: "https://via.placeholder.com/300",
    url: "https://www.linkedin.com/pulse/understanding-quantum-computing",
  },
  {
    title: "Cybersecurity Trends in 2024",
    image: "https://via.placeholder.com/300",
    url: "https://www.linkedin.com/pulse/cybersecurity-trends-in-2024",
  },
  {
    title: "Blockchain Beyond Bitcoin",
    image: "https://via.placeholder.com/300",
    url: "https://www.linkedin.com/pulse/blockchain-beyond-bitcoin",
  },
  {
    title: "Data Privacy and Protection",
    image: "https://via.placeholder.com/300",
    url: "https://www.linkedin.com/pulse/data-privacy-and-protection",
  },
  {
    title: "Machine Learning Essentials",
    image: "https://via.placeholder.com/300",
    url: "https://www.linkedin.com/pulse/machine-learning-essentials",
  },
  {
    title: "Tech Giants and Their Innovations",
    image: "https://via.placeholder.com/300",
    url: "https://www.linkedin.com/pulse/tech-giants-and-their-innovations",
  },
  {
    title: "Cloud Computing Trends",
    image: "https://via.placeholder.com/300",
    url: "https://www.linkedin.com/pulse/cloud-computing-trends",
  },
  {
    title: "The Rise of Edge Computing",
    image: "https://via.placeholder.com/300",
    url: "https://www.linkedin.com/pulse/rise-of-edge-computing",
  },
  {
    title: "5G Technology and Its Impact",
    image: "https://via.placeholder.com/300",
    url: "https://www.linkedin.com/pulse/5g-technology-and-its-impact",
  },
  {
    title: "Augmented Reality vs. Virtual Reality",
    image: "https://via.placeholder.com/300",
    url: "https://www.linkedin.com/pulse/augmented-reality-vs-virtual-reality",
  },
  {
    title: "The Evolution of Web Development",
    image: "https://via.placeholder.com/300",
    url: "https://www.linkedin.com/pulse/evolution-of-web-development",
  },
  {
    title: "Ethical AI and Machine Learning",
    image: "https://via.placeholder.com/300",
    url: "https://www.linkedin.com/pulse/ethical-ai-and-machine-learning",
  },
  {
    title: "Technology in Healthcare",
    image: "https://via.placeholder.com/300",
    url: "https://www.linkedin.com/pulse/technology-in-healthcare",
  },
];

const LandingPage = () => {
  useEffect(() => {
    // Load particles.js
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box
      sx={{ backgroundColor: "#0a192f", color: "white", minHeight: "100vh" }}
    >
      <div
        id="particles-js"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></div>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ pt: 8, pb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" align="center" gutterBottom>
              Transform Your Thinking with SysML!
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Typography variant="h5" align="center" paragraph>
              Want to be an SysML Dev?
            </Typography>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button variant="contained" color="primary" size="large">
              Get Started
            </Button>
          </motion.div>
          <Typography variant="h5" align="ledt" paragraph>
            Recently Published an Articles on linkedin
          </Typography>
          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              height: "50vh", // Fixed height
              overflowY: "auto", // Enable vertical scrolling
            }}
          >
            {posts.map((post, index) => (
              <LinkedInPostCard key={index} post={post} />
            ))}
          </Box>
        </Box>

        <Typography variant="h4" align="center" sx={{ mt: 8, mb: 4 }}>
          Our Best Courses
        </Typography>
        <Grid container spacing={4}>
          {[
            "The Systems Modeling Language (SysML®) v1.6",
            "Product Development & Systems Engineering (INCOSE / 15288)",
            "Business Mind - Mastering Business Development",
          ].map((course, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {course}
                    </Typography>
                    <Button variant="outlined" color="primary">
                      Learn more
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" align="center" sx={{ mt: 8, mb: 4 }}>
          200+ topics taught...
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1,
            color: "#fff",
          }}
        >
          {[
            "Introduction to SysML",
            "SysML vs UML",
            "SysML Diagram Overview",
            "Block Definition Diagram (BDD)",
            "Internal Block Diagram (IBD)",
            "Use Case Diagram",
            "Activity Diagram",
            "Sequence Diagram",
            "State Machine Diagram",
            "Parametric Diagram",
            "Requirement Diagram",
            "Package Diagram",
            "Allocations in SysML",
            "SysML Modeling Tools",
            "SysML Profiles and Stereotypes",
            "Model-Based Systems Engineering (MBSE)",
            "SysML and System Architecture",
            "Traceability in SysML",
            "SysML Model Elements and Properties",
            "SysML Ports and Interfaces",
            "SysML Value Types and Units",
            "SysML Constraints and Constraint Blocks",
            "SysML Requirements Management",
            "SysML Model Validation",
            "SysML Patterns and Best Practices",
            "SysML for Hardware Design",
            "SysML for Software Design",
            "SysML for Embedded Systems",
            "SysML for Cyber-Physical Systems",
            "SysML Integration with Other Tools",
            "SysML Simulation and Analysis",
            "SysML for Safety-Critical Systems",
            "SysML and Agile Development",
            "SysML and Systems of Systems (SoS)",
            "SysML Case Studies and Applications",
            "Advanced SysML Techniques",
            "SysML for Requirements Derivation",
            "SysML and Configuration Management",
            "SysML and PLM (Product Lifecycle Management)",
            "SysML and Systems Verification and Validation",
            "SysML for Functional and Logical Architecture",
            "SysML Metrics and Performance Analysis",
          ].map((topic, index) => (
            <Chip
              key={index}
              label={topic}
              style={{ color: "#fff", background: "#1769AA" }}
            />
          ))}
        </Box>

        <Typography variant="h4" align="center" sx={{ mt: 8, mb: 4 }}>
          Our Community
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { platform: "YouTube", count: "1.7M+" },
            { platform: "LinkedIn", count: "600K+" },
            { platform: "Discord", count: "55K+" },
          ].map((stat, index) => (
            <Grid item key={index}>
              <Typography variant="h6" align="center">
                {stat.count}
              </Typography>
              <Typography variant="subtitle1" align="center">
                {stat.platform}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
