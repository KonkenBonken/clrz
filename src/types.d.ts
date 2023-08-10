declare module '*.scss' {
  const classes: Record<string, string>;
  export default classes;
}
type TagNames = keyof HTMLElementTagNameMap;
type TagMap = {
  [TagName in TagNames]: Partial<HTMLElementTagNameMap[TagName] & { className: string }>
}

type color = [r: number, g: number, b: number];

declare namespace JSX {
  type IntrinsicElements = TagMap;
}