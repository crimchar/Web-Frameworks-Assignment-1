var listCount = 0;
var ratings = [];
var userRatings = '0';
var btnSubmit = document.getElementById('review');
var txtName = document.getElementById('name');
var slcRating = document.getElementById('rating');
var txtComment = document.getElementById('comment');
var templateInsertLocation = document.getElementById('response');
btnSubmit.addEventListener("click", function (event) {
    if (txtName.value == "" || slcRating.value == "") {
        return false;
    }
    var templateClone = getTemplateClone('responseTemplate');
    templateClone.id = templateClone.id + listCount;
    listCount++;
    userRatings = getRating();
    templateClone.content.getElementById('responseUserName').innerText = txtName.value;
    templateClone.content.getElementById('responseRating').innerText = slcRating.value;
    if (txtComment.value)
        templateClone.content.getElementById('responseComment').innerText = txtComment.value;
    var totalRating = document.getElementById('currentRating');
    totalRating.innerText = userRatings;
    templateInsertLocation.appendChild(templateClone.content);
    return false;
});
function getTemplateClone(templateID) {
    var _a;
    return (_a = document.getElementById(templateID)) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
}
function getRating() {
    var subRating = +slcRating.value;
    ratings.push(subRating);
    var i;
    var total = 0;
    for (i = 0; i < ratings.length; i++) {
        total += ratings[i];
    }
    total /= listCount;
    return (Math.round(total * 100) / 100).toFixed(2);
}
