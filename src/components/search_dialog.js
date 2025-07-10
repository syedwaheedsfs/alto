import { dynamicimports } from "../imports";
 const {
   makeStyles,
   Box,
   Dialog,
   InputBase,
   List,
   ListItem,
   ListItemText,
   IconButton,
   CancelIcon,
   SearchIcon,
   useHistory,
 } = dynamicimports;


const useDialogStyles = makeStyles((theme) => ({
  dialogPaper: {
    width: 600, 
    height: 400, 
    maxWidth: "none",
    padding: 0,
    borderRadius: 16,
    overflow: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 48,
    backgroundColor: "rgba(77, 170, 251, 0.12)",
  },
  searchBox: {
    padding: theme.spacing(1),
    borderBottom: "1px solid #eee",
  },
  suggestions: {
    flex: 1,
    overflowY: "auto",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  input: {
    fontSize: 14,
    padding: 9,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export default function SearchDialog({
  open,
  onClose,
  searchTerm,
  setSearchTerm,
  suggestions,
}) {
  const classes = useDialogStyles();
  const history = useHistory();
  const filtered = suggestions.filter(({ label }) =>
    label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ classes: { root: classes.dialogPaper } }}
    >
      <div className={classes.container}>
        <Box className={classes.header}>
          <IconButton size="small" onClick={onClose}>
            <CancelIcon />
          </IconButton>
        </Box>
        <Box className={classes.searchBox}>
          <InputBase
            fullWidth
            autoFocus
            placeholder="Search help (e.g. integrations, importing, billing)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            startAdornment={<SearchIcon className={classes.icon} />}
            inputProps={{ className: classes.input }}
          />
        </Box>
        <List className={classes.suggestions}>
          {filtered.map(({ label, path }) => (
            // const slug = item.toLowerCase().replace(/\s+/g, "-");
            // const path = `/help/${slug}`;

            <ListItem
              key={path}
              button
              onClick={() => {
                history.push(path);
                onClose();
              }}
            >
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </div>
    </Dialog>
  );
}
