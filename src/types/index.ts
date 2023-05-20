export {}

declare global {
  interface Project {
    title: string;
    url?: string;
    description: string;
    stack: string [];
    previewImage?: string;
    images: string[];
  }
}
