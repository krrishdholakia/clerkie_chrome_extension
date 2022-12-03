let searchInput = document.getElementsByName("q")[0]
console.log(searchInput);
var results = {};
var url = "https://clerkieserverchromeextensionv1.krrishdholakia.repl.co/decide?";
var errorUrl = "https://clerkieserverchromeextensionv1.krrishdholakia.repl.co/errorDeterminer?";
var errorResults = {}
async function checkError(text) {
  return fetch(errorUrl +
    new URLSearchParams({ user_query: text }).toString(), {
    method: "GET"
  }).then(res => res.json())
    .then(json => errorResults = json);
}


async function sendRequest(text) {
  return fetch(url +
    new URLSearchParams({ user_query: text }).toString(), {
    method: "GET"
  }).then(res => res.json())
    .then(json => results = json);
}

function createShareModal() {
  // Create container modal
  const container = document.createElement("div");
  container.className = "fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden hidden flex flex-col items-center justify-center bg-gray-800";
  container.id = "shareModalContainer";

  // Create modal item
  const modal = document.createElement("div");
  modal.className = "bg-gray-100 w-full mx-4 p-4 rounded-xl md:w-1/2 lg:w-1/3";

  // Create modal header
  const header = document.createElement("div");
  header.className = "flex justify-between items center border-b border-gray-200 py-3";

  // Create header text
  const headerText = document.createElement("div");
  headerText.className = "flex items-center justify-center";
  const headerTextContent = document.createElement("p");
  headerTextContent.className = "text-xl font-bold text-gray-800";
  headerTextContent.innerText = "Share Modal";
  headerText.appendChild(headerTextContent);

  // Create header close button
  const headerCloseButton = document.createElement("div");
  headerCloseButton.className = "bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full";
  headerCloseButton.id = "closeShareModal";
  headerCloseButton.innerText = "x";

  // Append header text and close button to header
  header.appendChild(headerText);
  header.appendChild(headerCloseButton);
  modal.appendChild(header);

  // Create modal body
  const body = document.createElement("div");
  body.className = "my-4";

  // Create body text
  const bodyText = document.createElement("p");
  bodyText.className = "text-sm";
  bodyText.innerText = "Share this link via";
  body.appendChild(bodyText);

  // Create body icons
  const bodyIcons = document.createElement("div");
  bodyIcons.className = "flex justify-around my-4";

  // Create email icon
  const emailLink = document.createElement("a");
  emailLink.href = "mailto:?body=Hi%2CJust%20wanted%20to%20share%20this%20chrome%20extension%20I%E2%80%99ve%20been%20using%20to%20help%20me%20debug%20my%20code.%20It%E2%80%99s%20a%20bit%20like%20a%20personal%20stackoverflow%2Fdebugging%20buddy.%20Here%E2%80%99s%20a%20link%2C%20if%20you%E2%80%99re%20interested%20-%20https%3A%2F%2Fbit.ly%2Fclerkie-chrome-extension.%0A&subject=Personal%20AI%20Code%20"

  // Create inner div element
  const innerDiv = document.createElement('div');
  innerDiv.classList.add('border', 'hover:bg-[#bc2a8d]', 'w-12', 'h-12', 'fill-[#bc2a8d]', 'hover:fill-white', 'border-pink-200', 'rounded-full', 'flex', 'items-center', 'justify-center', 'shadow-xl', 'hover:shadow-pink-500/50', 'cursor-pointer');
  

  // Create svg element
  const svg = document.createElement('svg');
  svg.classList.add('h-6', 'w-6', 'text-teal-600');
  svg.setAttribute('width', '24');
  svg.setAttribute('height', '24');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  
  // Create path and rect elements for svg
  const path = document.createElement('path');
  path.setAttribute('stroke', 'none');
  path.setAttribute('d', 'M0 0h24v24H0z');
  
  const rect = document.createElement('rect');
  rect.setAttribute('x', '3');
  rect.setAttribute('y', '5');
  rect.setAttribute('width', '18');
  rect.setAttribute('height', '14');
  rect.setAttribute('rx', '2');
  
  // Create polyline element for svg
  const polyline = document.createElement('polyline');
  polyline.setAttribute('points', '3 7 12 13 21 7');
  
  // Append elements to each other
  svg.appendChild(path);
  svg.appendChild(rect);
  svg.appendChild(polyline);
  innerDiv.appendChild(svg);
  emailLink.appendChild(innerDiv);
  bodyIcons.appendChild(emailLink);

  // create facebook icon 
  let facebookIcon = document.createElement("a");
  facebookIcon.href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbit.ly%2Fclerkie-chrome-extension";
  
  let facebookDiv = document.createElement("div");
  facebookDiv.className = "border hover:bg-[#1877f2] w-12 h-12 fill-[#1877f2] hover:fill-white border-blue-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-blue-500/50 cursor-pointer";
  
  let facebookSvg = document.createElement("svg");
  facebookSvg.setAttribute("xmlns","http://www.w3.org/2000/svg");
  facebookSvg.setAttribute("width","24");
  facebookSvg.setAttribute("height","24");
  facebookSvg.setAttribute("viewBox","0 0 24 24");
  
  let facebookPath = document.createElement("path");
  facebookPath.setAttribute("d","M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z");

  facebookSvg.appendChild(facebookPath);
  facebookDiv.appendChild(facebookSvg);
  facebookIcon.appendChild(facebookDiv);
  bodyIcons.appendChild(facebookIcon);

  //create twitter icon
  let twitterLink = document.createElement('a');
  twitterLink.href = 'http://twitter.com/share?text=❓Spending hours on Google trying to find the solution to your complex coding error? Check out this AI code debugger extension 😁 🤖&url=https://bit.ly/clerkie-chrome-extension&hashtags=clerkie_ai';
  twitterLink.dataset.showCount = 'false';

  let twitterDiv = document.createElement('div');
  twitterDiv.classList.add('border', 'hover:bg-[#1d9bf0]', 'w-12', 'h-12', 'fill-[#1d9bf0]', 'hover:fill-white', 'border-blue-200', 'rounded-full', 'flex', 'items-center', 'justify-center', 'shadow-xl', 'hover:shadow-sky-500/50', 'cursor-pointer');

  let twitterSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  twitterSvg.setAttributeNS(null, 'width', '24');
  twitterSvg.setAttributeNS(null, 'height', '24');
  twitterSvg.setAttributeNS(null, 'viewBox', '0 0 24 24');

  let twitterPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  twitterPath.setAttributeNS(null, 'd', 'M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z');

  twitterSvg.appendChild(twitterPath);
  twitterDiv.appendChild(twitterSvg);
  twitterLink.appendChild(twitterDiv);
  bodyIcons.appendChild(twitterLink);

  //create whatsapp icon
  let whatsAppLink = document.createElement('a');
  whatsAppLink.setAttribute('href', 'https://web.whatsapp.com/send?Spending hours on Google trying to find the solution to your complex coding error? Check out this AI code debugger extension 😁 https://bit.ly/clerkie-chrome-extension');
  whatsAppLink.setAttribute('data-action', 'share/whatsapp/share');
  
  let div = document.createElement('div');
  div.setAttribute('class', 'border hover:bg-[#25D366] w-12 h-12 fill-[#25D366] hover:fill-white border-green-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-green-500/50 cursor-pointer');
  
  let svg2 = document.createElement('svg');
  svg2.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg2.setAttribute('width', '24');
  svg2.setAttribute('height', '24');
  svg2.setAttribute('viewBox', '0 0 24 24');
  
  let path2 = document.createElement('path');
  path2.setAttribute('fill-rule', 'evenodd');
  path2.setAttribute('clip-rule', 'evenodd');
  path2.setAttribute('d', 'M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263');
  
  svg.appendChild(path2);
  div.appendChild(svg2);
  whatsAppLink.appendChild(div);
  bodyIcons.appendChild(whatsAppLink);

  body.appendChild(bodyIcons);
  modal.appendChild(body);
  container.appendChild(modal);
  document.body.appendChild(container);
}

