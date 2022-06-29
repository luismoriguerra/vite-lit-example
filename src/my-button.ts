import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-button")
export class MyButton extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  @property({ type: Number })
  count = 0;

  _onClick() {
    this.count++;
  }

  render() {
    return html`
      <button @click=${this._onClick}>my fancy button ${this.count}</button>
    `;
  }
}
