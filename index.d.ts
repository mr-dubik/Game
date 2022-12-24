// index.d.ts
declare module "*.jpg";
declare module "*.jpeg";

export {};

declare global {
    interface Window { application: any; }
    interface Element { 
        checked: any; 
        src: any;
        cardsEasy: any[];
    }
    interface EventTarget {
        src: any;
        classList: any;
    }
}
