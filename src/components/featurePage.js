import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import Logo from "./Assets/smartfoodlogo.png";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import Test from "./sideBar";
import Searchbar from "./searchBar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import {ListItemText} from "@material-ui/core";
import Footer from "./footer"
import {images} from "./Assets/imageAlbum"
import { useState } from "react";
import {sidebarSections} from "./api"
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#fff",
    color: "#000",
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
    paddingBottom: theme.spacing(1),
  },
  pageWrapper: {
    display: "flex",
    width: "100%",
    paddingLeft: theme.spacing(2),
    alignItems: "flex-start",
    marginTop: theme.mixins.toolbar.minHeight,
    // paddingBottom: 10,
    padding: "0px",
    margin: "0px",
  },

  toolbar: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "none",
    // border: "none",
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(10),
    textAlign: "center",
    paddingLeft: "110px",
  },
  toolbar: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "none",
    border: "none",
  },
  submitBtn: {
    backgroundColor: "black",
    color: "#ffffff",
    borderRadius: 4,
    textTransform: "none",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#7b7bd3",
    },
    marginRight: theme.spacing(2),
  },
  logoutBtn: {
    marginRight: theme.spacing(2),
    borderColor: "black",
    color: "black",
    borderRadius: 4,
    textTransform: "none",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "rgb(174, 174, 229)",
      borderColor: " #7b7bd3",
      color: "#7b7bd3",
    },
  },
  logo: {
    height: 50,
    width: "auto",
    paddingRight: "16px",
    paddingLeft: "37px",
  },
  toolbarbuttons: {
    paddingRight: "24px",
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
    width: 267,
    height: 128,
  },
  iconBox: {
    paddingLeft: theme.spacing(1.2),
    width: 34,
    height: 30,
    paddingTop: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
    fontSize:13,
    // marginBottom: theme.spacing(1),
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
    paddingLeft: theme.spacing(17),
    paddingBottom: theme.spacing(2),
  },
  listItem: {
    position: "relative",
    backgroundColor: "transparent !important",
    "&:hover $bullet": {
      border: `1px solid black`,
      borderRadius: 10,
      // padding: theme.spacing(0.5, 1),
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
}));

const cards = [
  {
    icon: images.Academy,
    title: "Academy",
    desc: "Short videos to get started with Attio",
  },
  {
    icon: images.refernce,
    title: "Reference",
    desc: "Essential Attio features explained",
  },
  {
    icon: images.icons,
    title: "API",
    desc: "Technical guide to integrations",
  },
];

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



export default function FileManagerPage({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const classes = useStyles();
  const { section, heading, item } = useParams();

  console.log("PARAMS:", { section, heading, item });
  const slugify = (str) => str.toString().toLowerCase().replace(/\s+/g, ""); 

      let dynamicContent = null;

      if (section && heading && item) {
        // find the matching submenu entry
        const sec = sidebarSections.find(
          (s) => slugify(s.id) === slugify(section)
        );
        console.log("FOUND section:", sec);
        const menuObj = sec?.items.find(
          (it) => slugify(it.menu.label) === slugify(heading)
        );
        console.log("FOUND menu:", menuObj);
        const sub = menuObj?.subMenu.find(
          (sm) => slugify(sm.label) === slugify(item)
        );
        console.log("FOUND sub:", sub);

        if (sub?.content?.type === "HTML" ) {
          dynamicContent = (
            <div
              dangerouslySetInnerHTML={{ __html: sub.content.data }}
              style={{ width: "100%", height: "100%" }}
            />
          );
        } else {
          dynamicContent = <div>{sub?.content?.data}</div>;
        }
      }
  
  return (
    <div>
      {/* navbar */}
      <AppBar position="fixed" className={classes.appBar}>
        <Container maxWidth="xl">
          <Toolbar className={classes.toolbar}>
            <Box display="flex" alignItems="center">
              <Box>
                <img src={Logo} alt="smartfoodsafe" className={classes.logo} />
              </Box>

              <Button component={RouterLink} to="/" color="inherit">
                Platform
              </Button>
              <Button color="inherit">Resources</Button>
              <Button color="inherit">Customers</Button>
              <Button color="inherit">Pricing</Button>
            </Box>

            <Box className={classes.toolbarbuttons}>
              <Button
                variant="outlined"
                size="small"
                className={classes.logoutBtn}
              >
                Sign in
              </Button>
              <Button
                variant="contained"
                size="small"
                className={classes.submitBtn}
              >
                Start for free
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="lg" className={classes.pageWrapper}>
        {/* <Toolbar /> */}
        {/* import side bar component */}
        <div className={classes.sidebarNav}>
          <Test />
        </div>

        <main className={classes.content}>
          {/* <div className={classes.toolbar} /> */}
          {dynamicContent || (
            <>
              {/* <div className={classes.toolbar} /> */}
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

              <Grid container spacing={10} style={{ paddingTop: "40px" }}>
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

              <Box className={classes.secondsection}>
                {/* Left column: the heading */}
                <Box>
                  <Typography variant="h4">
                    Get started with Attio 101.
                  </Typography>

                  <Typography>
                    Everything you need to master the basics of Attio.
                  </Typography>
                </Box>

                {/* Right column: the list */}
                <Box ml="auto" width="40%">
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
                          {/* 1. The number “bullet” */}
                          <Typography
                            variant="body1"
                            style={{ minWidth: 24 }}
                            className={classes.bullet}
                          >
                            {idx + 1}
                          </Typography>
                          {/* 2. The content: title + desc, both starting flush under each other */}
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
