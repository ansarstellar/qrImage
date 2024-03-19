/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from 'qr-image';
import inquirer from 'inquirer';
import fs from 'fs';
import { url } from 'inspector';

inquirer
  .prompt([
    {
    "message": "Type in your URL: ",
    "name": "URL"
  },
])
  .then((answers) => {
    const url = answers.URL;
    var qrSvg = qr.image(url);
    qrSvg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile('./text.txt', url, err => {
      if(err) {
        console.log("Something went wrong..");
      } else {
        console.log("URL is saved in the file successfully.");
      }
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });



