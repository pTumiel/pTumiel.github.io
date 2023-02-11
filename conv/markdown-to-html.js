const fs = require('fs');

// Read the name of the input file from the command line arguments
const inputFileName = process.argv[2];

// Read the contents of the input file
const markdown = fs.readFileSync(inputFileName, 'utf8');

// Convert the Markdown to HTML
const html = markdownToHtml(markdown);

// Generate the name of the output file by replacing the ".md" extension with ".html"
const outputFileName = inputFileName.replace(/\.md$/, '.html');

// Write the HTML to the output file
fs.writeFileSync(outputFileName, html, 'utf8');

// Converts Markdown to HTML
function markdownToHtml(markdown) {
  // Replace Markdown syntax with HTML tags
  let html = markdown
    // Headers
    .replace(/^# (.*)$/gm, '<h1>$1</h1>')
    .replace(/^## (.*)$/gm, '<h2>$1</h2>')
    .replace(/^### (.*)$/gm, '<h3>$1</h3>')
    .replace(/^#### (.*)$/gm, '<h4>$1</h4>')
    .replace(/^##### (.*)$/gm, '<h5>$1</h5>')
    .replace(/^###### (.*)$/gm, '<h6>$1</h6>')
    // Emphasis
    .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*)\*/g, '<em>$1</em>')
    // Lists
    .replace(/^\* (.*)$/gm, '<li>$1</li>')
    .replace(/^1\. (.*)$/gm, '<li>$1</li>')
    .replace(/<li>([\s\S]+)<\/li>/gm, '<ul>$&</ul>')
    // Links
    .replace(/\[(.*)\]\((.*)\)/g, '<a href="$2">$1</a>')
    // Code
    .replace(/```([\s\S]+?)```/gm, '<pre>$1</pre>')
    .replace(/`(.*)`/g, '<code>$1</code>')
    // Paragraphs
    .replace(/^(?!<\/?(h\d|ul)>|<li>|<pre>|<code>|<a)/gm, '<p>$&</p>');

  return html;
}
