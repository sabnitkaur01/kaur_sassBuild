

(() => {

    fetch('./data/classData.json')
     // demand utilizing the bring API to make AJAX

    .then(respond => respond.json()) 
    

    .then(data => {
       handleData(data);
    })
    function handleData(data)
    {
        let courseName = document.querySelector('.profPanelText .text-muted'),
            profname = document.querySelector('.profPanelText .profName'),
            time = document.querySelector('.profPanelText .list-inline');
            
            // THIS CODE HELP TO SHOW THE TEXT
            courseName.innerHTML = data.coursename + "-" +'<span class="text-primary">' + data.coursecode +"</span>";   
            // THIS CODE HELP TO SHOW THE NAME
            profname.innerHTML = "Professor - " + data.profname;
            // this code help to show time
            time.innerHTML = "data.classtime[0]+ data.classtime[1]";
    }
})();