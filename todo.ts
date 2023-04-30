#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet"
import { input } from "./input.js";
console.log(chalk.yellow.bold(figlet.textSync("To Do List")));
console.log(chalk.greenBright.bold(`\t\t!!!! Good Morning !!!!\n`))
let arr:string[]=[];
    
for(let i=0;i>=0;i++)
{
    arr[i]=await input("Please enter the activity you want to perform today or type exit to stop","input");
    if(arr[i]=="exit")
        {
          break;
        }
        
}
    console.log(chalk.blueBright.bold(`\n\nyour selected activities for today:  ${chalk.yellow(arr)}\n`));

for (let i=0;i>=0;i++)
{
let dolist= await input("select activity you perform from the above activities to update list: ","rawlist",arr)

if(dolist=="exit" || arr.length==1)
{
    arr.pop();
    console.log(chalk.blue.bold(`remaining task for today: ${chalk.yellow(arr)}.`));
    break;
}
else
{
    for(let j=0;j>=0;j++)
    {
        if(arr[j]==dolist)
        {
            arr.splice(j,1);
            break;
        }
    }
}

}