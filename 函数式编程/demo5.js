/**
 * Created by Rayr Lee on 16/5/11.
 */

const formalGreeting = (name) => `Hello ${name}`;
const casualGreeting = (name) => `Sup ${name}`;
const male = (name) => `Mr. ${name}`;
const female = (name) => `Mrs. ${name}`;
const doctor = (name) => `Dr. ${name}`;
const phd = (name) => `${name} PhD`;
const md = (name) => `${name} M.D.`;


console.log(formalGreeting(male(phd("Chet")))); // => "Hello Mr. Chet PhD"