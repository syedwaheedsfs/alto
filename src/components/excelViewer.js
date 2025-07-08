import Typography from "@material-ui/core/Typography";

export default function ExcelViewer({ data }) {
  return (
    <div>
      <iframe
        src={data.replace("/edit?", "/pubhtml?")}
        width="100%"
        height="600px"
        title="excel-viewer"
        style={{ border: 0 }}
      />

      <Typography paragraph>
        Support for excel, this is the section for excel
      </Typography>
    </div>
  );
}
