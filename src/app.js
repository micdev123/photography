// Change Navigation When Scroll
window.addEventListener("scroll", () => {
    // Target navigation
    document.querySelector(".navigation").classList.toggle("when__scroll", window.scrollY > 30);
})


// Theme Mode Switching
const switching = document.querySelector('.mode_switch')

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    switching.classList.toggle('bxs-bulb');
    document.documentElement.classList.add('dark')
} else {
    // switching.classList.toggle('bxs-bulb');
    document.documentElement.classList.remove('dark')
}

switching.addEventListener('click', (e) => {
    switching.classList.toggle('bxs-bulb');
    // if set via local storage previously
    if (!localStorage.getItem('theme')) {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    } 
    else {
        if (localStorage.theme === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }
})

// Toggle mobile nav__links
const menu__bar = document.querySelector(".menu__bar");
const menu__nav = document.querySelector(".menu__nav");

// Add click event to menu__bar
menu__bar.addEventListener('click', () => {
    menu__nav.classList.toggle("set__visible")
})