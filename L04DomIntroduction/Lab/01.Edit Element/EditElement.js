function editElement(ref,match ,replace) {
    const element = ref.textContent.split(match).join(replace);
    return ref.textContent = element;
}