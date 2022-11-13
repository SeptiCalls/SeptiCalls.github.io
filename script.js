
//make sure all the pdf have a class name of pdfLink

let pdf = document.getElementsByClassName('pdfLink');

let link = "/resume.pdf"; //for chaning all links of pdf on website

for(let i=0; i<pdf.length; i++){
    pdf[i].removeAttribute('herf');
    pdf[i].setAttribute('href', link);
}