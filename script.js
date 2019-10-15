// TODO: add code here

window.addEventListener("load", function() {

  this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    response.json().then(function(json) {
      const container = document.getElementById("container");
      
      container.innerHTML = `<h3>Number of astronauts: ${json.length}</h3>`

      //sort per amount of hours in space
      json.sort(function compare(a,b) {
        return -(a.hoursInSpace - b.hoursInSpace);
      })
      
      for (let i = 0; i < json.length; i++) {
        //define the text that goes into "skills" later
        let skills = "";
        for (let j = 0; j < json[i]["skills"].length; j++) {
          skills += (json[i]["skills"][j] + ", ");
        }
        skills = skills.slice(0, skills.length - 2);

        //set up the "active" line to detect true or false and color accordingly
        let activeLine = "";
        if (json[i]["active"]) {
          activeLine = `<font color = "green">Active: ${json[i]["active"]}</font>`
        } else {
          activeLine = `<font color = "red">Active: ${json[i]["active"]}</font>`
        }

        //dynamically include the text
        container.innerHTML += `
          <div class="astronaut">
            <div class="bio">
              <h3>${json[i]["firstName"]} ${json[i]["lastName"]}</h3>
              <ul>
                <li>Hours in Space: ${json[i]["hoursInSpace"]}</li>
                <li>${activeLine}</li>
                <li>Skills: ${skills}</li>
              </ul>
            </div>
            <img class="avatar" src="${json[i]["picture"]}">
          </div>
        `
      }
    })
  })  

})












// THIS ACTED WEIRD, ASK WHY, HTML AUTOMATICALLY CLOSES THE TAGS

// window.addEventListener("load", function() {

//   this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
//     response.json().then(function(json) {
//       const container = document.getElementById("container");
      
//       for (let i = 0; i < json.length; i++) {
//         container.innerHTML += `
//           <div class="astronaut">
//             <div class="bio">
//               <h3>${json[i]["firstName"]} ${json[i]["lastName"]}</h3>
//               <ul>
//                 <li>Hours in Space: ${json[i]["hoursInSpace"]}</li>
//                 <li>Active: ${json[i]["active"]}</li>
//                 <li>Skills: `
//         container.innerHTML += `</li>
//               </ul>
//             </div>
//             <img class="avatar" src="${json[i]["picture"]}">
//           </div>
//         `
//       }
//     })
//   })  

// })