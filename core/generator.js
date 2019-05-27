/**
Name : Wordpress block plugin boilerplate generator
Author:  Vurghus Minar <vurghus.minar@outlook.com>
License : MIT
Version : 1.0
* */

// Module Dependencies
const fs = require('fs-extra');

module.exports = {
  generate(resource) {
    // Create directory
    fs.mkdirs(`./${resource}`, function(err) {
      if (err) {
        process.stdout.write(`Error creating ${resource} directory \n`);
        console.error(err);
      } else {
        const dirName = __dirname;

        const dirStr = `${dirName.substr(dirName.lastIndexOf('/') + 1)}$`;
        const fixedUrl = dirName.replace(new RegExp(dirStr), '');

        const srcDir = `${fixedUrl}/templates/`;

        fs.copy(srcDir, `./${resource}`, function(err) {
          if (err) {
            process.stdout.write(`Error copying template files from ${srcDir} to ${resource}  \n`);
            console.error(err);
          } else {
            fs.readFile('./wp-block-plugin.config.json', (err, rawConfig) => {
              if (err) {
                process.stdout.write('Error reading wp-block-plugin.config.json \n');
                process.stdout.write(
                  'Please ensure wp-block-plugin.config.json is located in the directory you are running this command from. \n'
                );
                console.error(err);
              } else {
                const config = JSON.parse(rawConfig);

                fs.readFile(`./${resource}/index.php`, function(err, file) {
                  if (err) {
                    process.stdout.write(`Error reading ${resource}/index.php \n`);
                    console.error(err);
                  } else {
                    let result = file.toString();
                    Object.keys(config).forEach(level1 => {
                      Object.keys(config[level1]).forEach(level2 => {
                        console.log(`${level1}.${level2}`, ':', config[level1][level2]);
                        const regExp = new RegExp(`%%${level1}.${level2}%%`, 'g');
                        result = result.replace(regExp, config[level1][level2]);
                      });
                    });

                    fs.writeFile(`./${resource}/index.php`, result, function(err) {
                      if (err) {
                        console.error(err);
                      } else {
                        fs.readFile(`./${resource}/package.json`, function(err, file) {
                          if (err) {
                            process.stdout.write(`Error reading ${resource}/package.json \n`);
                            console.error(err);
                          } else {
                            let result = file.toString();
                            Object.keys(config).forEach(level1 => {
                              Object.keys(config[level1]).forEach(level2 => {
                                console.log(`${level1}.${level2}`, ':', config[level1][level2]);
                                const regExp = new RegExp(`%%${level1}.${level2}%%`, 'g');
                                result = result.replace(regExp, config[level1][level2]);
                              });
                            });

                            fs.writeFile(`./${resource}/package.json`, result, function(err) {
                              if (err) {
                                console.error(err);
                              } else {
                                process.stdout.write(`${resource} created successfully!`);
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  },
};
