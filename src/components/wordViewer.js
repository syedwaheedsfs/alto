import Typography from "@material-ui/core/Typography";
export default function WordViewer({ data }) {
  return (
    <div>
      <iframe
      src={data}
      width="100%"
      height="600px"
      title="word-viewer"
      style={{ border: 0 }}
    />

     <Typography paragraph>
       Support for word, this is the section for word
     </Typography>
    </div>
    
  );
}
