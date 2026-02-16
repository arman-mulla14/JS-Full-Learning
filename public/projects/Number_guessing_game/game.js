function Roll() {

    let max = Number(document.getElementById('max').value);
    let min = Number(document.getElementById('min').value);
    let guess = Number(document.getElementById('num').value);

    let result = document.getElementById('data');
    let ges = document.getElementById('data1');

    ges.textContent = `Guess between ${min} - ${max}`;

    // validation
    if (isNaN(min) || isNaN(max) || isNaN(guess)) {
        result.textContent = "Enter valid numbers ❌";
        return;
    }

    if (min >= max) {
        result.textContent = "Min must be less than Max ❌";
        return;
    }

    if (guess < min || guess > max) {
        result.textContent = "Guess out of range ❌";
        return;
    }

    let answer = Math.floor(Math.random() * (max - min + 1)) + min;
    let attempts = 0;
    let running = true;

    while (running) {
        attempts++;

        if (guess > answer) {
            result.textContent = "Too High ⬆️ Try again";
            break;
        }
        else if (guess < answer) {
            result.textContent = "Too Low ⬇️ Try again";
            break;
        }
        else {
            result.textContent =
                `CORRECT ✅ Answer: ${answer} | Attempts: ${attempts} 😎`;
            running = false;
        }
    }
}