console.log("Script running...")
// Task 1: Hello button flow
// Select the 'Click me for hello' button
 let button=document.querySelector("#helloButton")
console.log(button)

// Select the empty p tag under that button
let tag=document.querySelector("#helloText")
console.log(tag)

// Add an event listener to the hello button such that when it's click, the p tag text says "Hello"
button.addEventListener("click",function(event){
  tag.textContent="hello"
})


// Task 2: All caps button flow
// Select the 'Click me for all caps' button
let caps=document.querySelector("#capsButton")
console.log(caps)

// Select the p tag under that button (says there's no need to shout)
let shoutcaps=document.querySelector("#capsText")
console.log(shoutcaps)

// Add an event listener to the caps button such that when it's clicked, the p tag text is "THERE'S NO NEED TO SHOUT"
shoutcaps.addEventListener("click",function(event){
  shoutcaps.textContent="THERE'S NO NEE TO SHOUT"
})


// Task 3: Dog image flow
// Select the dog image
let image=document.querySelector(".dogImage")

// Add an event listener to the dog image such that when the mouse is over it, the image src becomes happy-dog.jpeg
image.addEventListener("mouseover",function(event){
  image.src="happy-dog.jpeg"
})


// Add an event listener to the dog image such that when the mouse is off it, the image src becomes sad-dog.jpeg
image.addEventListener("mouseover",function(event){
  image.src="sad-dog.jpeg"
})


// Task 4: Name input flow
// Select the submit button


// Select the input 


// Select the empty p tag under them


// Add an event listener to the submit button such that when it is clicked, the p tag text is "Nice to meet you " + input.value




