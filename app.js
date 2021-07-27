function tipCalculator()
         {
                var billAmount = document.getElementById("billamount").value;
        console.log(billAmount);
                
                var serviceQuality = document.getElementById("serviceQuality").value;
        console.log(serviceQuality);
        
                var noOfPeople = document.getElementById("noOfPeople").value;
        console.log(noOfPeople);
        
                var tipAmount = (billAmount*serviceQuality);
        console.log(tipAmount);

                var divideTip = (billAmount*serviceQuality) / noOfPeople;
        console.log(divideTip);


                tipAmount = Math.round(tipAmount * 100) / 100;
                tipAmount = tipAmount.toFixed(2);

        divideTip = Math.round(divideTip * 100) / 100;
        divideTip = divideTip.toFixed(2);

        document.getElementById("total").innerHTML="Total Amount is " + billAmount;
        document.getElementById("tipamount").innerHTML="Tip Amount is " +tipAmount;
        document.getElementById("dividetip").innerHTML="Tip Divided in No of People is " +divideTip;

        }