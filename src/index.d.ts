// index.d.ts
import { iteratee } from "lodash";

declare module "*.jpg";
declare module "*.jpeg";

export {};

declare global {
    interface Window {
        application: {
            blocks: {};
            screens: {};
            step: {};
            difficulty: {};
            cardDeck: [];
        };
    }
    interface Element {
        src: string;
    }
    interface HTMLImageElement {
        
    }
}
