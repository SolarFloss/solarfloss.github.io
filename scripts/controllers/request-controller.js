angular.module('main-app').controller('request-controller',function($scope){
  $scope.requests = [
    {
      "title": "Editing porn podcast, doing homework, and have $2.65 until Friday. Could go for some 'za",
      "description": "Here I sit in my bedroom, editing a podcast where my roommate and I review weird erotica we find on Amazon, and I look up to see it's time to read half of The Handmaid's Tale for glass tomorrow and I haven't eaten since noon. I'd make my own, but I lack sauce.This broke-ass college student would appreciate some pizza to take the edge off a stressful pay period, pizza fixes everything. For the trouble I could offer a listen to the next episode of our podcast several daysearly, or I could make you a ringtone with my editing suite. Or perhaps you could pick the next short story we review? Up to you, kind soul.Thanks for your time :D",
      "price": "14.18",
      "tags": ["College","Poor","Starving"]
    },
    {
      "title": "I'm a first-year teacher who doesn't get paid for a month",
      "description": "I'm a first-year teacher, we get paid once a month, but my first check doesn't come until the end of September. I had a really rough day dealing with behavior students so I'm too worn out to cook, and don't have the money to treat myself yet. The only pizza chain near me is Pizza Hut, if that makes a difference",
      "price": "12.51",
      "tags": ["Hungry","No $$$"]
    },
    {
      "title": "Hoping to feed my kiddos",
      "description": "Out of money 2 days early. Was hoping to get some pizza to feed my 3 daughters. Will gladly pay it forward when I am able.",
      "price": "16.41",
      "tags": ["Kids","No $$$"]

    }
  ];
})

.directive('truncate',function(){
  return {
    link: function($scope,element,attribute){
      var description = $scope.requests[$scope.$index]['description'];
      if(description.length > 400){
        var expand = document.createElement("a");
        var clicked = false;
        expand.appendChild(document.createTextNode("...more"));

        element[0].innerHTML = (description.substring(0,400));
        element[0].appendChild(expand);

        expand.addEventListener('click',function(){
          if(!clicked){
            clicked = !clicked;
            expand.innerHTML = " less";
            element[0].innerHTML = description;
            element[0].appendChild(expand);
          }else{
            clicked = !clicked;
            element[0].innerHTML = (description.substring(0,400));
            expand.innerHTML = " ...more";
            element[0].appendChild(expand);
          }
        });
      }
    }
  }
});
