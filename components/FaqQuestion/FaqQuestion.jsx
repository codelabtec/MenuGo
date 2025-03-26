import './FaqQuestion.css'
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqQuestion = ({ faqs }) => {
   
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-content">
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                <button
                    onClick={() => toggleFaq(index)}
                    className=""
                >
                    <span>{faq.question}</span>
                    {openIndex === index ? (
                    <Minus size={24} className="text-gray-600" />
                    ) : (
                    <Plus size={24} className="text-gray-600" />
                    )}
                </button>
                
                <AnimatePresence initial={false}>
                {openIndex === index && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                >
                    <div className="faq-answer">
                    {faq.answer}
                    </div>
                </motion.div>
                )}
                </AnimatePresence>

                </div>

                

            ))}
        </div>
    );
}

export default FaqQuestion;