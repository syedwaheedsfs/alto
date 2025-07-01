import { images } from "./Assets/imageAlbum";
export const cardData = [
  {
    id: 1,
    title: "SMART AUDIT",
    description: "Accurate, compliant audit solution.",
    sections: [
      {
        heading: "Features",
        items: [
          {
            feature: "Audit Ready",
            tablecontent: ["Introduction", "Accessing the File Manager"],
            image: images.dashboard,
            pdfUrl: images.Pdf,
            videoUrl:
              "https://www.youtube.com/embed/D0UnqGm_miA?si=krm-E_1MSPWzO_Wc",
            wordUrl: `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
              "https://calibre-ebook.com/downloads/demos/demo.docx"
            )}`,
            excelUrl:
              "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?gid=0#gid=0",
            pptUrl:
              "https://docs.google.com/gview?url=https://www.adobe.com/support/ovation/ts/docs/ovation_test_show.ppt&embedded=true",
          },
          {
            feature: "Digital Audit Records",
            tablecontent: ["How to Use", "Audit Logs", "Verification"],
            image: images.seconddashboard,
            pdfUrl: images.secondpdf,
            videoUrl:
              "https://www.youtube.com/embed/es4x5R-rV9s?si=ZV40n6Z6Z0RvT1A-",
            wordUrl:
              "https://docs.google.com/document/d/1MXOkWkhF0Y5NFrVLXWB1Q3JQOZ2lbs2L/edit?usp=drive_link&ouid=106600566939457943450&rtpof=true&sd=true",
            excelUrl:
              "https://docs.google.com/spreadsheets/d/1jgq2vJZ7Ni0u4CZoSsQK5L7-ExlcJXZ-/edit?usp=drive_link&ouid=106600566939457943450&rtpof=true&sd=true",
            pptUrl:
              // "https://docs.google.com/gview?url=https://www.adobe.com/support/ovation/ts/docs/ovation_test_show.ppt&embedded=true",
              "https://docs.google.com/presentation/d/1UPxF5Id-FStnwYB2xnmX8We94B45y8-x/edit?usp=drive_link&ouid=106600566939457943450&rtpof=true&sd=true",
          },
          {
            feature: "Offline Auditing",
            tablecontent: ["Sync Data", "Local Storage"],
          },
        ],
      },
    ],
    image: images.Smartaudit,
  },
  {
    id: 2,
    title: "SMART EMP",
    description: "Streamlined environmental monitoring processes.",
    sections: [
      // {
      //   heading: "Features",
      //   items: [
      //     "1. Digital Layout and Mapping",
      //     "2. Scheduling (Planned & Random)",
      //     "3. EMP Process automation",
      //     "4. Corrective Action Management",
      //     "5. Built in FDA Listeria Guidelines",
      //     "6. Heat and Harborage Site Map",
      //     "7. Real-Time Data Analytics",
      //     "8. Workflow",
      //     "9. Notification",
      //   ],
      // },
      {
        heading: "Features",
        items: [
          {
            feature: "Digital Layout and Mapping",
            tablecontent: ["Introduction", "Accessing the File Manager"],
          },
          {
            feature: "Scheduling (Planned & Random)",
            tablecontent: ["How to Use", "Audit Logs", "Verification"],
          },
          {
            feature: "Corrective Action Management",
            tablecontent: ["Sync Data", "Local Storage"],
          },
          {
            feature: "EMP Process automation",
            tablecontent: [
              "Sync Data",
              "Local Storage",
              "EMP Process",
              "automation",
            ],
          },
        ],
      },
    ],
    image: images.Smartenp,
  },
  // {
  //   id: 3,
  //   title: "SMART LAB",
  //   description: "Automated, precise lab operations.",
  //   sections: [
  //     {
  //       heading: "Features",
  //       items: [
  //         "1. Laboratory Management",
  //         "2. Customer Portal",
  //         "3. Quote Management",
  //         "4. GMP Compliant Software",
  //         "5. Laboratory Integration",
  //         "6. Invoicing",
  //         "7. Dashboard and Reporting",
  //         "8. Analysis Planning",
  //         "9. Lab Asset Management",
  //       ],
  //     },
  //   ],
  //   image: images.Smartlab,
  // },
  // {
  //   id: 4,
  //   title: "SMART SPECIFICATION",
  //   description: "Ensure quality with standardized specifications.",
  //   sections: [
  //     {
  //       heading: "Features",
  //       items: [
  //         "1. Digital Specifications",
  //         "2. Built-In Product Characteristics",
  //         "3. Supplier To Material Linking",
  //         "4. Nutrition Facts Labels",
  //         "5. Bill of Materials Linking",
  //         "6. Alerts and Notifications",
  //         "7. Dashboard and Reporting",
  //         "8. Global Allergen List",
  //       ],
  //     },
  //   ],
  //   image: images.Smartspec,
  // },
  // {
  //   id: 5,
  //   title: "SMART CAPA",
  //   description: "Resolve issues, ensure compliance.",
  //   sections: [
  //     {
  //       heading: "Features",
  //       items: [
  //         "1. CAPA Management",
  //         "2. Complaint Management",
  //         "3. Product Hold and Release",
  //         "4. Deviations Management",
  //         "5. Root Cause Analysis",
  //         "6. Corrective Action Management",
  //         "7. Dashboard",
  //         "8. Effectiveness Review",
  //         "9. Reporting & Trend Analysis",
  //       ],
  //     },
  //   ],
  //   image: images.Smartcapa,
  // },
  // {
  //   id: 6,
  //   title: "SMART FARM",
  //   description: "Digitized farm management for efficiency.",
  //   sections: [
  //     {
  //       heading: "Features",
  //       items: [
  //         "1. Field Mapping",
  //         "2. Crop Management",
  //         "3. End-To-End Solutions",
  //         "4. Post Reap Management",
  //         "5. Blockchain-Enabled Traceability",
  //         "6. Weather Integration",
  //         "7. Dashboard and Reporting",
  //         "8. Agronomist and Grower Portal",
  //         "9. Offline Mobile Application",
  //       ],
  //     },
  //   ],
  //   image: images.Smartfarm,
  // },
  // {
  //   id: 7,
  //   title: "SMART RECALL",
  //   description: "Efficient and reliable recall management.",
  //   sections: [
  //     {
  //       heading: "Features",
  //       items: [
  //         "1. Single Source of Recall Data",
  //         "2. Recall Alerts",
  //         "3. Customized Notifications",
  //         "4. Food Safety Trends",
  //         "5. Searchable Database",
  //         "6. Dashboard",
  //         "7. Recall Management",
  //         "8. Mock Recall",
  //         "9. Regulatory Compliance",
  //       ],
  //     },
  //   ],
  //   image: images.Smartrecall,
  // },
  // {
  //   id: 8,
  //   title: "SMART SUPPLIER",
  //   description: "Enhance collaboration with supplier tools.",
  //   sections: [
  //     {
  //       heading: "Features",
  //       items: [
  //         "1. Supplier Risk Assessment",
  //         "2. Approval and Performance",
  //         "3. Supplier Engagement Portal",
  //         "4. Approval Scores & Ratings",
  //         "5. Improved Communication",
  //         "6. Non-Compliance Management",
  //         "7. Dashboard and Reporting",
  //         "8. Alerts and Notifications",
  //         "9. Cost Savings",
  //       ],
  //     },
  //   ],
  //   image: images.Smartsupplier,
  // },
  // {
  //   id: 9,
  //   title: "SMART COMPLIANCE",
  //   description: "Track and maintain regulatory adherencence",
  //   sections: [
  //     {
  //       heading: "Features",
  //       items: [
  //         "1. Automate Product Release",
  //         "2. Material & Product Verification",
  //         "3. Purchasing Document Management",
  //         "4. Real Time Product Compliance",
  //         "5. Save Time and Money",
  //         "6. Manage Product Non compliance",
  //         "7. Generate Compliance Certificate",
  //         "8. Effectiveness Review",
  //         "9. Improved Communication",
  //       ],
  //     },
  //   ],
  //   image: images.Smartcompliance,
  // },
  // {
  //   id: 10,
  //   title: "SMART HACCP",
  //   description: "Simplify hazard analysis for safety.",
  //   sections: [
  //     {
  //       heading: "Features",
  //       items: [
  //         "1. Digital HACCP",
  //         "2. Process Flow Diagrams",
  //         "3. End-To-End Solutions",
  //         "4. Hazard Database",
  //         "5. Smart Linking",
  //         "6. CCP/PCP Automation",
  //         "7. Dashboard and Reporting",
  //         "8. HACCP Reassessment",
  //         "9. Customized Risk Matrix",
  //       ],
  //     },
  //   ],
  //   image: images.Smarthaccp,
  // },
  // {
  //   id: 11,
  //   title: "SMART RECORD",
  //   description: "Accurate and effortless data recording.",
  //   sections: [
  //     {
  //       heading: "Features",
  //       items: [
  //         "1. Online Form Builder",
  //         "2. Conditions and Validations",
  //         "3. User Experience",
  //         "4. Advanced Search",
  //         "5. Traceability",
  //         "6. Offline Record Keeping",
  //         "7. Voice Integration",
  //         "8. Bluetooth Integration",
  //         "9. IoT Integration",
  //       ],
  //     },
  //   ],
  //   image: images.Smartrecord,
  // },
  // {
  //   id: 12,
  //   title: "SMART TRAINING",
  //   description: "Enable teams with digital learning.",
  //   sections: [
  //     {
  //       heading: "Features",
  //       items: [
  //         "Course Creation",
  //         "Self Learning",
  //         "Group Learning",
  //         "Training Skill Matrix",
  //         "Onboarding Training",
  //         "Refresher Training",
  //         "Dashboard and Reporting",
  //         "Scheduling",
  //         "Training Library",
  //       ],
  //     },
  //   ],
  //   image: images.Smarttraning,
  // },
  // {
  //   id: 13,
  //   title: "SMART DOCS",
  //   description: "Secure, centralized document management.",
  //   sections: [
  //     {
  //       heading: "Features",
  //       items: [
  //         "1. Document Creation",
  //         "2. Document Life Cycle",
  //         "3. 21 CFR Part 11 Compliant",
  //         "4. Advanced Search",
  //         "5. Global Quality & Food Safety Standards",
  //         "6. Audit Readiness",
  //         "7. Dashboard and Reporting",
  //         "8. Data Backup and Export",
  //         "9. Efficient Document Management",
  //       ],
  //     },
  //   ],
  //   image: images.Smartdoc,
  // },
  // {
  //   id: 14,
  //   title: "SMART IAM",
  //   description: "Manage identity and access seamlessly.",
  //   sections: [
  //     {
  //       heading: "Features",
  //       items: [
  //         "1. User Management",
  //         "2. Role Management",
  //         "3. Access Control",
  //         "4. Multi site and Corporate Access",
  //         "5. Admin Panel",
  //         "6. CCP/PCP Automation",
  //         "7. Master Data Bulk Upload",
  //         "8. Security",
  //         "9. Custom Role",
  //       ],
  //     },
  //   ],
  //   image: images.Smartaim,
  // },
  // {
  //   id: 15,
  //   title: "SMART REGULATORY",
  //   description: "Streamline and simplify regulatory tasks.",
  //   sections: [
  //     {
  //       heading: "Features",
  //       items: [
  //         "1. One-Stop Solution",
  //         "2. Centralize Regulatory Data",
  //         "3. Country and Commodity Specific Requirements",
  //         "4. Regulatory Update",
  //         "5. Searchable Database",
  //         "6. Alerts and Notifications",
  //         "7. Improved Visibility",
  //         "8. Reduce Workload",
  //         "9. Risk Assessment Models",
  //       ],
  //     },
  //   ],
  //   image: images.Smartregulatory,
  // },
  // {
  //   id: 16,
  //   title: "SMART VISITOR",
  //   description: "Streamlined visitor onboarding process.",
  //   sections: [
  //     {
  //       heading: "Features",
  //       items: [
  //         "1. Contactless Check-In",
  //         "2. Digital Training & Agreements",
  //         "3. Customized Look & Feel Design",
  //         "4. Photo & ID Capture",
  //         "5. Two-Way Communications",
  //         "6. Pre-Registration and Recurring Visitors",
  //         "7. Visitor Reports",
  //         "8. Employee Directory Integration",
  //         "9. Multilingual",
  //       ],
  //     },
  //   ],
  //   image: images.Smartvisitor,
  // },
];
