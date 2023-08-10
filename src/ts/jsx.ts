export default {
  createElement<TagName extends TagNames>(
    name: TagName,
    props: { [id: string]: string | boolean } | null,
    ...content: (string | HTMLElementTagNameMap[TagName])[]
  ) {
    props ||= {};

    const element = document.createElement(name)

    for (const [key, value] of Object.entries(props))
      if (typeof value === 'boolean')
        element.toggleAttribute(key, value);
      else if (key === "className")
        element.classList.add(...value.split(' '));
      else
        element.setAttribute(key, value);

    element.append(...content)

    return element;
  }
};
