window.addEventListener("DOMContentLoaded",
    () => {
        const checkbox = document.querySelector("#checkbox");
        checkbox.addEventListener("click", () => {
            if (checkbox.checked === true) {
                document.querySelectorAll(".large-cards,.medium-cards").forEach(card => { card.style.backgroundColor = "hsl(228, 28%, 20%)"; });
                document.querySelector("body").style.backgroundColor = "hsl(230,17%,14%)";
                document.querySelector(".before").style.backgroundColor = "hsl(232,19%,15%)";
                document.querySelectorAll("h1,h2,h3,h4").forEach(heading => { heading.style.color = "hsl(0,0%,100%)"; });
                document.querySelectorAll("span,.subtitle").forEach(text => { text.style.color = "hsl(228,34%,66%)"; });
            }
            else {
                document.querySelectorAll(".large-cards,.medium-cards").forEach(card => { card.style.backgroundColor = "hsl(227, 47%, 96%)"; })
                document.querySelector("body").style.backgroundColor = "hsl(0,0%,100%)";
                document.querySelector(".before").style.backgroundColor = "hsl(225, 100%, 98%)";
                document.querySelectorAll("h1,h2,h3,h4").forEach(heading => { heading.style.color = "hsl(230,17%,14%)"; });
                document.querySelectorAll("span").forEach(text => { text.style.color = "hsl(228,12%,44%)"; });
            }
        });
        document.querySelectorAll(".medium-cards,.large-cards").forEach(cards => {
            cards.addEventListener("mouseover", () => {
                if (checkbox.checked === true) { cards.style.backgroundColor = "#333A56"; }
                else { cards.style.backgroundColor = "#e1e3f0"; }
            });
            cards.addEventListener("mouseleave", () => {
                if (checkbox.checked === true) { cards.style.backgroundColor = "hsl(228, 28%, 20%"; }
                else { cards.style.backgroundColor = "hsl(227, 47%, 96%)"; }
            })
        })
    }
);