const inquirer = require('inquirer');

  inquirer
    .prompt([
      {
        
        name:'Value1',
        type:"number",
        message: 'Number1',

      },
      {
        name:'Value2',
        type:"number",
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
        inquirer
          .prompt([
            {
              name:"Sub1",
              type:"list",
              message:"Order to Subtract",
              choices:[
                answers.Value1 +"-"+ answers.Value2,
                answers.Value2 +"-"+ answers.Value1
              ]
            }
            
        ])
          .then((answers2) => {
            if(answers2.Sub1 == answers.Value1 +"-"+ answers.Value2){
              console.log(parseInt(answers.Value1)-parseInt(answers.Value2))
            }
            else{
              console.log(parseInt(answers.Value2)-parseInt(answers.Value1))
            }
        })
       
      }
      if(answers.Operation == "multiply"){
        console.log(parseInt(answers.Value1)*parseInt(answers.Value2))
      }
      if(answers.Operation == "divide"){
        inquirer
        .prompt([
          {
            name:"Div1",
            type:"list",
            message:"Order to Divide",
            choices:[
              answers.Value1 +"/"+ answers.Value2,
              answers.Value2 +"/"+ answers.Value1
            ]
          }
          
      ])
        .then((answers3) => {
          if(answers3.Div1 == answers.Value1 +"/"+ answers.Value2){
            console.log(parseInt(answers.Value1)/parseInt(answers.Value2))
          }
          else{
            console.log(parseInt(answers.Value2)/parseInt(answers.Value1))
          }
      })
      }
      
    });
