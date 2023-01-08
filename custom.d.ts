declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const path: string;
  export default path;
}

declare module "*.png" {
  const path: string;
  export default path;
}
