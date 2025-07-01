import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";
import Logo from "./Assets/smartfoodlogo.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(6, 0),
    // marginTop: theme.spacing(0),
    position: "relative",
  },
  columnTitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },
  link: {
    display: "block",
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
    "&:hover": {
      color: theme.palette.text.primary,
      textDecoration: "none",
    },
  },
  copyright: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.disabled,
  },
  logo: {
    height: 40,
    // width: "auto",
    paddingRight: "140px",
    paddingLeft: "40px",
  },
}));

export default function Footer() {
  const classes = useStyles();

  const columns = [
    {
      title: "Platform",
      links: [
        "Refer a team",
        "Changelog",
        "LinkedIn extension",
        "Gmail extension",
        "iOS app",
        "Android app",
        "Security",
      ],
    },
    {
      title: "Import from",
      links: ["Salesforce", "Hubspot", "Pipedrive", "Zoho", "Excel", "CSV"],
    },
    {
      title: "Company",
      links: [
        "Customers",
        "Announcements",
        "Engineering blog",
        "Careers",
        "Manifesto",
        "Become a partner",
      ],
    },
    {
      title: "Attio for",
      links: ["Startups", "Deal flow"],
    },
    {
      title: "Resources",
      links: [
        "Startup program",
        "Help center",
        "Automation templates",
        "Developers",
        "System status",
        "Hire an expert",
        "Downloads",
      ],
    },
    {
      title: "Apps",
      links: [
        "Gmail",
        "Outlook",
        "Customer.io",
        "Segment",
        "Mailchimp",
        "June",
        "Slack",
        "Outreach",
        "Mixmax",
        "Typeform",
        "Zapier",
      ],
    },
  ];

  return (
    <Box
      className={classes.footer}
      component="footer"
      bgcolor="background.paper"
    >
      <Container maxWidth="xl" >

        <Box display="flex" alignItems="flex-start" flexWrap="nowrap" mb={4}>
          <Box mr={2}>
            <img src={Logo} alt="smartfoodsafe" className={classes.logo} />
          </Box>

          {/* Now put your Grid inside the same flex row */}
          <Box flexGrow={1}>
            <Grid container spacing={1}>
              {columns.map((col) => (
                <Grid item xs={6} sm={4} md={2} key={col.title}>
                  <Typography
                    variant="subtitle2"
                    className={classes.columnTitle}
                  >
                    {col.title}
                  </Typography>
                  {col.links.map((text) => (
                    <Link
                      href="#"
                      key={text}
                      className={classes.link}
                      variant="body2"
                    >
                      {text}
                    </Link>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <Typography variant="caption" className={classes.copyright}>
          © 2025 Attio Ltd. All rights reserved. &nbsp;
          <Link href="#" variant="caption">
            Terms & Conditions
          </Link>{" "}
          ·{" "}
          <Link href="#" variant="caption">
            Privacy Policy
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
