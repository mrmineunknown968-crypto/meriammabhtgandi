
export interface Settings {
  company_name: string;
  contact_email: string;
  location: string;
}

export interface HomeContent {
  headline: string;
  subheadline: string;
  cta_text: string;
  hero_image?: string;
}

export interface AboutContent {
  title: string;
  content: string;
  trusted_by_title: string;
  client_locations: string[];
  features: {
    title: string;
    description: string;
  }[];
}

export interface ServicesContent {
  title: string;
  service_list: string[];
}

export interface WhyChooseUsContent {
  title: string;
  reasons: {
    title: string;
    icon: string;
  }[];
}

export interface ContactContent {
  title: string;
  description: string;
}
   