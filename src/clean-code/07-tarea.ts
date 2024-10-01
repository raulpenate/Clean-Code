(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    public id: string;
    public type: HtmlType;
    constructor({ id, type }: HtmlElement) {
      this.id = id;
      this.type = type;
    }
  }

  class InputAttributes {
    public value: string;
    public placeholder: string;
    public id: string;

    constructor({ value, placeholder, id }: InputAttributes) {
      this.value = value;
      this.placeholder = placeholder;
      this.id = id;
    }
  }

  class InputEvents {
    constructor() {}

    setFocus() {
      console.log(`settings focus`);
    }
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement
  class InputElement {
    public htmlElement: HtmlElement;
    public inputAttributes: InputAttributes;
    public inputEvents: InputEvents;

    constructor(value: string, placeholder: string, id: string) {
      this.htmlElement = new HtmlElement({ id, type: "input" });
      this.inputAttributes = new InputAttributes({ value, placeholder, id });
      this.inputEvents = new InputEvents();
    }
  }

  const nameField = new InputElement("Fernando", "Enter first name", "txtName");
  nameField.inputEvents.setFocus();

  console.log({ nameField });
})();
