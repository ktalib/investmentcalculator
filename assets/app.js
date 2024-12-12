document.addEventListener('DOMContentLoaded', () => {
    const calculatorModal = new bootstrap.Modal(document.getElementById('investmentCalculatorModal'));
    const calculateButtons = document.querySelectorAll('.calculate-profit-btn');

    calculateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const propertyId = button.getAttribute('data-property-id');
            const title = button.getAttribute('data-title');
            const amount = parseFloat(button.getAttribute('data-amount'));
            const capitalBack = button.getAttribute('data-capital-back') === '1' ? 'Yes' : 'No';
            const profit = parseFloat(button.getAttribute('data-profit'));
            const payoutPeriod = button.getAttribute('data-payout-period');

            document.getElementById('propertyTitle').textContent = title;
            document.getElementById('calculatedAmount').textContent = `${amount.toFixed(2)} EUR`;
            document.getElementById('payoutPeriod').textContent = payoutPeriod;
            document.getElementById('capitalBack').textContent = capitalBack;

            const investmentInput = document.getElementById('investmentAmount');
            const totalElement = document.getElementById('total');
            const profitElement = document.getElementById('profit');

            investmentInput.value = '';
            totalElement.textContent = '-';
            profitElement.textContent = '-';

            investmentInput.addEventListener('input', () => {
                const investAmount = parseFloat(investmentInput.value) || 0;

                if (investAmount < 1000 || investAmount > 100000) {
                    totalElement.textContent = 'Invalid Amount';
                    profitElement.textContent = '-';
                } else {
                    const calculatedProfit = profit * (investAmount / amount);
                    const total = calculatedProfit + investAmount;

                    profitElement.textContent = `${calculatedProfit.toFixed(2)} EUR`;
                    totalElement.textContent = `${total.toFixed(2)} EUR`;
                }
            });

            calculatorModal.show();
        });
    });
});