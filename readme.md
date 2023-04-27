# AI Faker
Instead of having to figure out which function to use for your faking needs on some super long list of available functions, you can use AI faker.

It populates your empty objects with very realistic data related to whatever object you want to fake!

You don't need to read any docs. Your attributes are the description of the values the function will return.
## Usage
`aifaker.fake(<number of objects>,<object>)`

For example:
```
var emptyUser = {
    "fullName":"",
    "age":"",
    "gender":"",
    "address":"",
    "hobbies":[]
}

aifaker.fake(1, emptyUser);

Will return something like:

/*
{
    "fullName":"David Brown",
    "age":"38",
    "gender":"male",
    "address":"789 Maple Street",
    "hobbies": [
        "playing video games", 
        "watching movies", 
        "reading"
    ]
}
*/
```

If you choose more than 1 in "number of objects", it returns an array of objects as you specified. For example:

```
var emptyCompany = {
    "companyName":"",
    "address":"",
    "postCode":"",
    "city":"",
    "country":"",
    "phoneNumber":"",
    "numberOfEmployees":"",
    "industry":"",
    "companyDescription":"",
    "companyMotto":""
}

aifaker.fake(3, emptyCompany);

Will return something like:

/*
[
   {
      "companyName":"Redwood Enterprises",
      "address":"456 Oak Avenue",
      "postCode":"67890",
      "city":"Bigcity",
      "country":"United States",
      "phoneNumber":"+1 (555) 987-6543",
      "numberOfEmployees":"100",
      "industry":"Finance",
      "companyDescription":"We provide comprehensive financial solutions to help individuals and businesses achieve their financial goals.",
      "companyMotto":"Your financial success is our priority."
   },
   {
      "companyName":"Blue Mountain Enterprises",
      "address":"123 Main Street",
      "postCode":"45678",
      "city":"Anytown",
      "country":"United States",
      "phoneNumber":"+1 (555) 555-5555",
      "numberOfEmployees":"50",
      "industry":"Technology",
      "companyDescription":"We are a cutting-edge software company that provides innovative solutions to businesses of all sizes.",
      "companyMotto":"Innovate. Collaborate. Succeed."
   },
   {
      "companyName":"Green Fields Industries",
      "address":"789 Elm Street",
      "postCode":"12345",
      "city":"Smalltown",
      "country":"United States",
      "phoneNumber":"+1 (555) 123-4567",
      "numberOfEmployees":"25",
      "industry":"Manufacturing",
      "companyDescription":"We specialize in creating sustainable and eco-friendly products that benefit both our customers and the environment.",
      "companyMotto":"Sustainability for a better future."
   }
]
*/
```

The more descriptive your attributes, the better the returned values will be.

# Doesn't do:

Images, yet!
