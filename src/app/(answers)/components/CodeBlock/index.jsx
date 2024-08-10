import { memo } from "react";
import { Highlight, themes } from "prism-react-renderer";

import { useCopyToClipboard } from "@/src/utils/hooks/useCopyToClipboard";
import Button from "@/src/components/ui/Button";

export const programmingLanguages = {
  javascript: ".js",
  python: ".py",
  java: ".java",
  c: ".c",
  cpp: ".cpp",
  "c++": ".cpp",
  "c#": ".cs",
  ruby: ".rb",
  php: ".php",
  swift: ".swift",
  "objective-c": ".m",
  kotlin: ".kt",
  typescript: ".ts",
  go: ".go",
  perl: ".pl",
  rust: ".rs",
  scala: ".scala",
  haskell: ".hs",
  lua: ".lua",
  shell: ".sh",
  sql: ".sql",
  html: ".html",
  css: ".css",
};

export const generateRandomString = (length, lowercase = false) => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXY3456789"; // excluding similar looking characters like Z, 2, I, 1, O, 0
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return lowercase ? result.toLowerCase() : result;
};

const CodeBlock = memo(({ language, value }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });

  const downloadAsFile = () => {
    if (typeof window === "undefined") {
      return;
    }
    const fileExtension = programmingLanguages[language] || ".file";
    const suggestedFileName = `file-${generateRandomString(
      3,
      true
    )}${fileExtension}`;
    const fileName = window.prompt("Enter file name" || "", suggestedFileName);

    if (!fileName) {
      // User pressed cancel on prompt.
      return;
    }

    const blob = new Blob([value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(value);
  };

  return (
    <div className="relative w-full text-[15px] font-sans codeblock bg-zinc-950 rounded-sm overflow-hidden">
      <div className="flex items-center justify-between w-full px-6 py-2 pr-4 bg-zinc-800 text-zinc-100">
        <span className="lowercase">{language}</span>
        <div className="flex items-center space-x-sm">
          <Button
            variant="ghost"
            className="hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0"
            onClick={downloadAsFile}
            size="icon"
            icon={
              <span className="material-symbols-outlined  font-semibold">
                download
              </span>
            }
          />
          <Button
            variant="ghost"
            size="icon"
            className=" hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0"
            onClick={onCopy}
            icon={
              <span className="material-symbols-outlined text-md font-semibold">
                {isCopied ? "done" : "content_copy"}
              </span>
            }
          />
        </div>
      </div>
      <Highlight
        language={language}
        theme={themes.okaidia}
        PreTag="div"
        code={value}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            style={style}
            className="text-[15px] !px-md no-scrollbar !bg-zinc-950"
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {/* <span className="p-sm">{i + 1}</span> */}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
});
CodeBlock.displayName = "CodeBlock";

export { CodeBlock };
