// function to generate markdown for README
function generateMarkdown(data) {
  return `${data.licenseBadge}
  
  # ${data.title}
  
  ## Table of Contents

  * **[Title](#Title:)**  
  * **[Description](#Description)**  
  * **[Installation Requirements](#Installation-Requirements)**  
  * **[Usage](#Usage)**  
  * **[License](#License)**    
  * **[Contributors](#Contributors)**  
  * **[Tests](#Tests)**  
  * **[Questions](#Questions)** 
  
    # Description
  
  ${data.description}
  
  # Installation Requirements
  
  ${data.install}
  
  # Usage
  
  ${data.usage}
  
  # License 
  
  ${data.license}
  
  # Contributors
  
  ${data.contribute}
  
  # Tests
  
  ${data.tests}
  
  # Questions
  
    
  ## [Github Profile](https://github.com/${data.github} "Title")

  ### Please email me at ${data.email} if you have additional questions. `
}

module.exports = generateMarkdown;
