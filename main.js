function timEmail() {
  let HovaTen = document.getElementById("hovaten").value;
  let chuthuong = HovaTen.toLowerCase();
  let array = Array.from(chuthuong.trim().split(" "));
  // array = ["la", "quoc","thang"]
  //   thanglq@dlu.edu.vn
  //   linhttp@dlu.edu.vn
  let ten = array[array.length - 1];
  var CatHoDem = "";
  for (let i = 0; i < array.length - 1; i++) {
    CatHoDem += array[i].substring(0, 1);
  }
  let email = ten + CatHoDem + "@dlu.edu.vn";
  //   console.log(email);

  if (HovaTen != "") {
    document.getElementById("ketqua").value = email;
    return true;
  } else {
    alert("Vui lòng nhập tên giảng viên!");
    return false;
  }
}
