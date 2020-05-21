var arrayReturn = [];
    $.ajax({
        url: "https://api.covid19api.com/summary",
        type: 'get',
        dataType: 'json',
        success: function (data) {
        console.log("Entered");
        for(i=1; i < data.Countries.length; i++){
          arrayReturn.push([data.Countries[i].Country,data.Countries[i].TotalConfirmed,data.Countries[i].TotalRecovered]);
        }
     inittable(arrayReturn);
     }
});

function inittable(data) {
                //console.log(data);
                $('#coviddata').DataTable( {
                        aoColumns : [
								{"sTitle" : "Country", "sWidth" : "10px"},
                                {"sTitle" : "Total Confirmed", "sWidth" : "50px", "asSorting": [ "desc"]},
                                {"sTitle" : "Total Recovered", "sWidth" : "240px"}
                                ],
                        "aaData": data,
                        "bInfo": false,
                        "paging": true,
                        "bPaginate": true,
                        "bLengthChange": false
                } );		
        }
