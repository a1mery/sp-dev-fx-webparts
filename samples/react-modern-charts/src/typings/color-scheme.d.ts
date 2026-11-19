// Minimal ambient typing for the untyped CommonJS module `color-scheme` (module.exports = ColorScheme).
declare module 'color-scheme/lib/color-scheme' {
  class ColorScheme {
    constructor();
    public from_hue(hue: number): this;
    public scheme(name: string): this;
    public variation(variation: string): this;
    public add_complement(add: boolean): this;
    public colors(): string[];
  }
  export = ColorScheme;
}
