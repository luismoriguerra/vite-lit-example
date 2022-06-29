import { LitElement } from "lit";
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResult;
    name: string;
    value: string;
    count: number;
    render(): import("lit-html").TemplateResult<1>;
    displayAlert(): void;
    updateValue(e: Event): void;
    private _onClick;
    foo(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-element": MyElement;
    }
}
