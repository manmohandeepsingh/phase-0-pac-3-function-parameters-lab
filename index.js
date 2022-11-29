function introduction(name){
    console.log("Aki" , name);
    return (`Hi, my name is ${name}.`);
}
function introductionWithLanguage(name, language){
    console.log("Aki", name);
    console.log("Ember.js", language);
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);

}
function introductionWithLanguageOptional(name, language){
    let language = "JavaScript";
    console.log("Gracie" , language);
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
    let language = "Python"
    
}


