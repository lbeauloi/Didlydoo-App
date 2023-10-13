import { setAttendances } from "./setAttendances.js";

export function displayAttendances(dates, id, parent)
{
    let formContainer = document.createElement("div");
    formContainer.classList.add("attendancesForm");

    let userNameInput = document.createElement("input");
    userNameInput.setAttribute("type", "text");
    formContainer.append(userNameInput);

    let sendButton = document.createElement("button");
    sendButton.classList.add("sendAttendancesButton");
    sendButton.textContent = "send";
    formContainer.append(sendButton);

    let checkboxes = [];

    dates.forEach(element => {
        let checkboxContainer = document.createElement("div");
        checkboxContainer.classList.add("attendancesChekboxes");
        formContainer.append(checkboxContainer);
        checkboxes.push(checkboxContainer);

        let checkboxTrue = document.createElement("input");
        checkboxTrue.setAttribute("type", "radio");
        checkboxTrue.setAttribute("name", `radio${element}${id}`);
        checkboxContainer.append(checkboxTrue);

        let checkboxFalse = document.createElement("input");
        checkboxFalse.setAttribute("type", "radio");
        checkboxFalse.setAttribute("name", `radio${element}${id}`);
        checkboxContainer.append(checkboxFalse);
    });

    parent.append(formContainer);

    sendButton.addEventListener("click", () => {
        if (userNameInput.value == "")
        {
            console.log("no user name given !");
            return;
        }
        let userName = userNameInput.value;
        let eventDates = [];
        for (let i = 0; i < dates.length; i++)
        {
            let isAvailable;
            if (checkboxes[i].children[0].checked) isAvailable = true;
            else if (checkboxes[i].children[1].checked) isAvailable = false;

            if (isAvailable != null) eventDates.push({ date: dates[i], available: isAvailable});
        }
        let data = { name: userName, dates: eventDates};
        console.log(data);
        setAttendances(data, id); 
    })
}