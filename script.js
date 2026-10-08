```javascript
const menuButton = document.getElementById("menuButton");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("active");
});

const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});
```
