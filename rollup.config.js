import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default {
    input: 'src/index.ts',
    output: [
      {
          dir: "dist/cjs",
          format: "cjs"
      },
      {
          dir: "dist/esm",
          format: "es"
      }
    ],
    plugins: [typescript(), terser()]
};