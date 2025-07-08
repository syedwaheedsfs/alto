import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Searchbar from "./searchBar";
import {
  IconButton,
  ListItemIcon,
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Collapse,
  Typography,
} from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import { useHistory } from "react-router-dom";
import {sidebarSections} from "./api"

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
}));



export default function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const classes = useStyles();
  const hist = useHistory();
  const slug = (s) => s.replace(/\s+/g, "");

  // track which sections are open
  const [openSections, setOpenSections] = useState({});
  // track which items (within sections) are open
  const [openItems, setOpenItems] = useState({});

  // const toggleSection = (id) =>
  //   setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
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
          {sidebarSections.map(({ id, title, Icon, items }) => (
            <React.Fragment key={id}>
              {/* Section header */}
              <ListSubheader disableSticky className={classes.sectionheader}>
                <img
                  src={Icon}
                  alt={`${title} icon`}
                  style={{ marginRight: 8, width: 29, height: 29 }}
                />
                <Typography
                  variant="subtitle2"
                  style={{ fontSize: "13px", paddingTop: "6px" }}
                >
                  {title}
                </Typography>
              </ListSubheader>

              {/* Section’s items */}
              <ListItem in={openSections[id]} timeout="auto" unmountOnExit>
                <List disablePadding dense>
                  {items.map(({ menu, subMenu }) => {
                    const itemKey = `${id}-${menu.label}`;
                    const isOpen = openItems[itemKey];
                    return (
                      <React.Fragment key={menu.label}>
                        {/* Item label */}
                        <ListItem className={classes.nested}>
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
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                hist.push(`${slug(id)}/${slug(menu.label)}`)
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
                              {subMenu.map((deep) => (
                                <ListItem
                                  key={deep.label}
                                  button
                                  className={classes.nestedDeep}
                                  onClick={() =>
                                    hist.push(
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
                              ))}
                            </List>
                          </Box>
                        </Collapse>
                      </React.Fragment>
                    );
                  })}
                </List>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </nav>
    </div>
  );
}
