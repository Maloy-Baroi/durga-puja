let hindu_calender = document.getElementById('hindu-calender');
let cal_id_selector = document.getElementById('id_hindu_calender_menu_selector');
let ma_durga = document.getElementById('id_ma_durga');
let ma_durga_selector = document.getElementById('ma-durga-selector');
let home = document.getElementById('id_header');
let home_data = document.createElement('h1');

function start(){
  let a = prompt('Write your name: ');
  if(a == null){
    a = '';
  }
  home_data.innerHTML = `শারদীয় শুভেচ্ছা ${a}`;
  home.append(home_data)
  ma_durga.style.display = 'none';
  hindu_calender.style.display = 'none';
}

document.getElementById('home_selector').addEventListener('click', function (){
  let a = prompt('Write your name: ');
  home_data.innerHTML = `শারদীয় শুভেচ্ছা ${a}`;
  home.append(home_data)
  ma_durga.style.display = 'none';
  hindu_calender.style.display = 'none';
});

cal_id_selector.addEventListener('click', function(){
    hindu_calender.style.display = 'block';
    home.style.display = 'none';
    ma_durga.style.display = 'none';
});

ma_durga_selector.addEventListener('click', function (){
    hindu_calender.style.display = 'none';
    ma_durga.style.display = 'block';
});

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
  