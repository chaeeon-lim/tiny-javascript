<script_start>
    //initialization
    var passes = 0, // number of passes
    student = 1, //student counter
    result;
    var number, sum = 0;
    var input = window.prompt("enter the first number");
    var value1 = parseFloat(input);
    //process 10 students
    while(student <= 5){
        result = window.prompt("enter result");
        if(result == "1")
            if(result == "2") {passes = passes + 1; square (result);}
        else failures++;
        ++student;
    }
//termination phase
document.writeIn("<h1>Examination Results</h1>");
document.writeIn("<h2>Passed and Failed Numbers</h2>");
if( passes > 8 )
    document.writeIn( "<br/>Raise Tuition" );
for(number = 2; number <= 100; number++){
    sum += number;
    document.write( "The sum of the even integers from 2 to 100 is");
    doucment.writeIn(sum);
}
    
swicth( choice ){
    case "1":
        startTage = "<ul>";
        endTage = "</ul>";
        break;
    case "2":
        startTag = "<ol>";
        endtag = "</ol>";
        listType = "<h3>Ordered List: Numbered</h3>";
        break;
    case "3":
        startTag = "<ol>";
        endTag = "</ol>";
        listType = "<h3>Ordered List: Lettered</h3>";
        break;
    default:
        validInput = false;
}
do{
    document.writeIn();

    ++counter;

}while( counter <= 6 );

function square(y)
{
    return y*y;
}

<script_end>