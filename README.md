# stylelint-config-case
[![Travis Build Status](https://travis-ci.org/TrySound/stylelint-config-case.svg)](https://travis-ci.org/TrySound/stylelint-config-case)

> The case shareable config for stylelint.

## Example

```css
.selector-1::before {
  background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
  box-sizing: border-box;
  display: block;
  color: #333;
}

.selector-x {
  width: 10%;
}
.selector-y {
  width: 20%;
}
.selector-z {
  width: 30%;
}
```

_Note: the config is tested against this example, as such the example contains plenty of CSS syntax, formatting and features._

## Installation

```sh
$ npm i stylelint-config-case
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "stylelint-config-case"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:


```json
{
  "extends": "stylelint-config-case",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

***

MIT © [Bogdan Chadkin](mailto:trysound@yandex.ru)
