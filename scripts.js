const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Validate that both inputs are not empty.
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  try {
    // Parse the dividend and divider inputs as numbers.
    const parsedDividend = parseInt(dividend);
    const parsedDivider = parseInt(divider);

    // Check if the parsed values are NaN.
    if (isNaN(parsedDividend) || isNaN(parsedDivider)) {
      result.innerText = "Something critical went wrong. Please reload the page.";
      console.error("Invalid input. Not-a-Number provided.");
      return;
    }

    // Validate that the divider is not negative or zero.
    if (parsedDivider <= 0) {
      result.innerText = "Division not performed. Invalid number provided. Try again.";
      console.error("Invalid division attempted.");
      return;
    }

    // Perform the division.
    result.innerText = Math.floor(parsedDividend / parsedDivider);
  } catch (error) {
    // Crash the program if any errors occur.
    result.innerText = "Something critical went wrong. Please reload the page.";
    console.error(error);
    throw error;
  }
});