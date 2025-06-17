let select = document.querySelectorAll('.currency')
        let btn = document.getElementById('btn')
        let input = document.getElementById('input')

        fetch('https://api.frankfurter.dev/v1/currencies')
        .then(res=>res.json())
        .then(res=>display(res))

        function display(res){
            //console.log(Object.entries(res))
            let curr = Object.entries(res)
            for (let i=0;i<curr.length;i++)
            {
                let option = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
                select[0].innerHTML +=option;
                select[1].innerHTML +=option;
               // console.log(option);
            }
        }

        btn.addEventListener('click',()=>{
            let curr1 = select[0].value;
            let curr2 = select[1].value;
            let inputValue = input.value;

            if(curr1==curr2)
                alert("Kindly Choose Different currency");
            else    
                convert(curr1,curr2,inputValue);
        })

        function convert(curr1,curr2,inputValue){
            let currApi = 'api.frankfurter.app';
            fetch(`https://${currApi}/latest?amount=${inputValue}&from=${curr1}&to=${curr2}`)
               .then((resp) => resp.json())
               .then((data) => {
                    //console.log(data)
                    document.getElementById('result').value = Object.values(data.rates)[0];

                  });
        }
       