const guidesList = document.querySelector('.guides');

//setup guides
const setupGuides = (data) => {

    let html = '';
    data.foreach(doc => {
        const guide = doc.data();
        console.log(guide);
    })

}