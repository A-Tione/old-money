declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// declare namespace JSX {
//   interface IntrinsicElements {
//     [elemName: string]: any;
//   }
// }