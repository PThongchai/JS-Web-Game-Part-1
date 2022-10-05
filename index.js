
// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

function backGround(imgPath, left, bottom, endHeight) {
    //  console.log("imgPath="+imgPath+" left="+left+" bottom="+ bottom+" endHeight="+ endHeight);
    
    for (let j = 0; j <= window.innerWidth / 100; j++) {
        for (let i = 0; i <= (endHeight / 100); i++) {
                newImage(imgPath, left + j * 100, bottom + i * 100);
        }

    }
}


function newImage(imgPath, leftPosition, bottomPosition) {
    let image = document.createElement('img')
    image.src = imgPath
    image.style.position = 'fixed'
    image.style.left = leftPosition + 'px'
    image.style.bottom = bottomPosition + 'px'
    document.body.append(image)

    return image;

}

function newItem(imgPath, leftPosition, bottomPosition) {
    let item = newImage(imgPath, leftPosition, bottomPosition);
    item.addEventListener('dblclick', function () {
        item.remove();
    })
}

//bonus backGround called.
/** start from grass position left bottom as 0 0 then set end of grass's height
 * next add sky image position left bottom as 0 grass's end of height then set remaining of window's height for sky's height
 * both have to fill up the whole window.innerWidth
 */
backGround('assets/grass.png', 0, 0, window.innerHeight*0.75);
backGround('assets/sky.png', 0, window.innerHeight*0.75, window.innerHeight - (window.innerHeight *0.75));

//newImage called.
newImage('assets/green-character.gif', 100, 100);
newImage('assets/pine-tree.png', 450, 200);
newImage('assets/tree.png', 200, 300);
newImage('assets/pillar.png', 350, 100);
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425);

//newItem called.
newItem('assets/sheild.png', 165, 185);
newItem('assets/staff.png', 600, 100);
newItem('assets/sword.png', 500, 405);

