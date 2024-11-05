function copyText() {
    const withLineNumbers = document.getElementById("lineNumbers").checked;
    const withHighlight = document.getElementById("highlightCode").checked;
    const inputText = withHighlight
        ? hljs.highlightAuto(document.getElementById("inputText").value).value // Get the value of the textarea and highlight the code
        : document.getElementById("inputText").value;
    const outputPre = document.getElementById("output");
    const lines = inputText
        .split("\n")
        .map((line, index) => {
            if (!withLineNumbers) {
                return `<div class="line">${line}</div>`;
            }
            const lineNumber = index + 1;
            const maxDigitLineNumber = String(
                inputText.split("\n").length
            ).length;
            const padding = " ".repeat(
                maxDigitLineNumber - String(lineNumber).length
            ); // Calculate padding based on line number length
            return `<div class="line">${padding + lineNumber} ${line}</div>`;
        })
        .join("");
    outputPre.innerHTML = lines; // Set the innerHTML to display the formatted lines
}