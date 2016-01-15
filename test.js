import test from "ava"
import config from "./"
import stylelint from "stylelint"

test("basic properties of config", t => {
  t.ok(isObject(config.rules), "rules is object")
})

function isObject(obj) {
  return typeof obj === "object" && obj !== null
}

const invalidCss = `.selector:before {}`

test("expected warnings", t => {
  return stylelint.lint({
    code: invalidCss,
    config: config,
  })
  .then(function (data) {
    const { errored, results } = data
    const { warnings } = results[0]
    t.ok(errored, "errored")
    t.is(warnings.length, 1, "flags one warning")
    t.is(warnings[0].text, "Expected double colon pseudo-element notation (selector-pseudo-element-colon-notation)")
  })
})

const validCss = (
`
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
`)

test("expected no warnings", t => {
  return stylelint.lint({
    code: validCss,
    config: config,
  })
  .then(function (data) {
    const { errored, results } = data
    const { warnings } = results[0]
    t.notOk(errored, "no errored")
    t.is(warnings.length, 0, "flags no warnings")
  })
})
