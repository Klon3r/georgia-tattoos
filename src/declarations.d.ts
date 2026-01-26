declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.pdf" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.PNG" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.avif" {
  const src: string;
  export default src;
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HYPERTUNE_TOKEN: string;
  readonly VITE_BOOKING_LOCALHOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
