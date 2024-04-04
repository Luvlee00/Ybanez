// Function to create a custom password input dialog
function getPassword(callback) {
    var modal = document.createElement('div');
    modal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 999;">
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #fff; padding: 20px; border-radius: 5px;">
                <label for="passwordInput">Enter Password:</label><br>
                <input type="password" id="passwordInput" style="width: 100%; box-sizing: border-box; padding: 5px;"><br><br>
                <button id="confirmButton" style="padding: 5px 10px;">OK</button>
                <button id="cancelButton" style="padding: 5px 10px; margin-left: 10px;">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    var passwordInput = document.getElementById('passwordInput');
    var confirmButton = document.getElementById('confirmButton');
    var cancelButton = document.getElementById('cancelButton');

    confirmButton.onclick = function() {
        callback(passwordInput.value);
        document.body.removeChild(modal);
    };

    cancelButton.onclick = function() {
        document.body.removeChild(modal);
    };
}

document.getElementById("noAuthorizationButton").addEventListener("click", function() {
    var fileContent = "<script>window.location.href = 'https://www.pup.edu.ph/';</script>";
    var blob = new Blob([fileContent], { type: "text/html" });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "file_without_authorization.html";
    link.click();
});

document.getElementById("withAuthorizationButton").addEventListener("click", function() {
    getPassword(function(password) {
        if (password === "osaki") {
            var fileContent = "<script>window.location.href = 'https://www.pup.edu.ph/';</script>";
            var blob = new Blob([fileContent], { type: "text/html" });
            var link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = "file_with_authorization.html";
            link.click();
        } else {
            alert("Incorrect password!");
        }
    });
});
