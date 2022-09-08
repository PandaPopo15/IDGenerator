const canvas = document.getElementById("generator");
const preview = document.getElementById("view");
preview.addEventListener("click", prev);

canvas.height = canvas.width / 1.616;
const ctx = canvas.getContext("2d");
ctx.font = "20px Helvetica";

const image = document.getElementById("imgDisplayed");
const logo = document.getElementById("logo");
const logo2 = document.getElementById("logo2");

function prev(){

      let inputName = document.getElementById("inputName").value;
      let inputCourse = document.getElementById("inputCourse").value;
      let inputYear = document.getElementById("inputYear").value;
      let inputIDNum = document.getElementById("inputIDNum").value;
      let inputBirth = document.getElementById("inputBirth").value;

      const name = document.getElementById("name");
      const birth = document.getElementById("birth");
      const courseYear = document.getElementById("courseYear");
      const idNum = document.getElementById("idNum");

      name.innerHTML = inputName;
      birth.innerHTML = inputBirth;
      courseYear.innerHTML = inputCourse + " " + inputYear + " Year";
      idNum.innerHTML = inputIDNum;

      ctx.fillStyle = "#1c572b";
      ctx.drawImage(logo2, 0, 0, 300, 190);
      ctx.rect(0, 0, 300, 56);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "20px Arial";
      ctx.fillText("Student ID", 10, 25);
      ctx.font = "14px Arial";
      ctx.fillText("Central Philippines State University", 10, 45);
      ctx.drawImage(logo, 240, 3, 55, 50);
      ctx.fillStyle = "#000";
      ctx.fillText("Name: " + name.innerHTML, 110, 90);
      ctx.fillText("Birthdate: "+ birth.innerHTML, 110, 115);
      ctx.fillText("Course&Yr : " + courseYear.innerHTML, 110, 140);
      ctx.fillText("ID no. : " + idNum.innerHTML, 110, 165);
      ctx.drawImage(image, 10, 65, 80, 110);
}

function loadImage(event) {
  const image = document.getElementById("imgDisplayed");
  image.src = URL.createObjectURL(event.target.files[0]);
}

const download = document.getElementById("down");
download.addEventListener("click", function(){

  if(window.navigator.msSaveBlob) {

    window.navigator.msSaveBlob(canvas.msToBlob(), "YourID.png");
  } else {

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "YourID.png";
    a.click();
    document.body.removeChild(a);
  }
});
