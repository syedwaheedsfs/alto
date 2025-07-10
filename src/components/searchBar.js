import { dynamicimports } from "../imports";
import SearchDialog from "./search_dialog"
import { sidebarSections } from "./api"; 
 const { 
  makeStyles,
  Box,
  useState,
  Paper,
  SearchIcon,
  clsx,
  Typography, 
 } = dynamicimports;

const useStyles = makeStyles((theme) => ({
  searchRoot: (props) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: props.width || 230,
    padding: props.padding || theme.spacing(0.6, 1),
    borderRadius: theme.shape.borderRadius * 3,
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
    margin: "0 auto",
  }),
  input: {
    textAlign: "left",
    flex: 1,
    marginLeft: theme.spacing(1),
    fontSize: 14,
    height: 25,
    lineHeight: theme.spacing(0.22),
    color: theme.palette.text.secondary,
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
  searchdialog: {
    borderRadius: 16,
    padding: 0,
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
  },
  searchicon: {
    marginRight: 8,
  },
  suggestionlist: {
    maxHeight: 400,
    overflowY: "auto",
  },
}));

 
const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");

// build flat list of { label, path } from sidebarSections
const buildSuggestions = () =>
  sidebarSections.flatMap(({ id, items }) => {
    const sectionSlug = slugify(id);
    return items.flatMap(({ menu, subMenu }) => {
      const baseSlug = slugify(menu.label);
      const list = [
        { label: menu.label, path: `/help/${sectionSlug}/${baseSlug}` },
      ];
      if (Array.isArray(subMenu)) {
        subMenu.forEach((sub) => {
          list.push({
            label: sub.label,
            path: `/help/${sectionSlug}/${baseSlug}/${slugify(sub.label)}`,
          });
        });
      }
      return list;
    });
  });


export default function CompactSearch({
  searchTerm,
  setSearchTerm,
  className,
  style,
  width,
  padding,
}) {
  const classes = useStyles({ width, padding });
  const [open, setOpen] = useState(false);
  const suggestions = buildSuggestions();

  const openDialog = () => setOpen(true);
  const closeDialog = () => {
    setOpen(false);
    setSearchTerm(""); 
  }

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

      <SearchDialog
        open={open}
        onClose={closeDialog}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        suggestions={suggestions}
      />
    </>
  );
}
