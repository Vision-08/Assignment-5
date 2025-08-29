1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer : 
getElementById is like calling out a student by their unique student ID number.
getElementsByClassName is like asking all students who play in the band to raise their hands.
querySelector is like asking the first student in the first row to stand up.
querySelectorAll is like asking all students with a red backpack to stand up.

2. How do you create and insert a new element into the DOM?
answer : 
we first have to create the element and then we add it to an existing parent element on the page. As like, you're making a new chair (document.createElement) and then you're putting it in the living room (appendChild). You start by using document.createElement() to specify the type of HTML tag you want, such as a paragraph or a div. Once you have created this element, it exists in memory but isn't visible on the page. To make it part of the website, you need to find an existing element (the "parent") and use a method like appendChild() or prepend() to attach your new element to it. This process dynamically updates the webpage, allowing you to add new content without reloading the entire page.

3. What is Event Bubbling and how does it work?

answer:
Event Bubbling is a mechanism in JavaScript where an event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements. When you click on an element, the event first travels from the top of the page down to what you clicked on. This is called ‘event capturing’. Once the event reaches its target, it then "bubbles" back up the page, traveling from the element you clicked on to its parent, then its grandparent, and so on. This is ‘event bubbling’, and it's the default behavior for most events. Any event listeners you've set up will fire as the event passes through them during the bubbling phase.  So, if you click a button inside a container, the button's event listener fires first, and then the container's listener fires right after, as the event bubbles up.




4. What is Event Delegation in JavaScript? Why is it useful?
1.	Answer:
Event Delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received. Event delegation is useful because it improves performance and memory usage by attaching a single event listener to a parent element instead of many, handles dynamically added elements without extra code, and simplifies code maintenance by centralizing event handling logic. 


5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
preventDefault() 
The preventDefault() method is used to stop the browser from carrying out its usual behavior for a specific event. For example, if you click on a link, the browser would normally leave the current page and load the linked one. By calling preventDefault() inside a click event handler, that automatic action is blocked, and you remain on the same page instead.
This comes in handy in situations like form submissions, where you might prefer to handle the input data with JavaScript first such as validating or saving it before allowing the form to actually submit and refresh the page.

stopPropagation() 
The stopPropagation() method prevents an event from traveling up (bubbling) or down (capturing) through the DOM tree. You can imagine it working like a chain of
authorities. When something happens on an element say, a button the event doesn’t just affect the button itself. It also gets passed to its parent element, then the parent’s parent, and so on, continuing all the way up the document. This process is known as event bubbling.
By using stopPropagation(), you break this chain. For instance, if a button is placed inside a div and both have click listeners, a normal click would trigger both listeners. But if you include stopPropagation() in the button’s click event, only the button’s handler will run. The div won’t receive the event, and the bubbling stops right at the button.

