# Santiago Garzon Code Challenge
Hi, I really enjoyed developing this code test.
I usually work with Angular, so this was hard at first, but I learned a lot on the way.

I know I could've applied better approaches but I run out of time.

Looking forward to hearing your review.

## To run the project.
'npm install'


## Please answer the following questions once you finish codding:

**A) Describe the strategy used to consume the API endpoints and the data management.**

I created a class inside service folder to handle the http calls, using Axios library. A promise is return and it's handled when the hook 'componentDidMount' is called. This logic is used for both Screens (cocktailMainPage and cocktailDetail).
Error component should be create to catch and render error response states.

The data.drinks is saved inside the component state in order to retrieve a FlatList or the detailComponent. The state that feed the FlatList will change when the filter is activated, making the list dynamically.

A spinner was added to make the ux friendly until we receive the response. 

**B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?**

I used react-navigation because I found it easy to use and fast to install but still powerful.

If I'd to develop a consumer facing app I'd use react-native-navigation because it's a native implementation and I could avoid adding complex computations in js.

This will conclude in a better performance and user experience.

**C) Have you used any strategy to optimize the performance of the list generated for the first feature?**

I used a FlatList, which has a great performance. Also I customized some properties to optimize it, like:

-removeClipperSubviews, to unmount components that are off of the window.

-initialNumToRender: 5, this means that the device screen will be covered within the first 5 cards are rendered.

-windowSize: 15, maybe the list will be blank if we scroll to fast. but we are going to consume less memory.


**D) Would you like to add any further comments or observations?**

If I'd had more time, I'd have tried to use:


-es-lint for better developing experience.

-SearchBar inside the header.

-Entities to define the Cocktail and CocktailDetail objects.

-Constants files.

-Stateless and PureComponents

-Maybe a boilerplate to win some time.

-Styles files.

-Redux to handle states.

-Progressive commits to better work tracking.