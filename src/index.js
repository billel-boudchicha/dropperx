import Dropperx from './dropperx'
/*
 * Fix importing in typescript after rollup compilation
 * https://github.com/rollup/rollup/issues/1156
 * https://github.com/Microsoft/TypeScript/issues/13017#issuecomment-268657860
 */
Dropperx.default = Dropperx
export default Dropperx
