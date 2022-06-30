import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./my-button.js";

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  @property()
  name = "World";

  @property()
  value = "";

  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <input type="text" .value=${this.value} @input=${this.updateValue} />
      <button @click=${this.displayAlert}>
        Click me and alert wiht ${this.value}
      </button>
      <hr />
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
      <hr />
      <my-button></my-button>
    `;
  }

  displayAlert() {
    alert(this.value || "no data");
  }

  updateValue(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
  }

  private _onClick() {
    this.count++;
  }

  foo(): string {
    return "foo";
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
