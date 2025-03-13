export function highlightText(text: string, search: string) {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, "gi");
    return text.replace(
      regex,
      `<span class="bg-golden text-black font-bold">$1</span>`
    );
  }
  