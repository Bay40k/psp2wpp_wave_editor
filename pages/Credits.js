import Markdown from "react-markdown";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import remarkGfm from "remark-gfm";

// The component that takes markdown content as a prop
export default function MarkdownCreditsAccordion() {
    const content = `
- *bay40k (me)*
- *psp2wpp creator* - ***[https://github.com/Princess-of-Sleeping/psp2wpp](https://github.com/Princess-of-Sleeping/psp2wpp)***
- */u/Havocking1992* for some value descriptions and tutorials
- *smokeanthrax*
`
    return (
    <Accordion className="creditsAccordion" type="single" collapsible>
      <AccordionItem value="credits">
        <AccordionTrigger className="creditsAccordionText">
          Credits
        </AccordionTrigger>
        <AccordionContent>
          <Markdown className="creditsMarkdown" remarkPlugins={[remarkGfm]}>
            {content}
          </Markdown>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
