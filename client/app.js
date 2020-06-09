$(document).ready(function () {
    $("#btnSubmit").on("click", () => {
        $.ajax({
            type: "GET",
            url: "/api/test",
            datatype: "json",
        }).then((res) => {
            console.log(res);

        })
    })

})