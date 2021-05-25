import React from 'react';
import faqsData from '../fixtures/faqs.json';
import Accordion from '../components/accordion';

const FaqsContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map(({ id, header, body }) => (
        <Accordion.Item key={id}>
          <Accordion.Header>{header}</Accordion.Header>
          <Accordion.Body>{body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default FaqsContainer;
