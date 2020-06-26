let myquestions=[
    {
        question: "1. They said ___ mother would be home soon.",
        answers: {
            i: "their",
            ii: "there",
            iii: "they're"
        },
        correctAnswer: "i"
    },
    {
        question: "2. I was told the bread was over ___.", 
        answers: {
            i: "their",
            ii: "there",
            iii: "they're"
        },
        correctAnswer: "ii"   
    },
    {
        question: "3. I want to come ___ !",
        answers: {
            i: "to",
            ii: "too",
            iii: "two"
        },
        correctAnswer: "ii"
    },
    {
        question: "4. The family left on a trip ___ Brazil.",
        answers: {
            i: "to",
            ii: "too",
            iii: "two"
        },
        correctAnswer: "i"
    },
    {
        question: "5. I have one brother and ___ sisters.",
        answers: {
            i: "to",
            ii: "too",
            iii: "two"
        },
        correctAnswer: "iii"
    },
    {
        question: "6. I love the ___ of this new shampoo.",
        answers: {
            i: "scent",
            ii: "cent",
            iii: "sent"
        },
        correctAnswer: "i"
    },
    {
        question: "7. Did you get the birthday card I ___?",
        answers: {
            i: "scent",
            ii: "cent",
            iii: "sent"
        },
        correctAnswer: "iii"
    },
    {
        question: "8. That will be nine euro and eleven ___.",
        answers: {
            i: "scent",
            ii: "cent",
            iii: "sent"
        },
        correctAnswer: "ii"
    },
    {
        question: "9. Until next time, ___.",
        answers: {
            i: "buy",
            ii: "by",
            iii: "bye"
        },
        correctAnswer: "iii"
    },
    {
        question: "10. ___ in so much trouble now!",
        answers: {
            i: "Their",
            ii: "There",
            iii: "They're"
        },
        correctAnswer: "iii"
    },    
]
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generatequiz(myquestions, quizContainer, resultsContainer, submitButton);

function generatequiz(questions, quizContainer, resultsContainer, submitButton){

    function showquestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        
        var userAnswer = '';
        var numCorrect = 0;
        
        
        for(var i=0; i<questions.length; i++){

            
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            
            if(userAnswer===questions[i].correctAnswer){
                
                numCorrect++;
                
                
                answerContainers[i].style.color = 'lightgreen';
            }
            
            else{
                
                answerContainers[i].style.color = 'red';
            }
        }

        
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    
    showquestions(questions, quizContainer);
    
    
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}