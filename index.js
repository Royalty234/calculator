let values = [];

function output(val) {
  values.push(val);

  document.getElementById("screen").innerHTML = values.join("");
}

function calc() {
  // strip anything other than digits, (), -+/* and .
  let result = values.join("").replace(/[^-()\d/*+.]/g, "");

  try {
    result = eval(result);
    document.getElementById("screen").innerHTML = result;
    values = [];
  } catch (e) {
    if (e instanceof SyntaxError) {
      values = [];
      document.getElementById("screen").innerHTML = "invalid inputs";
    }
  }
}

function del() {
  values.pop();

  document.getElementById("screen").innerHTML = values.join("");
}

function clearer() {
  values = [];

  document.getElementById("screen").innerHTML = values.join("");
}
