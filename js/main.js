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
            profname = document.querySelector('.profPanelText .profname'),
            time = document.querySelector('.profPanelText .list-inline');
            
            // THIS CODE HELP TO SHOW THE TEXT
            courseName.innerHTML = data.coursename + "_" +'<span class="text-primary">' + data.coursecode +"</span>";   
            // THIS CODE HELP TO SHOW THE NAME
            profname.innerHTML = "Professor - " + data.profname;
    }
})();