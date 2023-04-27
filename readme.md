# AI Faker
Instead of having to figure out which function to use for your faking needs on some super long list of available functions, you can use AI faker.

It populates your empty objects with very realistic data related to whatever object you want to fake!

You don't need to read any docs. Your attributes are the description of the values the function will return.

Most faker libs:

```
const user = {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    },
    avatar: faker.internet.avatar(),
    jobTitle: faker.name.jobTitle(),
    company: {
      name: faker.company.companyName(),
      catchPhrase: faker.company.catchPhrase(),
      bs: faker.company.bs()
    },
    website: faker.internet.url(),
    birthDate: faker.date.past(50, new Date())
  };
```

AI Faker allows you to just send the empty object to the faker() function and get a populated one back!

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
```

Will return something like:

```
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
```

Will return something like:

```
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
```

The more descriptive your attributes, the better the returned values will be.

You can get **pretty** complex, it works :) eg:

```
const emptyObject = {
   "userProfile":{
      "id":"",
      "firstName":"",
      "lastName":"",
      "email":"",
      "phoneNumber":"",
      "address":{
         "street":"",
         "city":"",
         "state":"",
         "postalCode":"",
         "country":""
      },
      "socialMedia":{
         "facebook":{
            "url":"",
            "username":""
         },
         "twitter":{
            "url":"",
            "username":""
         },
         "instagram":{
            "url":"",
            "username":""
         },
         "linkedin":{
            "url":"",
            "username":""
         }
      },
      "employmentHistory":[
         {
            "jobTitle":"",
            "company":"",
            "location":{
               "city":"",
               "state":"",
               "country":""
            },
            "startDate":"",
            "endDate":"",
            "responsibilities":[
               
            ]
         }
      ],
      "education":[
         {
            "degree":"",
            "major":"",
            "institution":"",
            "graduationYear":""
         }
      ],
      "skills":[
         {
            "name":"",
            "level":"",
            "yearsOfExperience":""
         }
      ],
      "languages":[
         {
            "name":"",
            "proficiency":""
         }
      ],
      "projects":[
         {
            "title":"",
            "description":"",
            "startDate":"",
            "endDate":"",
            "technologiesUsed":[
               
            ]
         }
      ],
      "awards":[
         {
            "title":"",
            "description":"",
            "year":""
         }
      ]
   }
}
```

Returns:

```
{
   "userProfile":{
      "id":"987654321",
      "firstName":"Maria",
      "lastName":"Gonzalez",
      "email":"mariagonzalez@example.com",
      "phoneNumber":"+1 (555) 123-4567",
      "address":{
         "street":"456 Main St.",
         "city":"Smalltown",
         "state":"TX",
         "postalCode":"67890",
         "country":"United States"
      },
      "socialMedia":{
         "facebook":{
            "url":"https://www.facebook.com/mariagonzalez",
            "username":"mariagonzalez"
         },
         "twitter":{
            "url":"https://www.twitter.com/mariagonzalez",
            "username":"mariagonzalez"
         },
         "instagram":{
            "url":"https://www.instagram.com/mariagonzalez",
            "username":"mariagonzalez"
         },
         "linkedin":{
            "url":"https://www.linkedin.com/in/mariagonzalez",
            "username":"mariagonzalez"
         }
      },
      "employmentHistory":[
         {
            "jobTitle":"Marketing Manager",
            "company":"XYZ Corporation",
            "location":{
               "city":"Houston",
               "state":"TX",
               "country":"United States"
            },
            "startDate":"2015-06-01",
            "endDate":"2022-02-28",
            "responsibilities":[
               "Developed and implemented marketing strategies to increase sales.",
               "Managed a team of 5 marketing professionals.",
               "Analyzed market trends to identify opportunities for growth."
            ]
         }
      ],
      "education":[
         {
            "degree":"Master of Business Administration (MBA)",
            "major":"Marketing",
            "institution":"University of Texas",
            "graduationYear":"2015"
         }
      ],
      "skills":[
         {
            "name":"Marketing",
            "level":"Expert",
            "yearsOfExperience":"10"
         },
         {
            "name":"Project Management",
            "level":"Intermediate",
            "yearsOfExperience":"5"
         }
      ],
      "languages":[
         {
            "name":"Spanish",
            "proficiency":"Native"
         },
         {
            "name":"English",
            "proficiency":"Fluent"
         }
      ],
      "projects":[
         {
            "title":"Product Launch Campaign",
            "description":"Developed and executed a successful product launch campaign for a new line of software products.",
            "startDate":"2019-04-01",
            "endDate":"2019-07-01",
            "technologiesUsed":[
               "Google AdWords",
               "Facebook Ads",
               "Email Marketing"
            ]
         }
      ],
      "awards":[
         {
            "title":"Marketing Excellence Award",
            "description":"Received award for outstanding performance in marketing.",
            "year":"2021"
         }
      ]
   }
}
```

# Help it with hints

Most of the time a good attribute name will return good values. But some things are ambiguous, and other things you want a certain way. Thankfully, you can give it a hint as to what you want.

If you want the attribute `id` to get a uuid, you can give it a hint by doing:

```
const user = {
    "id":"<uuid>",
    ...
}
```
returns:

```
const user = {
    "id":"98de56f0-4426-4bdc-bf6a-9ddc8a1b2f6a",
    ...
}
```

## More complex hints

You can help it come up with values by giving it any sort of hint. As complex or as simple you need. For example:

Input object:

```
{
    ...
    "hobbies":["5 hobbies about farming"]
}
```

Returns:

```
{
    ...
    "hobbies":[
        "Growing organic vegetables", 
        "Raising chickens for eggs", 
        "Canning fruits and vegetables", 
        "Beekeeping", 
        "Making homemade cheese"
    ]
}
```

# Doesn't do:

No images, yet!
