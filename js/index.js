var siteNameInput = document.getElementById(`siteName`);
var siteURLInput = document.getElementById(`siteURL`);
console.log(siteNameInput, siteURLInput);




var siteContainer = [];



if(localStorage.getItem('sites')!=null)
{
    siteContainer = JSON.parse(localStorage.getItem('sites'));
    displySite(siteContainer);
}

function addSite(){

        var site = {
            siteName: siteNameInput.value ,
            siteUrl: siteURLInput.value
    
        }
        siteContainer.push(site);
        localStorage.setItem("sites",JSON.stringify(siteContainer));
    
        displySite();
        clearForm()
        console.log(site);
        console.log(siteContainer);
  
}

function clearForm(){
    siteNameInput.value ="";
    siteURLInput.value ="";
}



function displySite()
{
    var cartona = ``;
    for(var i=0;i<siteContainer.length;i++)
    {
        cartona+= `<tr>
        <td>${i+1}</td>
        <td>${siteContainer[i].siteName}</td>
        <td><button class="btn btn-warning btn-sm">Visit</button></td>
        <td><button onclick="deleteSite(${i})" class="btn btn-danger btn-sm">Delete</button></td>
    </tr>`
}
document.getElementById('tableContent').innerHTML = cartona;

}

function deleteSite(siteIndex){
    siteContainer.splice(siteIndex,1);
    localStorage.setItem("sites",JSON.stringify(siteContainer));
    displySite(siteContainer);
}


// function isValidHttpUrl(str) {
//     const pattern = new RegExp(
//       '^(https?:\\/\\/)?' + // protocol
//         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//         '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
//         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//         '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//         '(\\#[-a-z\\d_]*)?$', // fragment locator
//       'i'
//     );
//     return pattern.test(str);
//   }
  
//   console.log(isValidHttpUrl('https://www.freecodecamp.org/')); // true
//   console.log(isValidHttpUrl('mailto://freecodecamp.org')); // false
//   console.log(isValidHttpUrl('freeCodeCamp')); // false
