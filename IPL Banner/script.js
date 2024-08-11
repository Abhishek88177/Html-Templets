const data = [
    { name: "Mahendra Singh Dhoni", debut: "2008", spec: "WK / Batter", dob: "07 July 1981", match: "250" },
    { name: "Ajinkya Rahane", debut: "2008", spec: "Batter", dob: "06 June 1988", match: "173" },
    { name: "Ruturaj Gaikwad", debut: "2020", spec: "Batter", dob: "31 Jan 1997", match: "53" },
    { name: "Ravindra Jadeja", debut: "2008", spec: "All-rounder", dob: "06 Dec 1988", match: "227" }
  ];
  
  const ids = [c1,c2,c3,c4];
  const name1 = document.getElementById("name");
  const debut = document.getElementById("debut");
  const spec = document.getElementById("spec");
  const dob = document.getElementById("dob");
  const match = document.getElementById("match");
  
  for (let i = 0; i < ids.length; i++) {
    ids[i].addEventListener("click", function() {
      name1.textContent = data[i].name;
      debut.textContent = data[i].debut;
      spec.textContent = data[i].spec;
      dob.textContent = data[i].dob;
      match.textContent = data[i].match;
    });
  }
  