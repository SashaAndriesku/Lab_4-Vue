/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'primevue/config' {
  import type { Plugin } from 'vue'
  const PrimeVue: Plugin
  export default PrimeVue
}

declare module '@primevue/themes/aura' {
  const Aura: any
  export default Aura
}
