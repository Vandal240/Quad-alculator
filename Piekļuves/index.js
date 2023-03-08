$(document).ready(function(){
    $('#calculate').on('click', function(){

        $('.text').text('');
        $('.1').text('');
        $('.2').text('');

        let a = $("#coof-a").val();
        let b = $("#coof-b").val();
        let c = $("#coof-c").val();

        if(!a || !b || !c){
            alert('Fill all fields');
        } else {
            let d = b*b - 4*a*c;

            console.log(d);

            if(d < 0){
                $('.text').text('There are no real solutions')
            } else if(d==0){
                let x = -b / (2*a);

                console.log(x);

                $('.1').text('The only solution is: ' + x);

            } else if(d > 0){
                let x1 = (-b + Math.sqrt(d)) / (2 * a);
                let x2 = (-b - Math.sqrt(d)) / (2 * a);

                console.log(x1, x2);

                $('.1').text('The first solution is: ' + x1);
                $('.2').text('The second solution is: ' + x2);
            }

            
            $('#result').show();
        }
    })
})