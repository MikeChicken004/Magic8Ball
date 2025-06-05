// Makes it so enter on the input will act as the submit button
document.addEventListener("DOMContentLoaded", function() {
    const questionInput = document.getElementById("question");
    // Gets question input
    if (questionInput) {
        questionInput.addEventListener("keydown", function(event) {
            // Checks if enter is hit
            // Calls magic8Ball() if so
            if (event.key === "Enter") {
                event.preventDefault(); 
                magic8Ball();           
            }
        });
    }
});

//8 Ball Function called when submit or enter is hit
function magic8Ball() {
    let question = document.getElementById("question").value;
    let answerMessage = document.getElementById("answer-message");
    //Checks for a valid question
    //question with empty string
    if (question === ""){
        document.querySelector("img").src = "MP4ProjectCards/Base_Card_for_MP4_Project.png";
        answerMessage.innerHTML = "" 
        return false;
    // Question without question mark at the end
    } else if (!question.endsWith("?")){
        answerMessage.innerHTML = "The question must end with a question mark to get the answer."
        document.querySelector("img").src = "MP4ProjectCards/Base_Card_for_MP4_Project.png";
        return false;
    //If it is valid, it will call magic8BallSwitch() which will use Math.random to find a random number and project the answer. 
    } else if (question.includes("?")) {
        answerMessage.innerHTML = "Answer..."
        magic8BallSwitch();
    } 

    function magic8BallSwitch(){
        //random number to get the choice
        let choice = Math.floor(Math.random() * 21); 
        // switch case for the number choice
        switch(choice){
            //It is certain. (Affirmative)
            case 0:
                document.querySelector("img").src = "MP4ProjectCards/It_is_certain.png";
                break;
            //It is decidedly so. (Affirmative)
            case 1:
                document.querySelector("img").src = "MP4ProjectCards/It_is_decidedly_so.png";
                break;
            //Without a doubt. (Affirmative)
            case 2:
                document.querySelector("img").src = "MP4ProjectCards/Without_a_doubt.png";
                break;
            //Yes Definitely. (Affirmative)
            case 3:
                document.querySelector("img").src = "MP4ProjectCards/Yes_Definitely.png";
                break;
            //You may rely on it. (Affirmative)
            case 4:
                document.querySelector("img").src = "MP4ProjectCards/You_may_rely_on_it.png";
                break;
            //As I see it, yes. (Affirmative)
            case 5:
                document.querySelector("img").src = "MP4ProjectCards/As_I_see_it_yes.png";
                break;
            //Most Likely. (Affirmative)
            case 6:
                document.querySelector("img").src = "MP4ProjectCards/Most_likely.png";
                break;
            //Outlook good. (Affirmative)
            case 7:
                document.querySelector("img").src = "MP4ProjectCards/Outlook_good.png";
                break;
            //Yes. (Affirmative)
            case 8:
                document.querySelector("img").src = "MP4ProjectCards/Yes.png";
                break;
            //Signs point to yes. (Affirmative)
            case 9:
                document.querySelector("img").src = "MP4ProjectCards/Signs_point_to_yes.png";
                break;
            //Reply hazy, try again. (Non-committal)
            case 10:
                document.querySelector("img").src = "MP4ProjectCards/Reply_hazy__try_again.png";
                break;
            //Ask again later. (Non-committal)
            case 11:
                document.querySelector("img").src = "MP4ProjectCards/Ask_again_later.png";
                break;
            //Better not tell you now. (Non-committal)
            case 12:
                document.querySelector("img").src = "MP4ProjectCards/Better_not_tell_you_now.png";
                break;
            //Cannot predict now. (Non-committal)
            case 13:
                document.querySelector("img").src = "MP4ProjectCards/Cannot_predict_now.png";
                break;
            //Concentrate and ask again (Non-committal)
            case 14:
                document.querySelector("img").src = "MP4ProjectCards/Concentrate_and_ask_again.png";
                break;
            //Don't count on it (Negative)
            case 15:
                document.querySelector("img").src = "MP4ProjectCards/Don_t_count_on_it.png";
                break;
            //My reply is no (Negative)
            case 16:
                document.querySelector("img").src = "MP4ProjectCards/My_reply_is_no.png";
                break;
            //My sources say no (Negative)
            case 17:
                document.querySelector("img").src = "MP4ProjectCards/My_sources_say_no.png";
                break;
            //Outlook not so good. (Negative)
            case 18:
                document.querySelector("img").src = "MP4ProjectCards/Outlook_not_so_good.png";
                break;
            //Very doubtful. (Negative)
            case 19:
                document.querySelector("img").src = "MP4ProjectCards/Very_doubtful.png"; 
                break;
            //No. (Negative)
            case 20:
                document.querySelector("img").src = "MP4ProjectCards/No.png"; 
                break;
            //Default for the base card that reads Insert a question above.
            default:
                document.querySelector("img").src = "MP4ProjectCards/Base_Card_for_MP4_Project.png";   
        }
    }
}
