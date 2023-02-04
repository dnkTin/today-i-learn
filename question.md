2. How would you go about designing a URL shortening service like bit.ly or tinyurl.com?
There are a few things to consider when designing a URL shortening service. First, you need to decide on a domain name for your service. Once you have a domain name, you need to set up a web server and configure it to handle requests for shortened URLs.

Next, you need to design the database that will store information about the shortened URLs. This database will need to store the original URL, the shortened URL, and possibly other information such as the number of times the shortened URL has been accessed.

Finally, you need to write the code that will generate the shortened URLs and handle requests for them. This code will need to be able to look up the original URL in the database and redirect the user to that URL.

3. How would you design a logging system for an e-commerce site that might receive millions of hits per day and has to function 24×7 without fail?
There are a few key considerations when designing a logging system for an e-commerce site that needs to be highly available and handle a large volume of traffic.

First, the system needs to be designed for scalability. This means that it should be able to easily handle an increase in traffic without requiring a complete redesign.

Second, the system needs to be highly available. This means that it should be designed to continue functioning even if parts of it fail.

Third, the system needs to be able to handle a large volume of data. This means that it should be able to store and process a large amount of data efficiently.

Fourth, the system needs to be able to provide useful information. This means that the data that is logged should be able to be used to improve the site or diagnose problems.

Finally, the system needs to be easy to use. This means that it should be designed in a way that makes it easy for administrators to set up and use.

4. How would you design a search engine for the Internet?
There are a few key components to designing a search engine for the Internet. First, you need to have a way to index all of the web pages that are out there. This can be done using a web crawler, which will visit each site and index the content. Once you have an index of all the web pages, you need to have a way to rank them. This can be done using a variety of methods, such as looking at the number of inbound links to a page or the quality of the content. Finally, you need to have a way to search the index and return the results to the user. This can be done using a variety of methods, such as keyword matching or natural language processing.


17. How would you design a web crawler/spider bot?
15. How would you design a news feed like Twitter, Instagram, Facebook, Reddit, etc.?
10. How would you design a recommendation system like Netflix’s “Recommended For You” functionality?




5. How would you design a video streaming website like YouTube, Vimeo, etc.?
There are a few key components to designing a video streaming website. First, you need a video player that can handle streaming video content. This can be a custom-built player or a third-party player like JWPlayer or Flowplayer. Second, you need a content delivery network (CDN) to host and stream your video content. A CDN like Amazon CloudFront or Akamai can provide the necessary infrastructure to ensure that your videos are delivered quickly and reliably. Finally, you need a way to manage and organize your video content. This can be a custom solution or a third-party solution like Kaltura or Brightcove.


How to user .map() polyfill:
```javascript
let data = [1,2,3,4,5]
Array.prototype.myMap = function(cb) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    results.push(cb(this[i], i, this))
  }
  return results;
}

const mapData = data.myMap((el) => el * 2);
console.log(mapData);
```
```javascript
// Filter polyfill
Array.prototype.myFilter = function (cb) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      results.push(this[i])
    }
  }
  return results;
}
```


```javascript
  // Immplement Debounce method
  const onScroll = (e) => {
    // do something
    fetchUser
  }
  document.addEventListener('onScroll', debounce(fetchUser, 300))
  const fetchUser = () => {
    // fetchUser
  }
  const debounce = (cb, timeout) => {
    let timer
    return function() {
      let context = this
      clearTimeout(timer)
      timer = setTimeout(() => {
        cb.apply(context, arguments)
      }, timeout)
    }

  }


  // re implemtn

  const debounce = (callback, timeout) => {
    let timer
    return () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        callback(arguments)
      }, timeout)
    }
  }
```

greatest achivement:
develop event - work for thousand of people - work with across the team
cause we have across component
create task - discuss with team and product owner - priotities which epic will come, plan for release version


coding convention
standard for the team
legacy code - duplicate code

how do you learn new technologies? 
I learn how to develop application with new technologies from scratch
I research technologies based on the current issues in my team, and decide how to use them in the team
I also focus on system architecture and design pattern

What you need to improve?
technical decision, insights in product vision and roadmap, 

What do you collect the feedback about your performance? Manager gives me performance review
but I neeed 1-1 meetings



Have you designed an architecture for a software system? -> FPT
I designed the architecture for a small software system

SRS - have you written a software requirement specification (SRS) in the past?

candid and transparent


Performance:
Small Javascript size improves CPU costs, memory usage, and download time.

Don’t use large third-party libraries. For example, consider DateJs over MomentJs. Eslint allows us to add rules that prevent certain imports.
Use partial loading on a page.
Lazy load modules.
Increase landing time by only loading the content above the fold.
Analyze web performance with Google Web Vitals: 1. Largest Contentful Paint 2. First Input Delay 3. Cumulative Layout Shift
Frameworks-specific techniques: onPush in Angular.
Avoid long tasks (> 15ms) so the main thread isn’t blocked.
Avoid large bundles (> 50KB). Split it up so it takes advantage of Chrome’s parallelization.
Avoid large in-line scripts. Chrome can’t optimize it.
Separate vendor bundles from main bundles. It allows the browser to cache more codes.
If the landing page were a static page, there would be no need to load a large bundle with vendors. We can pre-fetch large bundles for other complex pages


Think of about 20 interview questions you'll get, along with the lines of the items below. Have at least one answer for each. Have a story, not just data, about something you accomplished.

Why do you want this job?

What's a tough problem you've solved?

Biggest challenges faced?

Best/worst designs seen?

Ideas for improving an existing product

How do you work best, as an individual and as part of a team?

Which of your skills or experiences would be assets in the role and why?

What did you most enjoy at [job x / project y]?

What was the biggest challenge you faced at [job x / project y]?

What was the hardest bug you faced at [job x / project y]?

What did you learn at [job x / project y]?

What would you have done better at [job x / project y]?

If you find it hard to come up with good answers of these types of interview questions, here are some ideas:

General Interview Questions and their Answers
Have questions for the interviewer
Some of mine (I already may know the answers, but want their opinion or team perspective):

How large is your team?
What does your dev cycle look like? Do you do waterfall/sprints/agile?
Are rushes to deadlines common? Or is there flexibility?
How are decisions made in your team?
How many meetings do you have per week?
Do you feel your work environment helps you concentrate?
What are you working on?
What do you like about it?
What is the work life like?
How is the work/life balance?


Explain the differences between a hash table and an array?

Explain the advantages of object oriented programming?

Talk about using js prototypes.

Could you tell me about a project you are very proud of? fpt


What are your career goals over the next five years? How does Netflix fit into your overall vision?

You observe that a colleague always arrives late to a weekly meeting. What would you do?

