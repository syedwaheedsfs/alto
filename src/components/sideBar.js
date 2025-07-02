import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Searchbar from "./searchBar";
import {
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
import {images} from "./Assets/imageAlbum"
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
    paddingLeft: theme.spacing(4.5),
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
    paddingLeft: theme.spacing(2.8),
    paddingTop:0
  },
  sidesearchbar: {
    paddingLeft: theme.spacing(6),
  },
  connector: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    marginLeft: theme.spacing(1),
    //  paddingLeft: theme.spacing(0),
    marginLeft: "45px",
  },
  sidebartext: {
    paddingLeft: theme.spacing(1.5),
  },
}));



export default function Sidebar() {
  const sidebarSections = [
    {
      id: "academy",
      title: "ACADEMY",
      Icon: images.Academy,
      items: [
        { label: "Introductions", labelitems: ["item1", "item3"] },
        { label: "Workflows", labelitems: ["item2", "item5"] },
        { label: "Sequences", labelitems: ["item6", "item7"] },
      ],
    },
    {
      id: "reference",
      title: "REFERENCE",
      Icon: images.refernce,
      items: [
        { label: "Attio 101", labelitems: ["one", "two", "three"] },
        { label: "Managing your data", labelitems: ["four", "five", "six"] },
      ],
    },
    {
      id: "Apps",
      title: "Apps",
      Icon: images.Apps,
      items: [
        { label: "User profile", labelitems: ["item1", "item2"] },
        { label: "Organization", labelitems: ["item1", "item2"] },
      ],
    },
  ];

  const classes = useStyles();

  // track which sections are open
  const [openSections, setOpenSections] = useState({});
  // track which items (within sections) are open
  const [openItems, setOpenItems] = useState({});

  const toggleSection = (id) =>
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleItem = (secId, label) => {
    const key = `${secId}-${label}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      <nav className={classes.nav}>
        <Box className={classes.sidesearchbar}>
          <Searchbar />
        </Box>

        {/* Sections */}
        <List disablePadding className={classes.sidebarlist}>
          {sidebarSections.map(({ id, title, Icon, items }) => (
            <React.Fragment key={id}>
              {/* Section header */}
              <ListSubheader className={classes.sectionheader}>
                {/* <Icon style={{ marginRight: 8 }} /> */}
                <img
                  src={Icon}
                  alt={`${title} icon`}
                  style={{ marginRight: 8, width: 24, height: 24 }}
                />
                <Typography variant="subtitle2">{title}</Typography>
              </ListSubheader>

              {/* Section’s items */}
              <ListItem in={openSections[id]} timeout="auto" unmountOnExit>
                <List disablePadding dense>
                  {items.map(({ label, labelitems }) => {
                    const itemKey = `${id}-${label}`;
                    return (
                      <React.Fragment key={label}>
                        {/* Item label */}
                        <ListItem
                          button
                          className={classes.nested}
                          onClick={() => toggleItem(id, label)}
                        >
                          {openItems[itemKey] ? (
                            <ExpandMore fontSize="small" /> // down when open
                          ) : (
                            <ChevronRightOutlinedIcon fontSize="small" />
                          )}
                          <ListItemText
                            primary={label}
                            className={classes.sidebartext}
                          />
                        </ListItem>

                        {/* labelitems (deep) */}
                        <Collapse
                          in={openItems[itemKey]}
                          timeout="auto"
                          unmountOnExit
                        >
                          <Box className={classes.connector}>
                            <List disablePadding>
                              {labelitems.map((deep) => (
                                <ListItem
                                  key={deep}
                                  button
                                  // dense
                                  className={classes.nestedDeep}
                                >
                                  <ListItemText primary={deep} />
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
