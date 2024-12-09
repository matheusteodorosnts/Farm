const btnBuy = document.querySelectorAll("#btnbuy");

btnBuy.forEach((button) => {
    button.addEventListener("click", () => {
        button.textContent = "Purchased!";

        setTimeout(() => {
            button.textContent = 'Buy'
        }, 3000);
    });
});