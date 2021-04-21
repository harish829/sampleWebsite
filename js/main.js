// instail setup
const arrow = document.querySelector('.arrow-bottom');
const progressNames = ['.left-progress', '.middle-progress', '.right-progress']
const progressArray = []

// set the array in the middle of first progress
function setFirstProgressArrow () {
  const firstProgress = document.querySelector('.left-progress')
  arrow.style.left = `${firstProgress.getBoundingClientRect().width / 2}px`
}
setFirstProgressArrow();

for (let i = 0; i < progressNames.length; i++) {
  progressArray.push(document.querySelector(progressNames[i]))
}
// logic for displaying arrow on clicking progress 
progressArray.forEach( (progress, index) => {
  progress.addEventListener('click', (e) => {
    const {width} = progress.getBoundingClientRect()
    const position = index === 0 ? width / 2 : (width / 2) + (width * index);
    arrow.style.left = `${position}px`
  })
})

// when browser window is resize resetting arrow to first progress bar
window.addEventListener('resize', () => {
  setFirstProgressArrow();
} )