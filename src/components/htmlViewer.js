import { dynamicimports } from "../imports";
import React, { useState, useEffect, useRef } from "react";
const { Typography, CircularProgress, Box } =
  dynamicimports;
export default function HtmlViewer({ data }) {
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
        <div
          dangerouslySetInnerHTML={{ __html: data }}
          style={{ width: "100%", height: "100%" }}
        />

        <Typography paragraph>
          Support for hmtl, this is the section for hmtl
        </Typography>
      </div>
    </Box>
  );
}
