// index.d.ts
declare module "*.jpg";
declare module "*.jpeg";

export {};

declare global {
    interface Window { application: any; }
}
