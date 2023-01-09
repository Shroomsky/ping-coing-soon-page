const input = document.querySelector("input");
const form = document.querySelector("form");
const error = document.querySelector(".error");
const pError = document.createElement("p");

const reg =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const submitFn = (e) => {
	e.preventDefault();
	pError.innerHTML = "Please provide a valid email address";
	pError.classList.add("error");

	if (reg.test(input.value)) {
		input.style.borderColor = ``;
		input.value = "";
		input.after(pError);
		pError.innerText = "";
		pError.innerHTML = "We will let You know!";
		pError.style.color = `royalblue`;
		setTimeout((function(){pError.remove()}), 2000);
	} else {
		input.after(pError);
		input.style.borderColor = `hsl(354deg, 100%, 66%)`;
		pError.style.color = `hsl(354deg, 100%, 66%)`;
	}
};

document.addEventListener("submit", submitFn);