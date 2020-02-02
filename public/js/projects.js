$(function () {
    // Send the PUT request.
    $.ajax("/api/projects", {
        type: "GET",
    }).then(
        function (res) {
            loadProjects(res);

        }
    );
});

function loadProjects(data) {
    var projectHTML = "";
    for (i = 0; i < data.length; i++) {
        projectHTML = `
         <section class="main-section position-static pt-3 pb-3 pr-5 bg-white mx-auto">
         <div class="row pl-3">
        <div class="col-md-7 col-xs-12">
            
            <h4>${data[i].name}</h4>
          ${data[i].description}
          
          <div class="container">
              <p><a href="${data[i].link}">GitHub Repo</a></p>
          </div>
        </div>
        <div class="col-md-5 col-xs-12">
          <img src="${data[i].href}"  class="img-fluid position-relative pt-4" style="height: 250px; width: 380px">
        </div>
      </div>`;
        i++;
        projectHTML += `<div  class="container-fluid d-flex mt-5 ml-2 mb-5">
      <section class="main-section position-static pt-3 pb-3 pr-5 bg-white mx-auto">
        <div class="row pt-3 pl-3">
          <div class="col-md-5 col-xs-12 mb-4">
            <img src="${data[i].href}" class=" img-fluid position-relative" style="height: 220px; width: 380px">
          </div>
          <div class="col-md-7 col-xs-12 mb-4">
              <h4>${data[i].name}</h4>
              ${data[i].description}
            
            <div class="container">
                <p><a href="${data[i].link}">GitHub Repo</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>`;
        var project = $(projectHTML);
        $("#projects").append(project);
    }
}