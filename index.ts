import type { App, Component } from 'vue';
import IconVue from './src/Icon.vue';

const components: Component[] = [
  IconVue,
]

export const JCICons = {
  install:(app: App<Element>)=>{
    components.forEach(component =>{
      app.component((component as any).name, component)
    })
  }
}