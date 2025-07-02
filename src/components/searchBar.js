import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";    
const useStyles = makeStyles((theme) => ({
  searchRoot: (props) => ({
    display: "flex",
    alignItems: "center",
    width: props.width || 230, // ← use the passed-in width, fallback to 230
    padding: props.padding || theme.spacing(0.6, 1),
    borderRadius: theme.shape.borderRadius * 3,
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
  }),
  input: {
    flex: 1,
    marginLeft: theme.spacing(1),
    fontSize: 14,
    height: 27,
    lineHeight: "32px",
    // remove default MUI padding
    "& input": {
      padding: 0,
    },
  },
  adornment: {
    marginLeft: theme.spacing(1),
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.borderRadius,
    fontSize: 12,
    fontFamily: "monospace",
    backgroundColor: "#fff",
    color: theme.palette.text.secondary,
    cursor: "default",
    boxShadow: "1px 3px 3px lightgrey",
  },
}));

export default function CompactSearch({
  searchTerm,
  setSearchTerm,
  className, // 1) accept an external className
  style,
  width,
  padding,
}) {
  const classes = useStyles({ width, padding });

  return (
    <Paper
      className={clsx(classes.searchRoot, className)}
      style={style}
      elevation={0}
    >
      <SearchIcon color="action" />
      <InputBase
        className={classes.input}
        placeholder="search help(e.g.integrations, importing, or billing)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        inputProps={{
          "aria-label": "search help",
        }}
      />
      <Box className={classes.adornment}>⌘ </Box>
      <Box className={classes.adornment}>K </Box>
    </Paper>
  );
}
