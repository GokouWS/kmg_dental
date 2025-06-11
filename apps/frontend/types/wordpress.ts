interface AcfImageSize {
  [key: string]: string | number;
}

export interface AcfImage {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: AcfImageSize;
}

export interface UspPost {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: "usp"; // We can be specific here
  post_mime_type: string;
  comment_count: string;
  filter: "raw";
}

// This interface represents the structure of the main "acf" object
export interface HomepageAcfData {
  hero_headline: string;
  phone_number: string;
  email_address: string;
  cta_button_one_text: string;
  cta_button_two_text: string;
  header_logo: AcfImage;
  header_button_text: string;
  header_icon_phone: AcfImage;
  header_icon_email: AcfImage;

  // Hero Image
  hero_background_image: AcfImage;

  // Hero Badges
  hero_badge_icon_left: AcfImage;
  hero_badge_header_left: string;
  hero_badge_description_left: string;
  hero_badge_icon_middle: AcfImage;
  hero_badge_header_middle: string;
  hero_badge_description_middle: string;
  hero_badge_icon_right: AcfImage;
  hero_badge_header_right: string;
  hero_badge_description_right: string;

  // Hero USPs (Relationship Field)
  hero_usp_header: string;
  hero_usps: UspPost[]; // An array of USP post objects

  // Hero From Box
  hero_from_box_text_top: string;
  hero_from_box_text_bottom: string;

  // Hero Google Review
  hero_google_review_rating: string;

  // Section One
  section_one_image: AcfImage;
  section_one_author: string;
  section_one_header: string;
  section_one_paragraph_one: string;
  section_one_paragraph_two: string;
}

// This represents the entire object returned for a page from the WP REST API
export interface PageData {
  id: number;
  title: {
    rendered: string;
  };
  // ...other top-level page properties like date, slug, etc.
  acf: HomepageAcfData;
}
