// Selecting button and creating a event listener for the button
const button = document.getElementById("amazon-btn");
button.addEventListener("click", getLocation);

const storeLinks = [
 {
  countryCode: "FR",
  url: "https://www.amazon.fr/Directors-Electronic-Slider-panoramique-système/dp/B07GTF4VVD/ref=sr_1_2?keywords=Grip+Gear&qid=1666250947&qu=eyJxc2MiOiIxLjE1IiwicXNhIjoiMS4zMCIsInFzcCI6IjAuMDAifQ%3D%3D&sr=8-2",
 },
 {
  countryCode: "DE",
  url: "https://www.amazon.de/-/en/stores/GripGear/page/C0218B00-33C0-45A7-ABC1-E8158D642F2F?ref_=ast_bln",
 },
 {
  countryCode: "ES",
  url: "https://www.amazon.es/Set-directores-Cine-Deslizador-electrónico/dp/B07GTF4VVD/ref=sr_1_1_sspa?keywords=Grip+Gear&qid=1666251014&qu=eyJxc2MiOiIxLjIxIiwicXNhIjoiMC41OSIsInFzcCI6IjAuMDAifQ%3D%3D&sr=8-1-spons&psc=1",
 },
 {
  countryCode: "NL",
  url: "https://www.amazon.nl/Grip-Gear-Directors-Set-Control/dp/B07GTF4VVD/ref=sr_1_1?qid=1666251081&refinements=p_4%3AGripGearLtd&s=electronics&sr=1-1",
 },
 {
  countryCode: "IT",
  url: "https://www.amazon.it/direttori-elettronico-panoramica-sistema-piccoli/dp/B07GTF4VVD/ref=sr_1_3?keywords=grip+gear+movie+maker+directors+set&qid=1666251110&qu=eyJxc2MiOiIwLjU1IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=grip+gear+dire%2Caps%2C268&sr=8-3",
 },
 {
  countryCode: "SE",
  url: "https://www.amazon.se/Filmtillverkare-Directors-setet-elektroniskt-panoramafäste-videokreativitet/dp/B07GTF4VVD/ref=sr_1_1?crid=ZICXDSSRZM1W&keywords=grip+gear+directors+movie+maker&qid=1666251196&qu=eyJxc2MiOiIwLjY2IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=grip+gear+directors+movie+maker%2Caps%2C274&sr=8-1",
 },
 {
  countryCode: "PL",
  url: "https://www.amazon.pl/Directors-Electronic-Slider-panoramique-système/dp/B07GTF4VVD/ref=sr_1_2?keywords=Grip+Gear&qid=1666250957&qu=eyJxc2MiOiIxLjE1IiwicXNhIjoiMS4zMCIsInFzcCI6IjAuMDAifQ%3D%3D&sr=8-2",
 },
 {
  countryCode: "UK",
  url: "https://www.amazon.co.uk/stores/GripGear/page/10C21249-059B-4AA7-AC32-44EA1F88766C?ref_=ast_bln",
 },
 {
  countryCode: "MX",
  url: "https://www.amazon.com.mx/GripGear-Directors-Set-Electronic-Panoramic/dp/B07GTF4VVD/ref=sr_1_1?keywords=grip+gear+directors+set&qid=1666251687&sr=8-1&ufe=app_do%3Aamzn1.fos.66c34496-0d28-4d73-a0a1-97a8d87ec0b2",
 },
 {
  countryCode: "JP",
  url: "https://www.amazon.co.jp/-/en/Electric-Slider-GripGear-Directors-Set/dp/B084FRCTTT/ref=sr_1_7?crid=362HKPYFEKFUO&keywords=グリップギア%2Bディレクターセット&qid=1666251597&qu=eyJxc2MiOiIxLjc3IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=gripgear%2Bdirectors%2Bset%2B%2Caps%2C482&sr=8-7&th=1",
 },
 {
  countryCode: "US",
  url: "https://www.amazon.com/stores/GripGear/page/43CA3145-470B-4A16-A4D5-7F8315B93599?ref_=ast_bln",
 },
 {
  countryCode: "CA",
  url: "https://www.amazon.com.mx/GripGear-Directors-Set-Electronic-Panoramic/dp/B07GTF4VVD/ref=sr_1_1?keywords=grip+gear+directors+set&qid=1666251687&sr=8-1&ufe=app_do%3Aamzn1.fos.66c34496-0d28-4d73-a0a1-97a8d87ec0b2",
 },
 {
  countryCode: "NO",
  url: "https://www.amazon.co.uk/stores/GripGear/page/10C21249-059B-4AA7-AC32-44EA1F88766C?ref_=ast_bln",
 },
 {
  countryCode: "",
  url: "",
 },
];

async function getJson(countryCode) {
 const country = storeLinks.find((c) => c.countryCode === countryCode);

 const url = country?.url ?? "https://www.amazon.com";

 relocateTarget(url);
}

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
  getJson(response);
 } catch (error) {
  console.log(error);
 }
}

function relocateTarget(link) {
 window.open(link, "_blank").focus();
}
