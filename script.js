const links = {
  github : "Kinho11",
  youtube : "jakelinygracielly",
  facebook : "maykbrito",
  instagram : "jakeliny.gracielly",
  twitter : "jakelinytec"

 }

 
 function changeSocialMediaLinks(){
   const socialMidias = document.querySelector("#socialLinks")

   for(let li of socialMidias.children){
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links[social]}`

    

   }

 }

 changeSocialMediaLinks()

 function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url).then(response => response.json())
  .then(data => {
    let name = document.querySelector("#userName")
    let bio = document.querySelector("#bio")
    let git = document.querySelector("#userGit")
    let nameGit = document.querySelector("#nameGit")
    let imageGit = document.querySelector("#imageGit")

    name.innerHTML = data.name
    bio.innerHTML = data.bio
    git.href = data.html_url
    nameGit.innerHTML = data.login
    imageGit.src = data.avatar_url
  })

 }
  


 getGitHubProfileInfos()