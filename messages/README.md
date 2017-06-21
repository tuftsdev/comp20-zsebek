README for Messages Lab

1. After the work I've done, I believe that I correctly implemented the messages, displaying them in the correct order with some styling. I used a for loop to append p elements to the <div>, which worked successfully in my local host. I followed the lab instructions, trying the files in browsers compared to the local host, and changing the URL. 

2. I did not directly collaborate with others on this assignment, but followed the Piazza posts and examples / other resources given online. 

3. This lab took me about two and a half hours to complete in total. 


Important Question to Answer:

is it possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or from your local machine (from file:///) from using XMLHttpRequest? Why or why not? Please read the following three articles, in order, to help you answer this question:

Answer: Yes, it is possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or from the local machine from using XMLHttpRequest. We know that this is possible because of the role of XMLHttpRequest (XHR) "whose methods transfer data between a web browser and a web server." <- Quote from wikipedia article. It is able to do this through the open method of the HTTPRequest, in which a request method like "GET" is used as the first parameter, and the URL of the HTTP request is used as the second parameter. The third parameter is the boolean of whether it is asynchronous or not. Although the same-origin policy does control the interactions between different origins through XMLHttpRequests, there is still a variety of things that you can do (writing, embedding, etc). According to the Information Security Stack Exchange, XMLHttpRequests calls to other domains are possible through methods like JSONP.

Cross-origin network access
The same-origin policy controls interactions between two different origins, such as when you use XMLHttpRequest or an img> element. These interactions are typically placed in three categories:

Cross-origin writes are typically allowed. Examples are links, redirects and form submissions. Certain rarely used HTTP requests require preflight.
Cross-origin embedding is typically allowed. Examples are listed below.
Cross-origin reads are typically not allowed, but read access is often leaked by embedding. For example you can read the width and height of an embedded image, the actions of an embedded script, or the availability of an embedded resource.


"XMLHttpRequest (XHR) is an API in the form of an object whose methods transfer data between a web browser and a web server. "

"The first parameter of the method is a text string indicating the HTTP request method to use. The request methods that must be supported by a conforming user agent, defined by the W3C draft for the XMLHttpRequest object, are currently listed as the following.[20]
GET (Supported by Internet Explorer 7 (and later), Mozilla 1+)"

"The second parameter of the method is another text string, this one indicating the URL of the HTTP request. The W3C recommends that browsers should raise an error and not allow the request of a URL with either a different port or ihost URI component from the current document.["
