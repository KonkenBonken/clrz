export default class GameObject<TagType extends Element = Element> {
  private _element?: TagType;

  protected get element() {
    return this._element
  }

  protected set element(element) {
    if (this.element && element)
      this.element.replaceWith(element)

    else if (!this.element && element)
      this.parent.append(element)

    else if (this.element && !element)
      this.element.remove()

    this._element = element;
  }

  constructor(
    readonly parent: Element
  ) { }

  protected rerender() {
    this.element = this.element;
  }
}