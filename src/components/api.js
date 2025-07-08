import {images} from "./Assets/imageAlbum"
export const sidebarSections = [
  {
    id: "Smart Audit", //change
    title: "SMART AUDIT", //change
    Icon: images.smartaudit, //change
    items: [
      {
        menu: { label: "Audit Ready", content: { type: "HTML", data: `` } }, //type=> HTML (Video/Youtube/Image/IFRAME), PDF, WORD, PPT, EXCEL,MIXED
        subMenu: [
          {
            label: "Question1",
            content: {
              type: "HTML",
              data: ` 
                <iframe
                  src="https://scribehow.com/embed/Smart_Audit_Ejemplo_de_Auditoria__Smart_audit_ejemplos__35__TQQKTtKIZSKqetvIDg?skipIntro=true&as=scrollable"
                  width="100%"
                  height="640"
                  allow="fullscreen"
                  style="border:0; min-height:640px;"
                ></iframe>`,
            },
          },
          {
            label: "Question2",
            content: {
              type: "EXCEL",
              data: `https://docs.google.com/spreadsheets/d/e/2PACX-1vQsFoDqWv7O4LwihJMSpFwfQWyq8IYT0HTYF2EWy2Jd6Q1xZBISnFZfVMdlmR-PkGdnttrDLxPCcDNg/pubhtml`,
            },
          },
        ],
      },
      {
        menu: {
          label: "Digital Audit records",
          content: { type: "HTML", data: `` },
        },
        subMenu: [
          {
            label: "Question1",
            content: {
              type: "PPT",
              data: `https://docs.google.com/presentation/d/e/2PACX-1vQ1Z8MvMHZBQif5OolRInMzG7cb8Ggt3H3ZX2K4tUegcIvraoSmGJtkth43KNkZ7w/pubembed?start=false&loop=false&delayms=3000`,
            },
          },
          {
            label: "Question2",
            content: {
              type: "WORD",
              data: `https://docs.google.com/document/d/1MXOkWkhF0Y5NFrVLXWB1Q3JQOZ2lbs2L/edit?usp=drive_link&ouid=106600566939457943450&rtpof=true&sd=true`,
            },
          },
        ],
      },
      {
        menu: {
          label: "Offline Auditing",
          content: { type: "HTML", data: `` },
        },
        subMenu: [
          {
            label: "Question1",
            content: [
              {
                type: "WORD",
                data: `https://docs.google.com/document/d/1MXOkWkhF0Y5NFrVLXWB1Q3JQOZ2lbs2L/edit?usp=drive_link&ouid=106600566939457943450&rtpof=true&sd=true`,
              },
              {
                type: "PPT",
                data: `https://docs.google.com/presentation/d/e/2PACX-1vQ1Z8MvMHZBQif5OolRInMzG7cb8Ggt3H3ZX2K4tUegcIvraoSmGJtkth43KNkZ7w/pubembed?start=false&loop=false&delayms=3000`,
              },
              {
                type: "EXCEL",
                data: `https://docs.google.com/spreadsheets/d/e/2PACX-1vQsFoDqWv7O4LwihJMSpFwfQWyq8IYT0HTYF2EWy2Jd6Q1xZBISnFZfVMdlmR-PkGdnttrDLxPCcDNg/pubhtml`,
              },
            ],
          },
          { label: "Question2", content: { type: "HTML", data: `` } },
        ],
      },
    ],
  },
  {
    id: "SMART EMP",
    title: "SMART EMP",
    Icon: images.smartenp,
    items: [
      {
        menu: {
          label: "Digital Layout and Mapping",
          content: { type: "HTML", data: `` },
        },
        subMenu: [
          { label: "Question1", content: { type: "HTML", data: `` } },
          { label: "Question2", content: { type: "HTML", data: `` } },
        ],
      },
      {
        menu: {
          label: "Scheduling (Planned & Random)",
          content: { type: "HTML", data: `` },
        },
        subMenu: [
          { label: "Question1", content: { type: "HTML", data: `` } },
          { label: "Question2", content: { type: "HTML", data: `` } },
        ],
      },
      {
        menu: {
          label: "Corrective Action Management",
          content: { type: "HTML", data: `` },
        },
        subMenu: [
          { label: "Question1", content: { type: "HTML", data: `` } },
          { label: "Question2", content: { type: "HTML", data: `` } },
        ],
      },
      {
        menu: {
          label: "EMP Process automation",
          content: { type: "HTML", data: `` },
        },
        subMenu: [
          { label: "Question1", content: { type: "HTML", data: `` } },
          { label: "Question2", content: { type: "HTML", data: `` } },
        ],
      },
    ],
  },
  {
    id: "SMART LAB",
    title: "SMART LAB",
    Icon: images.smartlab,
    items: [
      {
        menu: {
          label: "Laboratory Management",
          content: { type: "HTML", data: `` },
        },
        subMenu: [
          { label: "Question1", content: { type: "HTML", data: `` } },
          { label: "Question2", content: { type: "HTML", data: `` } },
        ],
      },
      {
        menu: {
          label: "Customer Portal",
          content: { type: "HTML", data: `` },
        },
        subMenu: [
          { label: "Question1", content: { type: "HTML", data: `` } },
          { label: "Question2", content: { type: "HTML", data: `` } },
        ],
      },
      {
        menu: {
          label: "Quote Management",
          content: { type: "HTML", data: `` },
        },
        subMenu: [
          { label: "Question1", content: { type: "HTML", data: `` } },
          { label: "Question2", content: { type: "HTML", data: `` } },
        ],
      },
      {
        menu: {
          label: "GMP Compliant Software",
          content: { type: "HTML", data: `` },
        },
        subMenu: [
          { label: "Question1", content: { type: "HTML", data: `` } },
          { label: "Question2", content: { type: "HTML", data: `` } },
        ],
      },
      {
        menu: {
          label: "Laboratory Integration",
          content: { type: "HTML", data: `` },
        },
        subMenu: [
          { label: "Question1", content: { type: "HTML", data: `` } },
          { label: "Question2", content: { type: "HTML", data: `` } },
        ],
      },
      {
        menu: {
          label: "Invoicing",
          content: { type: "HTML", data: `` },
        },
        subMenu: [
          { label: "Question1", content: { type: "HTML", data: `` } },
          { label: "Question2", content: { type: "HTML", data: `` } },
        ],
      },
      {
        menu: {
          label: "Dashboard and Reporting",
          content: { type: "HTML", data: `` },
        },
        subMenu: [
          { label: "Question1", content: { type: "HTML", data: `` } },
          { label: "Question2", content: { type: "HTML", data: `` } },
        ],
      },
      {
        menu: {
          label: "Analysis Planning",
          content: { type: "HTML", data: `` },
        },
        subMenu: [
          { label: "Question1", content: { type: "HTML", data: `` } },
          { label: "Question2", content: { type: "HTML", data: `` } },
        ],
      },
      {
        menu: {
          label: "Lab Asset Management",
          content: { type: "HTML", data: `` },
        },
        subMenu: [
          { label: "Question1", content: { type: "HTML", data: `` } },
          { label: "Question2", content: { type: "HTML", data: `` } },
        ],
      },
    ],
  },
];