import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet"
import chalkanimation from "chalk-animation"

let input=async(str1:string,str2:string,str3?:string[])=>
{   
        let activ=await inquirer.prompt([{
            name:"act",
            type:str2,
            message:`${chalk.red.bold.underline(str1)}`,
            choices:str3,
        }])
        return activ.act;
}
export {input};