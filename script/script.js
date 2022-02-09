const data = null;
let myoutput = '';
let card_warpper = document.getElementsByClassName("card-wrapper");
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        /* console.log(this.responseText); */
        let output = JSON.parse(this.responseText);
       
        console.log(output);
        for (var i=0; i < output.value.length; i++ ){
           /*   myoutput = output.value[i].title; */
           let title = output.value[i].title;
           let api_body = output.value[i].url;
           if (i % 2 == 0){
            myoutput += `
             
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${title}</div>
            <div class="card-body">
              <h5 class="card-title">News Link</h5>
              <p class="card-text">${api_body} </p>
            </div>
          </div>   
            
            
            
            `;
           } else{
            myoutput += `
             
            <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
            <div class="card-header">${title}</div>
            <div class="card-body">
              <h5 class="card-title">News Link</h5>
              <p class="card-text">${api_body} </p>
            </div>
          </div>   
            
            
            
            `;
           }
           
           
             
             
             document.getElementById('mycards').innerHTML = myoutput;
              
        }
       
        


       
    }
  
    
});
document.write(myoutput);

xhr.open("GET", "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?pageNumber=1&pageSize=10&withThumbnails=false&location=us");
xhr.setRequestHeader("x-rapidapi-host", "contextualwebsearch-websearch-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "35af2dad71msh1dc5743f5084b47p1e52e3jsn76cf9f46413d");

xhr.send(data);

