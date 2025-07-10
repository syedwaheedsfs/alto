import Searchbar from "./searchBar";
import {sidebarSections} from "./api"
import { dynamicimports } from "../imports";

 const {
   makeStyles,
   List,
   ListItem,
   Box,
   useState,
   IconButton,
   React,
   ListItemIcon,
   ListItemText,
   ListSubheader,
   Collapse,
   Typography,
   ExpandMore,
   ChevronRightOutlinedIcon,
   useHistory,
   useEffect,
   useParams,
   clsx,
 } = dynamicimports;

const useStyles = makeStyles((theme) => ({
  nav: {
    position: "sticky",
    top: theme.mixins.toolbar.minHeight,
    alignSelf: "flex-start",
    width: 320,
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    overflowY: "auto",
    paddingTop: theme.spacing(7),
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  nested: {
    paddingLeft: theme.spacing(2.3),
    color: theme.palette.text.secondary,
  },
  sectionheader: {
    display: "flex",
    textAlign: "center",
    marginLeft: theme.spacing(4.5),
    color: theme.palette.text.primary,
  },
  sidebarlist: {
    paddingTop: theme.spacing(4),
  },
  nestedDeep: {
    color: theme.palette.text.secondary,
    paddingLeft: theme.spacing(3.5),
    paddingTop: 0,
  },
  sidesearchbar: {
    paddingLeft: theme.spacing(6),
  },
  connector: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    marginLeft: theme.spacing(6),
  },
  tinyIcon: {
    fontSize: "0.1rem",
    borderRadius: 9,
    padding: "5px",
    "&:hover": {
      backgroundColor: "rgb(232, 232, 234)",
    },
    marginLeft: theme.spacing(2),
  },
  nestedtext: {
    fontSize: "12px",
  },
  dropdown: {
    borderRadius: 7,
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(10),
    "&:hover": {
      backgroundColor: "rgb(232, 232, 234)",
    },
  },
  sidebarlogo: {
    marginRight: 8,
    width: 28,
    height: 28,
  },
  sidebartitle: {
    fontSize: "13px",
    paddingTop: "6px",
  },
  sidebartext: {
    cursor: "pointer",
  },
  activeItem: {
    borderLeft: `4px solid ${theme.palette.text.primary}`,
    backgroundColor: theme.palette.action.selected,
  },
}));



export default function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const classes = useStyles();
  const history = useHistory();
  const { section, heading, item } = useParams();
  const slug = (text) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-") // spaces → hyphens
      .replace(/[^\w\-]+/g, "");

  // track which sections are open
  const [openSections, setOpenSections] = useState({});
  // track which items (within sections) are open
  const [openItems, setOpenItems] = useState({});

  useEffect(() => {
    if (section && heading) {
      // find matching menu label to open
      sidebarSections.forEach(({ id, items }) => {
        if (slug(id) === section) {
          items.forEach(({ menu }) => {
            if (slug(menu.label) === heading) {
              const key = `${id}-${menu.label}`;
              setOpenItems((prev) => ({ ...prev, [key]: true }));
            }
          });
        }
      });
    }
  }, [section, heading]);

  const toggleItem = (secId, label) => {
    const key = `${secId}-${label}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      <nav className={classes.nav}>
        <Box className={classes.sidesearchbar}>
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Box>

        {/* Sections */}
        <List disablePadding className={classes.sidebarlist}>
          {sidebarSections.map(({ id, title, Icon, items }) => {
             const sectionSlug = slug(id);
             const isSectionActive = sectionSlug === section;
            return(
            <React.Fragment key={id}>
              {/* Section header */}
              <ListSubheader disableSticky className={classes.sectionheader}>
                <img
                  src={Icon}
                  alt={`${title} icon`}
                  className={classes.sidebarlogo}
                />
                <Typography
                  variant="subtitle2"
                  className={classes.sidebartitle}
                >
                  {title}
                </Typography>
              </ListSubheader>

              {/* Section’s items */}
              <ListItem in={openSections[id]} timeout="auto" unmountOnExit>
                <List disablePadding dense>
                  {items.map(({ menu, subMenu }) => {
                    const menuSlug = slug(menu.label);
                    const isActiveMenu =
                    isSectionActive && menuSlug === heading;
                    const itemKey = `${id}-${menu.label}`;
                    const isOpen = openItems[itemKey];
                    return (
                      <React.Fragment key={menu.label}>
                        {/* Item label */}
                        <ListItem
                         className={classes.nested}
                        //  className={clsx(
                        //      classes.nested,
                        //       isActiveMenu && classes.activeItem
                        //     )}
                        >
                          {/* 1) Icon toggles collapse */}
                          <ListItemIcon>
                            <IconButton
                              className={classes.tinyIcon}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleItem(id, menu.label);
                              }}
                            >
                              {isOpen ? (
                                <ExpandMore fontSize="small" />
                              ) : (
                                <ChevronRightOutlinedIcon fontSize="small" />
                              )}
                            </IconButton>
                          </ListItemIcon>

                          {/* 2) Text navigates */}
                          <Box className={classes.dropdown}>
                            <ListItemText
                              primary={menu.label}
                              className={classes.sidebartext}
                              onClick={() =>
                                history.push(`${slug(id)}/${slug(menu.label)}`)
                              }
                            />
                          </Box>
                        </ListItem>

                        {/* labelitems (deep) */}
                        <Collapse
                          in={openItems[itemKey]}
                          timeout="auto"
                          unmountOnExit
                        >
                          <Box className={classes.connector}>
                            <List disablePadding>
                              {subMenu.map((deep) => {
                                const deepSlug = slug(deep.label);
                                const isActiveDeep =
                                  isActiveMenu && deepSlug === item;
                                return(
                                <ListItem
                                  key={deep.label}
                                  button
                                  // className={classes.nestedDeep}
                                  className={clsx(
                                         classes.nestedDeep,
                                         isActiveDeep && classes.activeItem
                                       )}
                                  onClick={() =>
                                    history.push(
                                      `/help/${slug(id)}/${slug(
                                        menu.label
                                      )}/${slug(deep.label)}`
                                    )
                                  }
                                >
                                  <ListItemText
                                    primary={deep.label}
                                    className={classes.nestedtext}
                                  />
                                </ListItem>
                                )
                  })}
                            </List>
                          </Box>
                        </Collapse>
                      </React.Fragment>
                    );
                  })}
                </List>
              </ListItem>
            </React.Fragment>
            );
})}
        </List>
      </nav>
    </div>
  );
}
