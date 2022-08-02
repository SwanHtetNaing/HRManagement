var controllerName = 'Employee';
var actionName = 'CreateUser';

(function () {
    $(function () {
        $("#CreateBtn").click(function (e) {
            e.preventDefault();
            if (validation()) {
                var _user = {
                    UserName: $("#UserName").val(),
                    Email: $("#Email").val(),
                    Password: $("#Password").val(),
                    RoleId: $("#RoleId").val()
                };
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: getRelativeUrl() + '/' + actionName,
                    data: {
                        user: _user
                    },
                    success: function (result, status, xhr) {
                        if (result.resCode == "00") {
                            swal("Create Successfully!", "", { icon: "success" })
                                .then(() => {
                                    window.location = `${getRelativeUrl()}/Index`;
                                });
                        }
                        else {
                            swal("Error!", result.resDesc, { icon: "error" })
                                .then(() => {
                                    $("#UserName").select();
                                });
                        }

                    },
                    error: function (xhr, status, error) {
                        swal("Error!", xhr.status + " " + xhr.statusText, { icon: "error" });
                    }
                });

            }
        });

        function validation() {
            var msgstr = "";
            var nameRegex = /^[a-zA-Z0-9 ]+$/; // Regex for special characters
            var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Regex for email address

            if ($("#UserName").val() == null || $("#UserName").val().trim() == '') {
                msgstr += "- Employee Name is required ! \n";
            }
            else if (!nameRegex.test($("#UserName").val())) {
                msgstr += "- Employee Name cannot contain special characters ! " + "\n";
            }

            if ($("#Email").val() == null || $("#Email").val().trim() == '') {
                msgstr += "- Email is required ! \n";
            }
            else if (!emailRegex.test($("#Email").val())) {
                msgstr += "- Invalid Email address ! " + "\n";
            }

            if ($("#Password").val() == null || $("#Password").val().trim() == '') {
                msgstr += "- Password is required ! \n";
            }

            if ($("#ConfirmPassword").val() == null || $("#ConfirmPassword").val().trim() == '') {
                msgstr += "- Confirm Password is required ! \n";
            }

            if (!($("#Password").val().trim() === $("#ConfirmPassword").val().trim())) {
                msgstr += "- Password and Confirm Password don't match each other ! \n";
            }

            if (msgstr != "") {
                swal("Warning!", msgstr, { icon: "warning" });
                return false;
            }
            else
                return true;
        }

        function getRelativeUrl() {
            var getUrl = window.location;
            var getHostName = getUrl.pathname.split('/')[1];
            if (getHostName === controllerName) {
                return (getUrl.origin + '/' + getUrl.pathname.split('/')[1]);
            } else {
                return (getUrl.origin + '/' + getUrl.pathname.split('/')[1] + '/' + controllerName)
            }
            //return getUrl.origin + getUrl.pathname ;
        }
    });
})();