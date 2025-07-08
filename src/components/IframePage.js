// components/IframePage.js
import React from "react";

export default function IframePage() {
  return (
    <>
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vQ1Z8MvMHZBQif5OolRInMzG7cb8Ggt3H3ZX2K4tUegcIvraoSmGJtkth43KNkZ7w/pubembed?start=false&loop=false&delayms=3000"
        frameborder="0"
        width="1280"
        height="749"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>

      <iframe
        src="https://scribehow.com/embed/Smart_Audit_Ejemplo_de_Auditoria__Smart_audit_ejemplos__35__TQQKTtKIZSKqetvIDg?skipIntro=true&as=scrollable"
        width="100%"
        height="640"
        allow="fullscreen"
        style={{ border: 0, minHeight: "640px" }}
      />
    </>
  );
}
