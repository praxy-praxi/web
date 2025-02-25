function filterCourses() {
    const category = document.getElementById('category').value;
    const teacher = document.getElementById('teacher').value;
    const time = document.getElementById('time').value;
    const method = document.getElementById('method').value;

    const rows = document.querySelectorAll('#coursesTable tbody tr');

    rows.forEach(row => {
        const rowCategory = row.getAttribute('data-category');
        const rowTeacher = row.getAttribute('data-teacher');
        const rowTime = row.getAttribute('data-time');
        const rowMethod = row.getAttribute('data-method');

        const isCategoryMatch = category === 'all' || rowCategory === category;
        const isTeacherMatch = teacher === 'all' || rowTeacher === teacher;
        const isTimeMatch = time === 'all' || rowTime === time;
        const isMethodMatch = method === 'all' || rowMethod === method;

        if (isCategoryMatch && isTeacherMatch && isTimeMatch && isMethodMatch) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}


  /*   آشنایی با امکانات وبسایت   */

  /*  قرمز کرذن متن سرچ شده  */

  function highlightText() {
    var input = document.getElementById("searchBox").value;
    var textElement = document.getElementById("text");
    var text = textElement.innerHTML;

    var regex = new RegExp(`(${input})`, "gi");
    var newText = text.replace(regex, `<span class="highlight">$1</span>`);
    textElement.innerHTML = newText;
  }