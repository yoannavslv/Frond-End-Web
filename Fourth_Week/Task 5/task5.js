function ColorPandH(sColor1,sColor2) {
    const tags = document.getElementsByTagName('p');
    const tagsCount = document.getElementsByTagName('p').length;
    const classes = document.getElementsByClassName('headertitle');
    const classesCount = document.getElementsByClassName('headertitle').length;
    
    for (let index = 0; index < tagsCount; index++) {
        tags[index].style.backgroundColor = sColor1;
    }

    for (let index = 0; index < classesCount; index++) {
        classes[index].style.backgroundColor = sColor2;
    }
    console.log(tagsCount);
    console.log(classesCount);
}

ColorPandH('blue','yellow');