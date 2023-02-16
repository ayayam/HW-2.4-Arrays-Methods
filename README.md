In this exercise you will create a web page that adds and removes values from a JavaScript array.  When you're done it will look like this:

When the user enters a value and clicks Unshift or Push, the value will show up at either the beginning or the end of the array, respectively.  If the user clicks Shift or Pop, the first or last array value will be deleted, respectively.  Clear empties the array.

Here's how to build it.  Instructions for centering the text/buttons and adding Roboto font are at bottom.

1.	Create a paragraph that says "This is my array:" and another paragraph beneath it that is empty.  Give the second paragraph the ID of "display".

2.	 Two buttons, labeled Unshift and Shift are already added to the HTML.  

3.	Add a text input.  It should have the ID "newItem."

4.	Add three more buttons to your HTML, labeled Push, Pop and Clear

5.	Add the onclick() attribute to each button.  Each button should call its own function, for example: 
<button onclick="unshiftVal()">Unshift</button>
Remember that certain words, like clear, are reserved words and cannot be used as function names.

6.	In a separate JavaScript file, declare the sample array.  You can use the list of cities you wish to visit like in the sample. 

7.	Next declare a function named displayArray to display the array created in step #6.  This function uses the DOMproperty document.getElementById("display").innerHTML, and assigns it to the array variable from Step #6.

8.	Don't forget to call your function!  You can do this on the second line of your JavaScript code, right after you declare the array (it's OK if the function is further down).

9.	Test your file in a browser.  The array should display inside the second paragraph.

10.	Now, create the functions called by the Pop and Shift buttons:
o	Inside your Pop function, all you have to do is write the name of your variable and follow it with .pop(); (no spaces).  This will remove the last item from the array.
o	Inside that same function, call the display function you created in Step #7
o	Make one function for Pop and another for Shift

11.	Test each button in your browser

12.	Now, create the functions called by the Unshift and Push buttons.  Here are some considerations:
o	You will have to capture the user input from the text box.  How can you do that?  Put it into a variable!  Declare a local variable (inside each function) and assign it to document.getElementById("newItem").value; (this assumes the text input has the ID "newItem").
o	You will also need to pass the local variable as an argument to .unshift() and .push().  How do we pass an argument to a function?
o	Remember to call your "display" function inside the Unshift and Push functions, so the user can see the results.

13.	Finally, create the Clear function.  You can do this by assigning your array variable to be an empty array.  Assuming your array is called someArray, just write someArray = [];.  On the next line, call the "display" function as above.

14.	BONUS: Put all text into the Roboto font from Google.

15.	BONUS: Use Flexbox and text-align:center to center the page content, and to draw a border around the two paragraphs with color #ccc.
