function openSection(section) {
  document.querySelectorAll('.openable').forEach(function (elem) {
    elem.classList.add('is-hidden');
  });
  document.querySelectorAll('.opener').forEach(function (elem) {
    elem.classList.remove('has-background-warning');
  });

  document.querySelector('.opener.opener-' + section).classList.add('has-background-warning');

  activeElem = document.querySelector("#" + section);
  activeElem.classList.remove('is-hidden');
  activeElem.scrollIntoView({behavior: 'smooth'});
}
