import { makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import Test from "./sideBar";
import Searchbar from "./searchBar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import {ListItemText} from "@material-ui/core";
import Footer from "./footer"
import { useState } from "react";
import {sidebarSections} from "./api"
import { useParams } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import Navbar from "./navbar"


const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    display: "flex",
    width: "100%",
    paddingLeft: theme.spacing(2),
    alignItems: "flex-start",
    marginTop: theme.mixins.toolbar.minHeight,
    padding: "0px",
    margin: "0px",
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(10),
    textAlign: "center",
    paddingLeft: theme.spacing(10),
    justifyContent: "center",
  },
  sidebarNav: {
    alignSelf: "flex-start",
    position: "sticky",
    top: theme.mixins.toolbar.minHeight,
  },
  card: {
    height: "100%",
    borderRadius: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
    width: "100%", 
    maxWidth: 250,
    height: 120,
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  iconBox: {
    paddingLeft: theme.spacing(1.2),
    width: 34,
    height: 30,
    paddingTop: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
    fontSize: 13,
    paddingLeft: theme.spacing(1.7),
    paddingTop: theme.spacing(1),
    display: "flex",
    alignItems: "flex-start",
  },
  desc: {
    color: theme.palette.text.secondary,
    paddingLeft: theme.spacing(1.5),
  },
  secondsection: {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(19),
  },
  textcontent: {
    paddingBottom: theme.spacing(7),
  },
  mainsearchbar: {
    paddingBottom: theme.spacing(2),
  },
  listItem: {
    position: "relative",
    backgroundColor: "transparent !important",
    "&:hover $bullet": {
      border: `1px solid black`,
      borderRadius: 10,
    },
  },
  bullet: {
    minWidth: 24,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    transition: "outline 0.9s ease",
    padding: theme.spacing(0.5, 1.3),
    borderRadius: 10,
    boxShadow: "1px 2px 3px lightgrey",
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  secondlistitems: {
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  articlelink: {
    color: theme.palette.text.secondary,
  },
  cardGrid: {
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
}));

const quickLinks = [
  {
    title: "Getting started with imports",
    desc: "Import CSVs, spreadsheets, etc.",
    to: "/help/imports",
  },
  {
    title: "Workspace settings",
    desc: "Customize your team setup",
    to: "/help/workspace-settings",
  },
  {
    title: "Custom automations",
    desc: "Build workflows with triggers",
    to: "/help/automations",
  },
];

// at the top of FileManagerPage.js (or wherever you render dynamicContent)
function renderPieces(pieces) {
  // ensure we always have an array
  const arr = Array.isArray(pieces) ? pieces : [pieces];

  return arr.map((p, i) => {
    switch (p.type) {
      case "HTML":
        return (
          <div
            key={i}
            dangerouslySetInnerHTML={{ __html: p.data }}
            style={{ width: "100%", height: "100%" }}
          />
        );

      case "EXCEL":
        return (
          <iframe
            key={i}
            src={p.data.replace("/edit?", "/pubhtml?")}
            width="100%"
            height="600px"
            title={`excel-${i}`}
            style={{ border: 0 }}
          />
        );

      case "PPT":
        return (
          <iframe
            key={i}
            src={p.data}
            width="100%"
            height="600px"
            title={`ppt-${i}`}
            style={{ border: 0 }}
          />
        );

      case "WORD":
        return (
          <iframe
            key={i}
            src={p.data}
            width="100%"
            height="600px"
            title={`word-${i}`}
            style={{ border: 0 }}
          />
        );

      // add more cases here (PDF, IFRAME, VIDEO, etc.)

      default:
        // fallback: just print raw data
        return (
          <div key={i} style={{ padding: 16 }}>
            {p.data}
          </div>
        );
    }
  });
}


export default function FileManagerPage({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const classes = useStyles();
  const { section, heading, item } = useParams();

  console.log("PARAMS:", { section, heading, item });
  const slugify = (str) => str.toString().toLowerCase().replace(/\s+/g, ""); 

      let dynamicContent = null;

      if (section && heading && item) {
     
        const sec = sidebarSections.find(
          (s) => slugify(s.id) === slugify(section)
        );
      
        const menuObj = sec?.items.find(
          (it) => slugify(it.menu.label) === slugify(heading)
        );
       
        const sub = menuObj?.subMenu.find(
          (sm) => slugify(sm.label) === slugify(item)
        );
       

        // if (sub?.content?.type === "HTML") {
        //   dynamicContent = (
        //     <div
        //       dangerouslySetInnerHTML={{ __html: sub.content.data }}
        //       style={{ width: "100%", height: "100%" }}
        //     />
        //   );
        // } else if (sub?.content?.type === "EXCEL") {
        //   dynamicContent = (
        //     <iframe
        //       src={sub.content.data.replace("/edit?", "/pubhtml?")}
        //       width="100%"
        //       height="600px"
        //       title="Excel Preview"
        //       style={{ border: 0 }}
        //     />
        //   );
        // } else if (sub?.content?.type === "PPT") {
        //   dynamicContent = (
        //     <iframe
        //       src={sub.content.data}
        //       width="100%"
        //       height="600px"
        //       title="PPT Preview"
        //       style={{ border: 0 }}
        //     />
        //   );
        // } else if (sub?.content?.type === "WORD") {
        //   dynamicContent = (
        //     <iframe
        //       src={sub.content.data}
        //       width="100%"
        //       height="600px"
        //       title="WORD Preview"
        //       style={{ border: 0 }}
        //     />
        //   );
        // } else {
        //   dynamicContent = <div>{sub?.content?.data}</div>;
        // }

        if (sub && sub.content) {
          dynamicContent = <>{renderPieces(sub.content)}</>;
        }
      }
  
  return (
    <div>
      {/*import navbar */}
      <Navbar/>

      <Container maxWidth="lg" className={classes.pageWrapper}>
    
        {/* import side bar component */}
        <Hidden smDown>
          <div className={classes.sidebarNav}>
            <Test />
          </div>
        </Hidden>

        <main className={classes.content}>
          
          {dynamicContent || (
            <>
             
              <Box className={classes.textcontent}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className={classes.pageTitle}
                >
                  Join the next Attio workshop on July 1
                </Typography>

                <Typography
                  variant="h2"
                  gutterBottom
                  className={classes.pageTitle}
                >
                  How can we help?
                </Typography>
                <Typography
                  variant="h6"
                  paragraph
                  className={classes.updateDate}
                >
                  Get answers to common questions on all things Attio
                </Typography>
                {/* search bar import */}
                <Box className={classes.mainsearchbar}>
                  <Searchbar
                    width={550}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    style={{
                      padding: "9px",
                      boxShadow: "0.4px 1.4px 3px lightgrey",
                    }}
                  />
                </Box>

                <Typography paragraph>
                  Popular searches: importing billing integrations
                </Typography>
              </Box>

              <Grid
                container
                spacing={3}
                className={classes.cardGrid}
              >
                {sidebarSections.map((c) => (
                  <Grid item xs={12} md={4} key={c.title}>
                    <Card className={classes.card}>
                      <img
                        src={c.Icon}
                        alt={`icon`}
                        className={classes.iconBox}
                      />
                      <CardContent style={{ padding: 0 }}>
                        <Typography variant="h6" className={classes.title}>
                          {c.title}
                        </Typography>
                        <Typography variant="body2" className={classes.desc}>
                          {c.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box mt={8} width="100%">
                <Divider />
              </Box>

              <Box
                className={classes.secondsection}
                flexDirection={{ xs: "column", md: "row" }}
                p={{ xs: 2, md: 0 }}
              >
                {/* Left column: the heading */}
                <Box mb={{ xs: 4, md: 0 }}>
                  <Typography variant="h4">
                    Get started with Attio 101.
                  </Typography>

                  <Typography>
                    Everything you need to master the basics of Attio.
                  </Typography>
                </Box>

                {/* Right column: the list */}
                <Box
                  ml={{ xs: 0, md: "auto" }}
                  width={{ xs: "100%", md: "40%" }}
                >
                  {" "}
                  <List disablePadding>
                    {quickLinks.map((art, idx) => (
                      <ListItem
                        key={art.to}
                        button
                        component={RouterLink}
                        to={art.to}
                        divider
                        disableRipple
                        disableTouchRipple
                        className={classes.listItem}
                      >
                        <Box display="flex" alignItems="flex-start">
                          {/* The number “bullet” */}
                          <Typography
                            variant="body1"
                            style={{ minWidth: 24 }}
                            className={classes.bullet}
                          >
                            {idx + 1}
                          </Typography>
                          {/* The content: title + desc */}
                          <Box ml={1} className={classes.secondlistitems}>
                            <Typography
                              variant="body1"
                              style={{ fontWeight: 500 }}
                            >
                              {art.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {art.desc}
                            </Typography>
                          </Box>
                        </Box>
                      </ListItem>
                    ))}
                    <ListItem button component={RouterLink} to="/help">
                      <ListItemText
                        primary="See all articles"
                        primaryTypographyProps={{
                          variant: "body2",
                        }}
                        className={classes.articlelink}
                      />
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </>
          )}
        </main>
      </Container>
      <Footer />
    </div>
  );
}
