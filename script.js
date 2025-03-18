document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".select-plan");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const plan = this.getAttribute("data-plan");
            const price = this.getAttribute("data-price");

            alert(`You selected the ${plan} for $${price}/month`);
        });
    });
});
