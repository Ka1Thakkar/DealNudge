import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "How does the copilot feature assist with deal flow management?",
        answer: "The copilot collects data, analyzes pitch decks, and provides insights aligned with your firm's investment thesis."
    },
    {
        question: "How does the platform identify and eliminate unsuitable deals?",
        answer: "It cross-checks deal attributes against your investment thesis to flag opportunities that don’t fit the criteria."
    },
    {
        question: "How can I add deals to the system?",
        answer: "You can add deals manually, directly via email, WhatsApp, or the LinkedIn integration for seamless sourcing."
    },
    {
        question: "What type of analytics does the system provide?",
        answer: "Our system delivers insights on deal duration, processed deals, and other metrics that evaluate quality."
    },
    {
        question: "How secure is the data shared on the platform?",
        answer: "Encrypted virtual data rooms ensure sensitive documents are accessible only to authorised personnel."
    },
]

const FAQs = () => {
    return (
        <div className="2xl:px-80 xl:px-40 md:px-20 px-10 flex flex-col items-center justify-center py-20 md:py-40 gap-16 md:gap-24">
            <h1 className="md:text-6xl text-4xl text-center font-bold">
                Frequently Asked Questions
            </h1>
            <Accordion type="single" collapsible className="w-full flex flex-col gap-5 md:gap-10" defaultValue={`item-0`}>
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="w-full border dark:border-white/25 border-black/25 rounded-xl md:py-5 md:px-5 shadow-lg data-[state=open]:dark:shadow-lg shadow-black/10 data-[state=open]:dark:shadow-brandBlue/25 data-[state=open]:shadow-brandBlue/25 data-[state=open]:dark:border-brandBlue data-[state=open]:border-brandBlue transition-all ease-in-out">
                        <AccordionTrigger className="w-full text-lg md:text-3xl p-4 text-left font-bold">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="w-full text-lg md:text-2xl font-medium p-4 text-black/50 dark:text-white/50">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

export default FAQs;