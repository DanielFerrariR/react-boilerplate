declare module "warpjs" {
  class Warp {
    constructor(node?: Node);
    transform(transformer: (transformer: number[]) => number[]): void;
  }

  export default Warp;
}
