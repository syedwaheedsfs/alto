import { dynamicimports } from "../imports";
const { Typography, CircularProgress, Box, useState, useRef, useEffect } =
  dynamicimports;
export default function PptViewer({ data }) {

  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    setLoading(true);

    const iframe = containerRef.current.querySelector("iframe");
    if (iframe) {
      // when iframe fires its native load event, hide spinner
      const onLoad = () => setLoading(false);
      iframe.addEventListener("load", onLoad);
      return () => iframe.removeEventListener("load", onLoad);
    } else {
      // no iframe → nothing to wait for
      setLoading(false);
    }
  }, [data]);

  return (
    <Box position="relative" width="100%" height="100%">
      {loading && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex={1}
          bgcolor="rgba(255,255,255,0.8)"
        >
          <CircularProgress />
        </Box>
      )}
      <div ref={containerRef}>
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
    </Box>
  );
}
