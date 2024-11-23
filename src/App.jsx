import React, { useState } from "react";
import { marked } from "marked";

const App = () => {
  // Default markdown content to load on page load
  const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://github.com/MrNaturi), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![practiceImage](https://imgs.search.brave.com/3uQtr9jUhG1Mp_ex57zejlu1afEEmry9agUnFZyVong/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzgwLzA0LzI0/LzM2MF9GXzk4MDA0/MjQ2N19TbEJZcjJG/aVplZXNXcnJwa1d4/VmxpM3U2MUNuMFE3/NS5qcGc)
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Markdown Previewer</h1>

      <div className="flex w-full max-w-6xl gap-4">
        {/* Editor Window */}
        <div className="flex-1 flex flex-col border-2 border-gray-500 shadow-lg bg-gray-100">
          {/* Title Bar */}
          <div className="flex items-center justify-between bg-gray-300 border-b-2 border-gray-500 p-2">
            <div className="text-sm font-bold text-gray-700">Markdown Editor</div>
            <div className="flex space-x-1">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
          </div>

          {/* Editor Textarea */}
          <textarea
            className="flex-1 p-4 bg-gray-100 text-gray-800 font-mono focus:outline-none resize-none"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Type your markdown here..."
          ></textarea>
        </div>

        {/* Preview Window */}
        <div className="flex-1 flex flex-col border-2 border-gray-500 shadow-lg bg-gray-100">
          {/* Title Bar */}
          <div className="flex items-center justify-between bg-gray-300 border-b-2 border-gray-500 p-2">
            <div className="text-sm font-bold text-gray-700">Preview</div>
            <div className="flex space-x-1">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
          </div>

          {/* Preview Content */}
          <div
            id="preview"
            className="flex-1 p-4 overflow-y-auto bg-gray-100 text-gray-800 prose"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default App;
