const input = document.querySelector("input");
const NotifyBtn = document.querySelector("button");
const error = document.querySelector(".error");
const pError = document.createElement("p");

const reg =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const btnFn = () => {
	pError.innerHTML = "Please provide a valid email address";
	pError.classList.add("error");

	if (reg.test(input.value)) {
		input.style.borderColor = ``;
		input.value = "";
		input.after(pError);
		pError.innerText = "";
		pError.innerHTML = "We will let You know!";
		pError.style.color = `royalblue`;
		pRemove();
	} else {
		input.after(pError);
		input.style.borderColor = `hsl(354deg, 100%, 66%)`;
		pError.style.color = `hsl(354deg, 100%, 66%)`;
	}
};

const pRemove = () => {
	setTimeout(() => {
		pError.remove();
	}, "2500");
};

NotifyBtn.addEventListener("click", btnFn);