function onShareClick() {
console.log("register share click");
  // Get the modal
var modal = document.getElementById("shareModalContainer");

// Get the button that opens the modal
var btn = document.getElementById("shareModal");

// Get the <span> element that closes the modal
var span = document.getElementById("closeShareModal");

// When the user clicks on the button, open the modal
modal.classList.remove('hidden');
modal.classList.add('flex');

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
} 
}


async function main() {
  console.log(results);
  await checkError(searchInput.value)
  if (errorResults.response == "Yes") {
    // import CSS 
    var css = chrome.runtime.getURL("styles.css");
    console.log("css: ", css)
    var cssElement = document.createElement("style")
    cssElement.setAttribute("rel", "stylesheet")
    cssElement.setAttribute("type", "text/css")
    cssElement.setAttribute("href", css)
    console.log("cssElement: ", cssElement)
    document.getElementsByTagName('head')[0].appendChild(cssElement)
    createShareModal();

    var element = document.createElement("div");
    element.classList.add("w-full", "h-40", "pb-3");

    var innerDiv = document.createElement("div");
    innerDiv.classList.add("h-6", "pb-1", "text-base", "text-black", "dark:text-white");
    innerDiv.innerHTML = "Clerkie Result:";

    element.appendChild(innerDiv);

    var secondInnerDiv = document.createElement("div");
    secondInnerDiv.classList.add("w-full", "h-28");

    var thirdInnerDiv = document.createElement("div");
    thirdInnerDiv.classList.add("flex", "items-center", "justify-center", "w-full", "h-28");

    var fourthInnerDiv = document.createElement("div");
    if (Object.keys(results).length === 0) {
      fourthInnerDiv.innerHTML = "Thinking ..."
    }

    thirdInnerDiv.appendChild(fourthInnerDiv);
    secondInnerDiv.appendChild(thirdInnerDiv);
    element.appendChild(secondInnerDiv);

    var fifthInnerDiv = document.createElement("div");
    fifthInnerDiv.classList.add("flex", "items-center", "w-full", "h-4", "py-2", "space-x-4");

    var eightInnerDiv = document.createElement("div");
    eightInnerDiv.classList.add("text-sm", "text-gray-700", "dark:text-gray-400", "hover:underline", "hover:cursor-pointer");
    eightInnerDiv.innerHTML = "<button id='shareModal'> Tell a friend 👋</a>";
    eightInnerDiv.addEventListener("click", onShareClick);

    var sixthInnerDiv = document.createElement("div");
    sixthInnerDiv.classList.add("bg-gray-300", "h-0.5", "rounded", "flex-grow");

    var seventhInnerDiv = document.createElement("div");
    seventhInnerDiv.classList.add("text-sm", "text-gray-700", "dark:text-gray-400", "hover:underline", "hover:cursor-pointer");
    seventhInnerDiv.innerHTML = "<a href=https://sinfulvibrantexponents.krrishdholakia.repl.co/> Click here to continue the conversation ➜</a>";

    fifthInnerDiv.appendChild(eightInnerDiv);
    fifthInnerDiv.appendChild(sixthInnerDiv);
    fifthInnerDiv.appendChild(seventhInnerDiv);
    element.appendChild(fifthInnerDiv);
    const topNavParent = document.getElementById("search");
    topNavParent.insertAdjacentElement("beforebegin", element);

    await sendRequest(searchInput.value);
    if (results.response == "None") {
      fourthInnerDiv.innerHTML = "No results found.";
    } else {
      fourthInnerDiv.innerHTML = results.response;
    }
  }
}

// searchInput.addEventListener("keyup", main);

currentLink = window.location.href;

if (currentLink.includes("?")) {
  main()
}