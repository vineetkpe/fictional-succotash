/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  interface Window {
    OneSignalDeferred?: any[];
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
    $: any;
    jQuery?: any;
    updatePricing?: (plan: string) => void;
  }
  const $: any;
  const jQuery: any;
}

export {};

