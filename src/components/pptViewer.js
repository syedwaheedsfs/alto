import Typography from "@material-ui/core/Typography";
export default function PptViewer({ data }) {
  return (
    <div>
      <iframe
        src={data}
        width="100%"
        height="600px"
        title="ppt-viewer"
        style={{ border: 0 }}
      />
      <Typography paragraph>
        Support for PPT, this is the section for PPT
      </Typography>
    </div>
  );
}
