import {images} from "./Assets/imageAlbum"
import Test from "./sideBar"
import { dynamicimports } from "../imports";

 const {
   makeStyles,
   List,
   ListItem,
   Box,
   Container,
   RouterLink,
   useState,
   Hidden,
   IconButton,
   MenuIcon,
   useMediaQuery,
   useTheme,
   AppBar,
   Toolbar,
   Button,
   SwipeableDrawer,
 } = dynamicimports;
const useStyles = makeStyles((theme) => ({
  appBar: {
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
      backgroundColor: "rgb(52, 52, 55)",
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
        
        <List>
          <ListItem button onClick={toggleDrawer(false)}>
            Close
          </ListItem>
         
          <Test />
        </List>
      </SwipeableDrawer>
    </>
  );
}
