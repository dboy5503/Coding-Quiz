import React from 'react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
    beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
    });
    it('should render without crashing', () => {
        cy.mount(<Quiz />);
        cy.get('div').should('exist');
    });

    it('should display the correct title', () => {
        cy.mount(<Quiz />);
        cy.get('h1').contains('Quiz Title');
    });

    it('should have a start button', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start').should('exist');
    });
});