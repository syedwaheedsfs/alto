import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles} from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import {images} from "./Assets/imageAlbum"
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useMediaQuery } from "@material-ui/core";
import { useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import { useTheme } from "@material-ui/core/styles";
import Test from "./sideBar"
import { 
  SwipeableDrawer,
  List,
  ListItem,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#fff",
    color: "#000",
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
    paddingBottom: theme.spacing(1),
  },
  toolbarbuttons: {
    paddingRight: "24px",
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
  toolbar: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "none",
    border: "none",
  },
}));
export default function Navbar() {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Container maxWidth="xl">
          <Toolbar className={classes.toolbar}>
            <Box display="flex" alignItems="center">
              <Hidden mdUp>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Box>
                <img
                  src={images.smartfoodlogo}
                  alt="smartfoodsafe"
                  className={classes.logo}
                />
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

      {/* Temporary sidebar for small screens */}
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
        classes={{ paper: classes.drawerPaper }}
      >
        {/* You can include a close button at the top if you like */}
        <List>
          <ListItem button onClick={toggleDrawer(false)}>
            Close
          </ListItem>
          {/* Render your actual sidebar contents: */}
          <Test />
        </List>
      </SwipeableDrawer>
    </>
  );
}
