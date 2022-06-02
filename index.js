const inquirer = require('inquirer');

  inquirer
    .prompt([
      {
        
        name:'Value1',
        type:"input",
        message: 'Number1',

      },
      {
        name:'Value2',
        type:"input",
        message:'Number2'
      },
      {
        name:'Operation',
        type:'list',
        message:'Operation',
        choices:[
            'add',
            'subtract',
            'multiply',
            'divide'
        ]
      }
    ])
    .then(answers => {
      if(answers.Operation == "add"){
        console.log(parseInt(answers.Value1)+parseInt(answers.Value2))
      }
      if(answers.Operation == "subtract"){
        console.log(parseInt(answers.Value1)-parseInt(answers.Value2))
      }
      if(answers.Operation == "multiply"){
        console.log(parseInt(answers.Value1)*parseInt(answers.Value2))
      }
      if(answers.Operation == "divide"){
        console.log(parseInt(answers.Value1)/parseInt(answers.Value2))
      }
      
    });