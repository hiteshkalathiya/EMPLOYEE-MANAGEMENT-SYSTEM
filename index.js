const emp = (e) => {
    e.preventDefault();



    let name = document.getElementById("name").value;
    let jobrole = document.getElementById("selectjob").value;
    let department = document.getElementById("selectdepartment").value;
    let salary = document.getElementById("salary").value;
    let work = document.getElementById("work").value;
    let email = document.getElementById("email").value;

    if (!name || !jobrole || !department || !salary || !work || !email) {
        alert("Please fill in all required fields.");
        return;
    }

    try {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");

        if (work <= 5) {
            td7.innerHTML = "junior";
        } else {
            td7.innerHTML = "senior";
        }

        td8.innerHTML = "delete";
        td8.style.backgroundColor = "#D50000";
        td8.style.color = "white";
        td8.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        });

        td1.innerHTML = name;
        td2.innerHTML = jobrole;
        td3.innerHTML = department;
        td4.innerHTML = salary;
        td5.innerHTML = email;
        td6.innerHTML = work;
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        document.getElementById("body").append(tr);
    } catch (error) {
        console.error("Error creating table row:", error);
    }
};

document.getElementById("form").addEventListener("submit", emp);
