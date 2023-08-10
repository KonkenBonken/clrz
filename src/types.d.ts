declare module '*.scss' {
  const classes: Record<string, string>;
  export default classes;
}
type TagNames = keyof HTMLElementTagNameMap;
type TagMap = {
  [TagName in TagNames]: Partial<HTMLElementTagNameMap[TagName] & { className: string }>
}

declare namespace JSX {
  type IntrinsicElements = TagMap;
}