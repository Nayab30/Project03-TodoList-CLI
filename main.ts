#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
let todo = [];

let condition = true;
while(condition)
{
let addtodo:{todo:string,addmore:boolean} = await inquirer.prompt([
    {
        name:"todo",
        type:"input",
        message:chalk.bgYellow.whiteBright`"What do you want to add in your todo?"`
    },
    {
        name:"addmore",
        type:"comfirm",
        message:chalk.bgGray.whiteBright`"Do you want to add more?"`,
        default:false
    }
])

todo.push(addtodo.todo);

condition = addtodo.addmore;
console.log(todo);
}
if (todo.length >0){
    console.log(chalk.cyan`Your ToDo List:`)
     todo.forEach(todo =>{
        console.log(todo);
     });
 } else {
    console.log(chalk.red`No Todo list found`)
 }






