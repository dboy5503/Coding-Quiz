describe('Quiz Component', () => {
    beforeEach(() => {
        cy.visit('/quiz');
    });

    it('should load the quiz component', () => {
        cy.get('[data-testid="quiz-component"]').should('be.visible');
    });

    it('should start the quiz when the start button is clicked', () => {
        cy.get('[data-testid="start-button"]').click();
        cy.get('[data-testid="question"]').should('be.visible');
    });

    it('should display the next question when an answer is selected', () => {
        cy.get('[data-testid="start-button"]').click();
        cy.get('[data-testid="answer-option"]').first().click();
        cy.get('[data-testid="next-question"]').should('be.visible');
    });

    it('should show the results at the end of the quiz', () => {
        cy.get('[data-testid="start-button"]').click();
        cy.get('[data-testid="answer-option"]').each(($el, index, $list) => {
            cy.wrap($el).click();
            if (index < $list.length - 1) {
                cy.get('[data-testid="next-question"]').click();
            }
        });
        cy.get('[data-testid="quiz-results"]').should('be.visible');
    });
});