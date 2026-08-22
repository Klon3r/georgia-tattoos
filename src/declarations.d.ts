/// <reference types="vite/client" />

declare module "*.pdf" {
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly VITE_BOOKING_LOCALHOST: string;
  readonly VITE_BOOKING_EARLY_ACCESS_LOCALHOST: string;
  readonly VITE_BOOKING_EARLY_ACCESS_CODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
