let output = document.querySelector(".output");
let codeBox = document.querySelector(".input");
let langBtn = document.querySelectorAll(".btn");

let RUN = document.querySelector(".run-btn");
let htmlBtn = document.querySelector(".html-btn");
let cssBtn = document.querySelector(".css-btn");
let jsBtn = document.querySelector(".js-btn");


codeBox.addEventListener("click", () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    codeBox.style.border = `1px solid ${color}`;

}, { once: true });

var css_editor; var js_editor;

var html_editor = ace.edit("html_input");
html_editor.setTheme("ace/theme/chaos");

html_editor.session.setMode("ace/mode/html");
var htmlDefaultCode = `<!--Stylesheets and JavaScript files are already included-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p></p>
    <button>Show Time</button>
</body>
</html>`;
html_editor.setValue(htmlDefaultCode);

htmlBtn.style.color = "red";
htmlBtn.style.textShadow = "0 0 25px red";


let isCssClick = false; let isJsClick = false;

RUN.addEventListener("click", () => {

    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    output.style.border = `1px solid ${color}`;
    let htmlCode;


    if(isJsClick) {
         htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>${css_editor.getValue()}</style>
</head>
<body>
    ${html_editor.getValue()}
    <script>${js_editor.getValue()}</script>
</body>
</html>`;
    }

    
    else if (isCssClick) {
        htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>${css_editor.getValue()}</style>
</head>
<body>
    ${html_editor.getValue()}
</body>
</html>`;
    } else {
        htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${html_editor.getValue()}
</body>
</html>`;
    }

    var iFrame = document.querySelector(".output");
    iFrame.srcdoc = htmlCode;
});

let css_box = document.querySelector(".css_input");
let html_box = document.querySelector(".html_input");
let js_box = document.querySelector(".js_input");


let removeHtml_Js = () => {
    htmlBtn.style.color = "white";
    htmlBtn.style.textShadow = "none";
    cssBtn.style.color = "red";
    cssBtn.style.textShadow = "0 0 25px red";
    jsBtn.style.color = "white";
    jsBtn.style.textShadow = "none";
}

var cssDefaultCode = `body {
    margin: 0;
    padding: 0;
    text-align: center;
}
button {
    height: 35px;
    width: 150px;
    font-size: 17px;
    border: 1px solid royalblue;
    border-radius: 10px;
    background: transparent;
    display: none;
    cursor: pointer;
}
button:hover {
    background-color: royalblue;
    color: white;
}`;


 let isWrite = true;

let addCssEditor = () => {
    html_box.setAttribute("id", "remove");
    js_box.setAttribute("id", "remove");
    css_box.setAttribute("id", "css_input");
    css_editor = ace.edit("css_input");
    css_editor.setTheme("ace/theme/dracula");
    css_editor.session.setMode("ace/mode/css");
    let init = false; 
    var liveCode;
    css_editor.getSession().on("change", () => {
        init = true; isWrite = false;
        liveCode = css_editor.getValue();
        // console.log(cssLiveCode);
    });
    if (init) {
        css_editor.setValue(liveCode);
        //console.log(liveCode);
    } else if(isWrite) {
        css_editor.setValue(cssDefaultCode);
    }
}

let removeCss_Js = () => {
    htmlBtn.style.color = "red";
    htmlBtn.style.textShadow = "0 0 25px red";
    cssBtn.style.color = "white";
    cssBtn.style.textShadow = "none";
    jsBtn.style.color = "white";
    jsBtn.style.textShadow = "none";
}

var htmlLiveCode;
html_editor.getSession().on("change", () => {
    // init = true;
    htmlLiveCode = html_editor.getValue();
});

let addHtmlEditor = () => {
    css_box.setAttribute("id", "remove");
    js_box.setAttribute("id","remove");
    html_box.setAttribute("id", "html_input");
    html_editor = ace.edit("html_input");
    html_editor.setTheme("ace/theme/chaos");
    
}


let removeHtml_Css = () => {
    htmlBtn.style.color = "white";
    htmlBtn.style.textShadow = "none";
    cssBtn.style.color = "white";
    cssBtn.style.textShadow = "none";
    jsBtn.style.color = "red";
    jsBtn.style.textShadow = "0 0 25px red";
}

var jsDefaultCode = `let btn = document.querySelector("button");
btn.style.display = "inline-block";

btn.addEventListener("click",() => {
    showTime();
    setInterval(() => {
        showTime();
    }, 1000);
});

let showTime = () => {
    document.querySelector("p").innerText = new Date().toString();
}`;

let isWriteJs = true;

let addJsEditor = () => {
    css_box.setAttribute("id", "remove");
    html_box.setAttribute("id", "remove");
    js_box.setAttribute("id","js_input");
    js_editor = ace.edit("js_input");
    js_editor.session.setMode("ace/mode/javascript");
    js_editor.setTheme("ace/theme/dracula");
    let init = false; 
    var liveCode;
    js_editor.getSession().on("change", () => {
        init = true; isWriteJs = false;
        liveCode = js_editor.getValue();
        // console.log(cssLiveCode);
    });
    if (init) {
        js_editor.setValue(liveCode);
        // console.log(liveCode);
    } else if(isWriteJs) {
        js_editor.setValue(jsDefaultCode);
    }
}

for (let btn of langBtn) {
    btn.addEventListener("click", () => {
        if (btn.innerText == "CSS") {

            removeHtml_Js();
            addCssEditor();
            isCssClick = true;

        }
        if (btn.innerText == "HTML") {

            removeCss_Js();
            addHtmlEditor();

        }
        if (btn.innerText == "JavaScript") {

            removeHtml_Css();
            addJsEditor();
            isJsClick = true;

        }
    }
    )
}
