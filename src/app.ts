let listCount: number = 0;

let ratings: number[] = [];

let userRatings: string = '0';

const btnSubmit = document.getElementById('review') as HTMLButtonElement;

const txtName = document.getElementById('name') as HTMLInputElement;

const slcRating = document.getElementById('rating') as HTMLInputElement;

const txtComment = document.getElementById('comment') as HTMLInputElement;

const templateInsertLocation = document.getElementById('response') as HTMLElement;

    btnSubmit.addEventListener("click", (event)=>{
        if(txtName.value == "" || slcRating.value == ""){
            return false;
        }
        let templateClone = getTemplateClone('responseTemplate');
        templateClone.id = templateClone.id+listCount;
        listCount++;
        userRatings = getRating();
        templateClone.content.getElementById('responseUserName')!.innerText = txtName.value;
        templateClone.content.getElementById('responseRating')!.innerText = slcRating.value;
        if (txtComment.value)
            templateClone.content.getElementById('responseComment')!.innerText = txtComment.value;
        let totalRating = document.getElementById('currentRating');
        totalRating!.innerText = userRatings;
            templateInsertLocation.appendChild(templateClone.content);
        return false;
        });

function getTemplateClone(templateID:string){
    return document.getElementById(templateID)?.cloneNode(true) as HTMLTemplateElement;
}

function getRating(){


    let subRating = +slcRating.value;
    ratings.push(subRating);

    var i;
    let total: number = 0;
    for (i = 0; i < ratings.length; i++){
        total += ratings[i];
     }
    total /= listCount;

    return (Math.round(total * 100) / 100).toFixed(2);

   
}