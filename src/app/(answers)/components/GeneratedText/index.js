import React from "react";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { MemoizedReactMarkdown } from "../MemoizedMarkDown";
import { CodeBlock } from "../CodeBlock";

const GeneratedText = ({ answer }) => {
  return (
    <div className="w-full text-lg leading-[1.6] content-area">
      <MemoizedReactMarkdown
        className="prose prose-p:text-[15px] leading-6 break-words prose-p:leading-6 prose-p:my-xs prose-pre:p-0 prose-ol:text-[15px] prose-ol:leading-6 prose-ul:text-[15px] prose-ul:leading-6"
        remarkPlugins={[remarkGfm, remarkMath]}
        components={{
          p({ children }) {
            return <p className=" last:mb-sm">{children}</p>;
          },
          code({ node, inline, className, children, ...props }) {
            if (children?.length) {
              if (children[0] == "▍") {
                return (
                  <span className="mt-1 cursor-default animate-pulse">▍</span>
                );
              }

              children[0] = children[0].replace("`▍`", "▍");
            }

            const match = /language-(\w+)/.exec(className || "");

            if (inline) {
              return (
                <code className={`${className} font-bold`} {...props}>
                  {children}
                </code>
              );
            }

            return (
              <CodeBlock
                key={Math.random()}
                language={(match && match[1]) || ""}
                value={String(children).replace(/\n$/, "")}
                {...props}
              />
            );
          },
        }}
      >
        {answer}
      </MemoizedReactMarkdown>
    </div>
  );
};

export default GeneratedText;
