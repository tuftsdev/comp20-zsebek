README for Messages Lab

1. After the work I've done, I believe that I correctly implemented the messages, displaying them in the correct order with some styling. I used a for loop to append p elements to the <div>, which worked successfully in my local host. I followed the lab instructions, trying the files in browsers compared to the local host, and changing the URL. 

2. I did not directly collaborate with others on this assignment, but followed the Piazza posts and examples / other resources given online. 

3. This lab took me about two and a half hours to complete in total. 


Important Question to Answer:

is it possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or from your local machine (from file:///) from using XMLHttpRequest? Why or why not? Please read the following three articles, in order, to help you answer this question:

Answer: Yes, it is possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or from the local machine from using XMLHttpRequest. We know that this is possible because of the role of XMLHttpRequest (XHR) "whose methods transfer data between a web browser and a web server." <- Quote from wikipedia article. It is able to do this through the open method of the HTTPRequest, in which a request method like "GET" is used as the first parameter, and the URL of the HTTP request is used as the second parameter. The third parameter is the boolean of whether it is asynchronous or not. Although the same-origin policy does control the interactions between different origins through XMLHttpRequests, there is still a variety of things that you can do (writing, embedding, etc). According to the Information Security Stack Exchange, XMLHttpRequests calls to other domains are possible through methods like JSONP.







