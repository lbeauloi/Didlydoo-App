import { checkFalse, checkTrue } from "./checkboxStyle.js";
import { setAttendances } from "./setAttendances.js";

export function displayAttendances(dates, id, parent)
{
    // Create a form for adding attendances

    let tableBody = parent.querySelector("tbody");
    let tableRow = document.createElement('tr');
    tableRow.classList.add("attendancesForm");
    tableBody.append(tableRow);

    let tdInput = document.createElement('td');
    tableRow.append(tdInput);
    let inputContainer = document.createElement("form");
    inputContainer.classList.add("userNameContainer");
    tdInput.append(inputContainer);

    let userNameInput = document.createElement("input");
    userNameInput.classList.add("userNameInput");
    userNameInput.setAttribute("type", "text");
    userNameInput.setAttribute("placeholder", "User name");
    userNameInput.setAttribute("required", "true");
    userNameInput.setAttribute("maxlength", "256");
    inputContainer.append(userNameInput);

    let sendButton = document.createElement("button");
    sendButton.classList.add("sendAttendancesButton");
    sendButton.setAttribute("type", "submit");
    sendButton.textContent = "send";
    inputContainer.append(sendButton);

    let checkboxes = [];

    dates.forEach(element => {
        let tdCheckbox = document.createElement('td');
        tableRow.append(tdCheckbox);

        let checkboxContainer = document.createElement("div");
        checkboxContainer.classList.add("attendancesChekboxes");
        tdCheckbox.append(checkboxContainer);
        checkboxes.push(checkboxContainer);

        let checkboxTrueLabel = document.createElement("label");
        checkboxContainer.append(checkboxTrueLabel);
        checkboxTrueLabel.setAttribute("for", `true${element.date}${id}`);
        checkboxTrueLabel.textContent = "Yes";
        let checkboxTrue = document.createElement("input");
        checkboxTrue.classList.add("checkboxTrue");
        checkboxTrue.setAttribute("type", "radio");
        checkboxTrue.setAttribute("name", `radio${element.date}${id}`);
        checkboxTrue.setAttribute("id", `true${element.date}${id}`);
        checkboxContainer.append(checkboxTrue);
        checkboxTrue.addEventListener("change", () => { checkTrue(checkboxContainer); });

        let checkboxFalseLabel = document.createElement("label");
        checkboxContainer.append(checkboxFalseLabel);
        checkboxFalseLabel.setAttribute("for", `false${element.date}${id}`);
        checkboxFalseLabel.textContent = "No";
        let checkboxFalse = document.createElement("input");
        checkboxFalse.classList.add("checkboxFalse");
        checkboxFalse.setAttribute("type", "radio");
        checkboxFalse.setAttribute("name", `radio${element.date}${id}`);
        checkboxFalse.setAttribute("id", `false${element.date}${id}`);
        checkboxContainer.append(checkboxFalse);
        checkboxFalse.addEventListener("change", () => { checkFalse(checkboxContainer); });
    });

    //parent.append(formContainer);

    // Add event to button to add attendances and give needed data
    sendButton.addEventListener("click", () => {
        if (userNameInput.value == "")
        {
            return;
        }
        let userName = userNameInput.value;
        userName = userName.charAt(0).toUpperCase() + userName.slice(1);
        let eventDates = [];
        for (let i = 0; i < dates.length; i++)
        {
            let isAvailable;
            if (checkboxes[i].children[1].checked) isAvailable = true;
            else if (checkboxes[i].children[3].checked) isAvailable = false;
            else
            {
                // if date not checked look if there is already an attendance for this date and use it
                let originalAnswer = dates[i].attendees.find(({ name }) => name === userName);
                if (originalAnswer != undefined)
                {
                    if (originalAnswer.available != null) isAvailable = originalAnswer.available;
                }
            }

            if (isAvailable != null) eventDates.push({ date: dates[i].date, available: isAvailable });
        }
        let data = { name: userName, dates: eventDates };

        // if no attendance precise do not add name
        if (data.dates.length == 0) return;

        setAttendances(data, id); 
    })
}