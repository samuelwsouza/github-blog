import { useEffect } from "react";
import hljs from "highlight.js"; // Importe a biblioteca Highlight.js
import "highlight.js/styles/atom-one-dark.css"; // Importe um estilo CSS para Highlight.js

const CodeHighlighter = () => {
  useEffect(() => {
    // Destaque todos os blocos de código com a linguagem JavaScript
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className="javascript">
        {`let foo = 42; // foo in now a number
foo = 'bar'; // foo is now a string
foo = true;  // foo is now a boolean
`}
      </code>
    </pre>
  );
};

export default CodeHighlighter;
