function generateSelectOptions() {
    const select = document.getElementById('languageSelect');
    select.innerHTML = '';

    const option = document.createElement('option');
    option.value = 'auto';
    option.textContent = 'auto';
    select.appendChild(option);
    hljs.listLanguages().forEach(language => {
        const option = document.createElement('option');
        option.value = language;
        option.textContent = language;
        select.appendChild(option);
    });
    document.getElementById("languageSelect").value = 'auto';
}
generateSelectOptions();

function copyText() {
    const withLineNumbers = document.getElementById("lineNumbers").checked;
    const withHighlight = document.getElementById("highlightCode").checked;
    const selectedLanguage = document.getElementById("languageSelect").value;
    const inputText = withHighlight
        ? selectedLanguage == 'auto'
            ? hljs.highlightAuto(document.getElementById("inputText").value).value
            : hljs.highlight(document.getElementById("inputText").value, { language: selectedLanguage }).value
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