var sidebar = document.getElementById('sidebar');
console.log(sidebar);
var flag = 0;
if (sidebar.style.display != "none") {
    flag = 1;
}
console.log(flag);
const sidebutton = document.getElementById('sidebutton');
console.log(sidebutton);
const allcontent = document.getElementById('allcontent');
console.log(allcontent);

sidebutton.addEventListener('click', function() {
    console.log(flag);
    if (flag == 1) {
        sidebar.classList.replace('col-lg-2', 'width-0');
        allcontent.classList.replace('col-lg-10', 'col-lg-12')
        flag = 0;
    } else {
        sidebar.classList.replace('width-0', 'col-lg-2');
        allcontent.classList.replace('col-lg-12', 'col-lg-10')
        flag = 1;
    }
})