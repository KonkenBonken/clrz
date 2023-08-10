declare module '*.scss' {
  const classes: Record<string, string>;
  export default classes;
}
type TagNames = keyof HTMLElementTagNameMap;
type TagMap = {
  [TagName in TagNames]: Partial<HTMLElementTagNameMap[TagName] & { className: string }>
}
type Elements<TagName extends TagNames = TagNames> = TagMap[TagName];

declare namespace JSX {
  type Element = string;
  type IntrinsicElements = TagMap;
}