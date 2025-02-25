
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const description = document.getElementById('description').value;

    let valid = true;

    if (!name) {
      document.getElementById('name_error').style.display = 'inline';
      valid = false;
    } else {
      document.getElementById('name_error').style.display = 'none';
    }

    if (!email) {
      document.getElementById('email_error').style.display = 'inline';
      valid = false;
    } else {
      document.getElementById('email_error').style.display = 'none';
    }

    if (!mobile) {
      document.getElementById('mobile_error').style.display = 'inline';
      valid = false;
    } else {
      document.getElementById('mobile_error').style.display = 'none';
    }

    if (!description) {
      document.getElementById('description_error').style.display = 'inline';
      valid = false;
    } else {
      document.getElementById('description_error').style.display = 'none';
    }

    if (valid) {
      // Code to submit the form
      alert('فرم معرفی با موفقیت ثبت شد');
    } else {
      alert('لطفا همه بخش‌های مورد نیاز را پر کنید');
    }
  }

  /*  آپلود فایل  */


  document.getElementById('uploadButton').onclick = function() {
    document.getElementById('fileInput').click();
    }

    
    document.getElementById('fileInput').onchange = function(event) {
      const fileName = event.target.files[0].name;
      const fileContainer = document.getElementById('fileContainer');
      fileContainer.textContent = `نام: ${fileName}`;
      fileContainer.style.display = 'block';
      fileContainer.style.width = `${fileContainer.scrollWidth}px`;
  };