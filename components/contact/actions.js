'use server'

const web3 = process.env.WEB3FORM_KEY
const recaptcha = process.env.RECAPTCA_KEY

console.log("web3form", web3)
console.log("recaptcha", recaptcha)


export async function myAction(data) {
  const formData = new FormData();
  formData.append("access_key", web3);
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("message", data.message);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  }).then((res) => res.json());

  console.log(formData);
  return res;
}