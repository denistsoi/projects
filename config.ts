type People = {
  name: string;
  imageUrl: string;
  role: string;
}

type Image = {
  name: string;
  filename: string;
}

type Config = {
  title: string;
  description: string;
  footer: string;
  alt: {
    logoName: string;
  }
  links: { href: string, text: string }[];
  founder: any;
  volunteers: { name: string, linkedin: string }[];
  people: People[];
  partners: Image[];
  networks: Image[];
  reports: any[]

  media: any;
}

export const Config: Partial<Config> = {
  title: "Grassroots Future",
  description: "Grassroots Future is a registered charity in Hong Kong which came out of a desire to help refugee-led initiatives and grassroots organizations working with refugees build capacity.",

  footer:
    "Grassroots Future is a charitable institution under section 88 of the Inland Revenue Ordinance with No. 91/17131",
  
  alt: {
    logoName: "Grassroots Future logo",
  },

  links: [
    {
      href: "media",
      text: "Media"
    }
  ],

  people: [
    // { name: "Carmen Wong", imageUrl: "profiles/carmen-wong.jpeg", role: "Projects Officer" },
    { name: "Briar Armani", imageUrl: "profiles/briar.jpeg", role: "Events Officer" }
  ],

  founder: {
    name: "Tegan Smyth",
    role: "Director",
    bio: [
      "Tegan is a legally-trained Compliance professional with 8+ years of experience in private practice and global financial institutions in sanctions, AML/KYC, and project management. Her interest in refugee issues stems from her days training as a lawyer, which involved working for a community legal centre in Australia that focussed on providing civil law advice to refugees and new migrants.",
      "As the Founder of Grassroots Future, she is involved in donation drives for refugee and asylum seeker communities, as well developing well-being, education and outreach initiatives to bridge gaps across communities.",
    ],
    imageUrl: "./profiles/tegan.jpeg",
  },

  volunteers: [
    {
      name: "Anjali Kelkar",
      linkedin: "https://www.linkedin.com/in/anjali-kelkar-12b28b/",
    },
    { name: "Denis Tsoi", linkedin: "https://www.linkedin.com/in/denistsoi/" },
  ],

  partners: [
    { name: "Yoga Mandala Project", filename: "yoga-mandala-project.png" },
    { name: "Encompass HK", filename: "encompass-hk.png" },
    { name: "Refugee Union", filename: "refugee-union-logo.jpeg" },
    { name: "Wise", filename: "wise.png" },
    { name: "Breadline", filename: "breadline.jpeg" }
  ],

  networks: [
    {
      name: "Asia Pacific Refugee Rights Network",
      filename: "asia-pacific-refugee-rights-network.png",
    },
  ],


  media: {
    logos: {
      dark: [
        "Dark_Chromatic_logo.png",                   
        "Dark_TransparentBg_Chomatic_logo.png",      
        "Dark_TransparentBg_logo.png",       
        "Dark_logo.png",
        // "Dark_TransparentBg_Chromatic_No_logo.png",  
      ],
      light: [
        "Light_TransparentBg_Chromatic_logo.png",
        "Light_TransparentBg_logo.png",
        "Light_logo.png",
        // "Light_No_Logo.png",
        // "Light_TransparentBg_Chromatic_No_logo.png",
      ]
    }
  },

  reports: [
    { 
      href: "https://issuu.com/grassrootsfuture/docs/grassroots_future_annual_report_2022_final_", 
      text: "2021",
      image: "/reports/2021_annual_report.png"
    },
    { 
      href: "https://issuu.com/grassrootsfuture/docs/gf_2021_annual_report_4_", 
      text: "2022",
      image: "/reports/2022_annual_report.png"
    }
  ]
}
