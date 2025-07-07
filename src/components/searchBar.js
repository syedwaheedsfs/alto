import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText"; 
import  { useState, useRef } from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Dialog from "@material-ui/core/Dialog";   
const useStyles = makeStyles((theme) => ({
  searchRoot: (props) => ({
    display: "flex",
    alignItems: "center",
    width: props.width || 230,
    padding: props.padding || theme.spacing(0.6, 1),
    borderRadius: theme.shape.borderRadius * 3,
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
  }),
  input: {
    textAlign: "left",
    flex: 1,
    marginLeft: theme.spacing(1),
    fontSize: 14,
    height: 25,
    lineHeight: theme.spacing(0.22),
    color: theme.palette.text.secondary,
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
  className,
  style,
  width,
  padding,
  suggestions = [
    "Introduction",
    "Automations billing",
    "Objects",
    "Understanding Attio's data model",
    "Introduction to navigating Attio",
    "Introduction to data importing",
    "Typeform app",
    "Tasks",
    "Create a workflow",
    "Attio Chrome extension",
    "Merge and delete records",
  ],
}) {
  const classes = useStyles({ width, padding });
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  const handleSelect = (item) => {
    setSearchTerm(item);
    setOpen(false);
  };

  return (
    <>
      <Paper
        className={clsx(classes.searchRoot, className)}
        style={style}
        elevation={0}
        onClick={openDialog}
      >
        <SearchIcon color="action" />
        <Typography className={classes.input}>Search help</Typography>
        <Box className={classes.adornment}>⌘ </Box>
        <Box className={classes.adornment}>K </Box>
      </Paper>

      <Dialog
        open={open}
        onClose={closeDialog}
        disableEscapeKeyDown={false}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          style: {
            borderRadius: 16,
            padding: 0,
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          },
        }}
      >
        {/* Header */}
        <Box p={1} borderBottom="1px solid #eee">
          <InputBase
            fullWidth
            autoFocus
            placeholder="Search help (e.g. integrations, importing, billing)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            startAdornment={
              <SearchIcon color="action" style={{ marginRight: 8 }} />
            }
            inputProps={{ style: { fontSize: 14, padding: 8 } }}
          />
        </Box>

        {/* Body */}
        <List style={{ maxHeight: 400, overflowY: "auto" }}>
          {suggestions
            .filter(
              (item) =>
                item &&
                item.toLowerCase().includes((searchTerm || "").toLowerCase())
            )
            .map((item) => (
              <ListItem button key={item} onClick={() => handleSelect(item)}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
        </List>

        {/* Footer */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={1}
          borderTop="1px solid #eee"
        >
          <Typography
            variant="caption"
            style={{ cursor: "pointer" }}
            onClick={closeDialog}
          >
            Esc Close
          </Typography>
        </Box>
      </Dialog>
    </>
  );
}
