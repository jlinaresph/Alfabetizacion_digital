
const faqdata = [
  {
    question: "Is this template completely free to use?",
    answer: "Yes, this template is completely free to use."
  },
  {
    question: "Can I use it in a commercial project?",
    answer: "Yes, you can."
  },
  {
    question: "What is your refund policy? ",
    answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
  },
  {
    question: "Do you offer technical support? ",
    answer: "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support."
  }
];

function createFaqItem(question, answer) {
  const faqItem = document.createElement('div');
  faqItem.className = 'faq-item';

  const faqQuestion = document.createElement('button');
  faqQuestion.className = 'faq-question';
  faqQuestion.textContent = question;
  faqQuestion.addEventListener('click', function() {
    faqAnswer.style.display = faqAnswer.style.display === 'block' ? 'none' : 'block';
    this.classList.toggle('active');
  });

  const faqAnswer = document.createElement('div');
  faqAnswer.className = 'faq-answer';
  faqAnswer.style.display = 'none';
  faqAnswer.textContent = answer;

  faqItem.appendChild(faqQuestion);
  faqItem.appendChild(faqAnswer);

  return faqItem;
}

function renderFaqs(faqDataArray) {
  const faqContainer = document.getElementById('faq-container');
  if(!faqContainer) {
    console.error('FAQ container not found');
    return;
  }

  faqDataArray.forEach(faq => {
    const faqElement = createFaqItem(faq.question, faq.answer);
    faqContainer.appendChild(faqElement);
  });
}

// En algún lugar de tu código, después de que el DOM esté completamente cargado, llamarías a:
renderFaqs(faqdata);
