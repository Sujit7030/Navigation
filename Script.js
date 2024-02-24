const progress=document.getElementById("Progress");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const circle=document.querySelectorAll(".Circle");
let currentActive=1;
next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circle.length) {
        currentActive = circle.length;
    }
    updateProgress();
});
prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive <1) {
        currentActive = 1;
    }
    updateProgress();
});
function updateProgress() {
    circle.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('Active');
        } else {
            circle.classList.remove('Active');
        }
    });

    const progressWidth = ((currentActive - 1) / (circle.length - 1)) * 100 + '%';
    progress.style.width = progressWidth;
    if (currentActive == 1) {
        prev.disabled = true;
    } else if (currentActive == circle.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

