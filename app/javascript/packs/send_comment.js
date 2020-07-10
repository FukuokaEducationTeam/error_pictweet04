function send_comment() {
  const comment_form_button = document.getElementById("comment_form_button");
  const comment_form = document.getElementById("comment_form");

  comment_form_button.addEventListener("click", (e) => {
    e.preventDefault();

    const formData = new FormData(comment_form);
    const XHR = new XMLHttpRequest();
    const url = location.pathname + "/comments"

    XHR.open("GET", url, true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {

      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }

      const comment = XHR.response.comment;
      const name = XHR.response.user_name;
      const comments_area = document.getElementsByClassName("comment")[0];

      const HTML = `
          <p>
          <strong><a href="/users/1">${name}</a>：</strong>
          ${comment.txt}
        </p>
        `;
      comments_area.insertAdjacentHTML("afterbegin", HTML);

    };

    XHR.onerror = function () {
      alert("Request failed");
    };

    comment_form.reset();
  });
}

window.addEventListener("load", send_comment);
