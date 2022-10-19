// Selecting button and creating a event listener for the button
const button = document.querySelector("#click");
button.addEventListener("click", getLocation);

/**
 * 
 * This function gets the local json file
 * 
 * @param {*} data 
 */
async function getJson(data) {
 const req = await fetch("../src/countryCode.json");
 const res = await req.json();

 res.forEach((e) => {
  const code = e.countryCode;
  const link = e.url;

  if (data == code) {
   relocateTarget(code, link);
  }
 });
}

/**
 * This function is getting the geo location and using that to populate other functions
 */
async function getLocation() {
 const url = "https://ipapi.co/country/";
 try {
  const request = await fetch(url, {
   mode: "cors",
   headers: {
    "Content-Type": "application/json",
   },
  });
  const response = await request.text();
  if (response) {
   getJson(response);
  }
 } catch (error) {
  console.log(error);
 }
}

/**
 * 
 * This is a simple switch, for the user to get the correct link
 * 
 * @param {*} code This is the country code that is returned from the json file
 * @param {*} link This is the link that is corresponding with the country code returned from the json file
 * @returns 
 */
function relocateTarget(code, link) {
 let location;
 let absoluteLink = link;

 switch (code) {
  case code:
   location = window.open(`${absoluteLink}`, "_blank").focus();
   break;

  default:
   location = window.open(`https://www.amazon.com`, "_blank").focus();
   break;
 }
 return location;
}
