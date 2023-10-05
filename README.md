# Whole Number Division Project

This project is a simple web application that allows users to perform whole number division. It includes form validation and error handling as specified in various user stories.

## User Stories

### Resolved Stories

1. **Starting program state:**
   - GIVEN that the submit button has not been pressed yet
   - AND the code has just loaded
   - THEN "NO calculation performed" should be displayed at the bottom

2. **Dividing numbers result in a whole number:**
   - GIVEN that the submit button is pressed
   - WHEN 20 is entered into the first input
   - AND 10 is entered into the second input
   - THEN 2 should be displayed at the bottom

### Unresolved Stories

3. **Dividing numbers result in a decimal number:**
   - GIVEN that the submit button is pressed
   - WHEN 20 is entered into the first input
   - AND 3 is entered into the second input
   - THEN the number 6 with no decimal should be shown

4. **Validation when values are missing:**
   - GIVEN that the submit button is pressed
   - WHEN either or both inputs are empty
   - THEN the divisions should not be done
   - AND the following should be displayed: "Division not performed. Both values are required in inputs. Try again."

5. **An invalid division should log an error in the console:**
   - GIVEN that the submit button is pressed
   - WHEN 20 is entered into the first input
   - AND -3 is entered into the second input
   - THEN the division should not be done
   - AND the following should be displayed: "Division not performed. Invalid number provided. Try again."
   - AND an error should be logged in the browser console that shows the call stack
   - BUT the program should not crash entirely

6. **Providing anything that is not a number should crash the program:**
   - GIVEN that the submit button is pressed
   - WHEN 'YOLO' is entered into the first input
   - AND '+++' is entered into the second input
   - THEN the entire screen should be replaced with "Something critical went wrong. Please reload the page"
   - AND an error should be logged in the browser console that shows the call stack.

## Project Structure

The project consists of an HTML file (`index.html`) and a JavaScript file (`scripts.js`). The HTML file contains the form and result display area, while the JavaScript file handles form submission, input validation, and division calculations.

## Usage

1. Open the `index.html` file in a web browser.

2. Enter values into the "Dividend" and "Divider" input fields.

3. Click the "Calculate" button to perform the division.

4. The result or error message will be displayed at the bottom of the page.

## Technologies Used

- HTML
- JavaScript
