var controllerName = 'Employee';
var actionName = 'Delete';

(function () {
    $(function () {
        //$("#DeleteBtn").click(function (e) {
        //    e.preventDefault();
        //    $.ajax({
        //        type: 'POST',
        //        dataType: 'json',
        //        url: getRelativeUrl() + '/' + actionName,
        //        data: {
        //            id: $("#UserId").val()
        //        },
        //        success: function (result, status, xhr) {
        //            if (result.resCode == "00") {
        //                swal("Delete Successfully!", { icon: "success" })
        //                    .then(() => {
        //                        window.location = `${getRelativeUrl()}/Index`;
        //                    });
        //            }
        //            else {
        //                swal("Error!", result.resDesc, { icon: "error" });
        //            }

        //        },
        //        error: function (xhr, status, error) {
        //            swal("Error!", xhr.status + " " + xhr.statusText, { icon: "error" });
        //        }
        //    });
        //});

        function DeleteUser(_id) {
            e.preventDefault();
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: getRelativeUrl() + '/' + actionName,
                data: {
                    id: _id
                },
                success: function (result, status, xhr) {
                    if (result.resCode == "00") {
                        swal("Delete Successfully!", { icon: "success" })
                            .then(() => {
                                window.location = `${getRelativeUrl()}/Index`;
                            });
                    }
                    else {
                        swal("Error!", result.resDesc, { icon: "error" });
                    }

                },
                error: function (xhr, status, error) {
                    swal("Error!", xhr.status + " " + xhr.statusText, { icon: "error" });
                }
            });
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