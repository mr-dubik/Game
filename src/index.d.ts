// index.d.ts
import { iteratee } from "lodash";

declare module "*.jpg";
declare module "*.jpeg";

export {};

declare global {
    interface Window {
        application: any;
    }
    interface Element {
        checked: any;
        src: any;
        cardsEasy: any[];
    }
    interface HTMLLabelElement {}
    interface EventTarget {
        src: any;
    }
}
