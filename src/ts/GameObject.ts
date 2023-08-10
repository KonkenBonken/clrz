export default class GameObject<TagType extends Element = Element> {
  private _element?: TagType;

  protected get element() {
    return this._element
  }

  protected set element(element) {
    if (this.element && element)
      this.element.replaceWith(element)

    else if (!this.element && element)
      this.gridEl.append(element)

    else if (this.element && !element)
      this.element.remove()

    this._element = element;
  }

  constructor(
    readonly gridEl: Element
  ) { }
}