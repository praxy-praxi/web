function formatText(command) {
    document.execCommand(command, false, null);
}

function submitComment() {
    const commentBox = document.getElementById("commentBox");
    const comment = commentBox.innerHTML;
    const commentDisplay = document.createElement("div");
    commentDisplay.className = "user-comment";
    
    const date = new Date();
    const formattedDate = date.toLocaleString('fa-IR', { timeZone: 'Asia/Tehran' });

    commentDisplay.innerHTML = `
        <p>${comment}</p>
        <small>${formattedDate}</small>
        <div class="buttons">
            <button onclick="editComment(this)">ویرایش</button>
            <button onclick="deleteComment(this)">حذف</button>
        </div>
    `;

    document.getElementById("comments").appendChild(commentDisplay);
    commentBox.innerHTML = "";
    showPlaceholder();
}

function deleteComment(button) {
    const comment = button.closest('.user-comment');
    comment.remove();
}

function editComment(button) {
    const comment = button.closest('.user-comment');
    const commentBox = document.getElementById("commentBox");
    commentBox.innerHTML = comment.querySelector('p').innerHTML;
    comment.remove();
    hidePlaceholder();
}

function showPlaceholder() {
    const commentBox = document.getElementById("commentBox");
    if (!commentBox.innerHTML.trim()) {
        commentBox.innerHTML = "نظر خود را وارد کنید...";
        commentBox.classList.add("placeholder");
    }
}

function hidePlaceholder() {
    const commentBox = document.getElementById("commentBox");
    if (commentBox.innerHTML === "نظر خود را وارد کنید...") {
        commentBox.innerHTML = "";
        commentBox.classList.remove("placeholder");
    }
}

document.addEventListener("DOMContentLoaded", showPlaceholder);

// بخش کامنت قابل بولد، کج و زیر خط انداختن کامنت. ویرایش و حذف کامنت ثبت شده دارای محدوده ثبت

//با کلیک روی سر فصل توضیحاتش بیاد
function toggleDisplay(element) {
    const nextElement = element.nextElementSibling;
    if (nextElement.style.display === "none") {
        nextElement.style.display = "block";
    } else {
        nextElement.style.display = "none";
    }
}
