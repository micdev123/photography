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