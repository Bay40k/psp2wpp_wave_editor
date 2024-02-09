import guide from "../public/guide/effects guide.md";
import Markdown from "react-markdown";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import remarkGfm from "remark-gfm";
import { useState } from "react";

// The component that takes markdown content as a prop
export default function MarkdownGuideAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <Accordion
      className="guideAccordion"
      type="single"
      collapsible
      onValueChange={toggleAccordion}
    >
      <AccordionItem value="guide">
        <AccordionTrigger className="guideAccordionText">
          {isOpen ? "Hide Guide" : "Show Guide"}
        </AccordionTrigger>
        <AccordionContent>
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Override h2 elements to include an ID
              h2: ({ node, ...props }) => {
                // Create an ID by slugifying the text content of the h2
                // This might involve replacing spaces with hyphens, lowercasing,
                // and removing special characters
                const id = node.children[0].value
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^\w-]+/g, "");
                return <h2 id={id} {...props} />;
              },
              // Override img elements to prepend the base path
              img: ({ src, ...props }) => {
                return <img src={`${basePath}${src}`} {...props} />
              }
            }}
          >
            {guide}
          </Markdown>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
