

$("#comments_form").keypress(function (event) {
  if (event.which === 13 && !event.shiftKey) {
    event.preventDefault();
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    $("#form_submission_response").modal("show");

    document.getElementById("response").innerHTML = name.value + " we have received your message. Thank you for reaching out to us."

    name.value = "";
    email.value = "";
    message.value = "";


  }
});



function change_state(id1, id2) {
  element1 = document.getElementById(id1);
  element2 = document.getElementById(id2);
  if (element1.style.display === "none") {
    element1.style.display = "flex";
    element2.style.display = "none"
  }

  else {
    element2.style.display = "block";
    element1.style.display = "none"
  }
};

$("#project_management_link").click(function (event) {
  console.log("clicked");
  change_state(id1 = "project_management", id2 = "project_management_overlay");
});

$("#development_link").click(function (event) {
  console.log("clicked");
  change_state(id1 = 'development', id2 = 'development_overlay');
});

$("#design_link").click(function (event) {
  console.log("clicked");
  change_state(id1 = 'design', id2 = 'design_overlay');
});

function hover_show(id1, id2) {
  var image = document.getElementById(id1)
  image.style.opacity = 0
  var overlay = document.getElementById(id2)
  overlay.style.opacity = 1

}

function hover_return(id1, id2) {
  var image = document.getElementById(id1)
  image.style.opacity = 1
  var overlay = document.getElementById(id2)
  overlay.style.opacity = 0
}

$("#image1_div").hover(function () { hover_show(id1 = "image1", id2 = "image1_overlay") },
  function () { hover_return(id1 = "image1", id2 = "image1_overlay") });

$("#image2_div").hover(function () { hover_show(id1 = "image2", id2 = "image2_overlay") },
  function () { hover_return(id1 = "image2", id2 = "image2_overlay") });

$("#image3_div").hover(function () { hover_show(id1 = "image3", id2 = "image3_overlay") },
  function () { hover_return(id1 = "image3", id2 = "image3_overlay") });

$("#image4_div").hover(function () { hover_show(id1 = "image4", id2 = "image4_overlay") },
  function () { hover_return(id1 = "image4", id2 = "image4_overlay") });

$("#image5_div").hover(function () { hover_show(id1 = "image5", id2 = "image5_overlay") },
  function () { hover_return(id1 = "image5", id2 = "image5_overlay") });

$("#image6_div").hover(function () { hover_show(id1 = "image6", id2 = "image6_overlay") },
  function () { hover_return(id1 = "image6", id2 = "image6_overlay") });

$("#image7_div").hover(function () { hover_show(id1 = "image7", id2 = "image7_overlay") },
  function () { hover_return(id1 = "image7", id2 = "image7_overlay") });

$("#image8_div").hover(function () { hover_show(id1 = "image8", id2 = "image8_overlay") },
  function () { hover_return(id1 = "image8", id2 = "image8_overlay") });


