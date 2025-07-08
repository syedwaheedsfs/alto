import Typography from "@material-ui/core/Typography";
export default function HtmlViewer({ data }) {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: data }}
        style={{ width: "100%", height: "100%" }}
      />

      <Typography paragraph>
        Support for hmtl, this is the section for hmtl
      </Typography>
    </div>
  );
}
