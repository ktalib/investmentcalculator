# SAIC Investment Calculator

This project is a simple investment calculator for a property investment platform, built using HTML, JavaScript, and dynamic data attributes passed from the backend.

## Features
- **Dynamic Investment Limits:** Min and Max investment amounts are dynamically retrieved from the database.
- **Interactive Modal:** Populates investment details dynamically on button click.
- **Responsive Design:** Designed for seamless user experience on both desktop and mobile devices.

## File Structure
```
project/
|-- index.html       # Main HTML file
|-- assets/
    |-- css/
        |-- styles.css  # Custom CSS for styling
    |-- js/
        |-- app.js      # JavaScript file for modal interactions
```

## How It Works
1. Each investment button has `data-*` attributes that include dynamic property details such as:
   - Property ID
   - Title
   - Amount per share
   - Min and Max investment limits
   - Profit and payout information

2. When the button is clicked, these attributes are used to dynamically populate the modal via JavaScript.

3. The modal allows the user to input an investment amount and displays relevant details.

## Example Code
### Button
```html
 <button class="btn btn-primary calculate-profit-btn" 
                    data-property-id="1"
                    data-title="Property Title"
                    data-amount="1000.00"
                    data-capital-back="1"
                    data-profit="200.00"
                    data-payout-period="Every Year For 3 Years">
                    Calculate Profit
                </button>
```

### Modal
```html
<div id="investmentModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Calculate Invest Amount</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div>
                    <label for="investAmountInput">Invest Amount</label>
                    <input type="number" id="investAmountInput" class="form-control">
                    <small id="investAmountMinMax" class="form-text text-muted">Min-Max invest amount 0.00 - 0.00</small>
                </div>
                <hr>
                <ul>
                    <li>Plan: <span id="propertyPlan">-</span></li>
                    <li>Amount: <span id="propertyAmount">-</span></li>
                    <li>Payout Period: <span id="propertyPayoutPeriod">-</span></li>
                    <li>Profit: <span id="propertyProfit">-</span></li>
                    <li>Capital Back: <span id="propertyCapitalBack">-</span></li>
                </ul>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Calculate</button>
            </div>
        </div>
    </div>
</div>
```

### JavaScript
```javascript
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.calculate-profit-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Fetch data from the button
            const propertyId = this.getAttribute('data-property-id');
            const title = this.getAttribute('data-title');
            const amount = this.getAttribute('data-amount');
            const minAmount = this.getAttribute('data-min-amount');
            const maxAmount = this.getAttribute('data-max-amount');
            const capitalBack = this.getAttribute('data-capital-back');
            const profit = this.getAttribute('data-profit');
            const payoutPeriod = this.getAttribute('data-payout-period');

            // Update modal content
            const modal = document.getElementById('investmentModal');
            modal.querySelector('.modal-title').textContent = `Calculate Invest Amount for ${title}`;
            modal.querySelector('#investAmountInput').setAttribute('placeholder', `Min-Max ${minAmount} - ${maxAmount}`);
            modal.querySelector('#investAmountMinMax').textContent = `Min-Max invest amount ${minAmount} - ${maxAmount}`;
            modal.querySelector('#propertyPlan').textContent = title;
            modal.querySelector('#propertyAmount').textContent = `${amount} EUR`;
            modal.querySelector('#propertyPayoutPeriod').textContent = payoutPeriod;
            modal.querySelector('#propertyProfit').textContent = `${profit} EUR`;
            modal.querySelector('#propertyCapitalBack').textContent = capitalBack === '1' ? 'YES' : 'NO';
        });
    });
});
```

## How to Use
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/saic-investment-calculator.git
   ```
2. Open the `index.html` file in your browser.
3. Adjust dynamic data attributes as needed in your backend logic.

## Technologies Used
- HTML
- CSS
- JavaScript

## License
This project is licensed under the MIT License. See the LICENSE file for details.
