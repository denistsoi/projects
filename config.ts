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
  links: [any];
  founder: any;
  volunteers: { name: string, linkedin: string }[];
  people: People[];
  partners: Image[];
  networks: Image[];
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
    },
  ],

  people: [
    { name: "Carmen Wong", imageUrl: "profiles/carmen-wong.jpeg", role: "Projects Officer" }
  ],

  founder: {
    name: "Tegan Smyth",
    role: "Director",
    bio: [
      "Tegan is a legally-trained Compliance professional with 8+ years of experience in private practice and global financial institutions in sanctions, AML/KYC, and project management. Her interest in refugee issues stems from her days training as a lawyer, which involved working for a community legal centre in Australia that focussed on providing civil law advice to refugees and new migrants.",
      "As the Founder and CEO of Grassroots Future, she is involved in donation drives for refugee and asylum seeker communities, as well developing well-being, education and outreach initiatives to bridge gaps across communities.",
    ],
    imageUrl: "./profiles/tegan.jpeg",
  },

  volunteers: [
    {
      name: "Anjali Kelkar",
      linkedin: "https://www.linkedin.com/in/anjali-kelkar-12b28b/",
    },
    {
      name: "Aarohi Narain",
      linkedin: "https://www.linkedin.com/in/aarohi-narain/",
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
  ]
}
