let pdf = document.getElementsByClassName('pdfLink');

let link = "/resume.pdf";

for (let i = 0; i < pdf.length; i++) {
    pdf[i].removeAttribute('href');
    pdf[i].setAttribute('href', link);
}
