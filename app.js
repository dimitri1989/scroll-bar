
function progress(){
    const scrools = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroledd = scrools / height * 100;
    let progres = document.querySelector(".progress-bar").style.width = scroledd + '%';
}
window.addEventListener('scroll',progress)