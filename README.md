# Todoly

Yes! Finally we have a chance to compete with the hottest web startups; Todo
lists (seriously). To differentiate ourselves from the competition, we've
descided to go with a single page app, since that's clearly the best thing we
can do. Obviously, our customers care more about our technology choices and less
about the actual feature set.

Since we're really awesome developers, we've decided to forego any JavaScript
frameworks and build it all from scratch. You're not allowed to have any
controllers render HTML. JavaScript all the way!

## Stories

### View Homepage
```
As a user
When I navigate to the homepage
Then I see a place type a todo
```

### Create todo (no persistence)
```
As a user
When I type in a todo
And hit enter
Then I see that todo below the input
```

### Remove todo (no persistence)
```
As a user
Given I've created a todo
When I click on the 'x' next to the todo
Then the todo is removed
```

### Complete todo (no persistence)
```
As a user
Given I've created a todo
When I click on '✓'
Then the todo is removed from the initial list
And I see it in the 'Completed' section
```

### Delete completed todo (no persistence)
```
As a user
Given I've created a todo
And I've completed the todo
When I click the 'x' next to the todo
Then the todo is removed
```

### Completed section disappears
```
As a user
Given I have only one completed todo
When I delete that todo
Then I no longer see the 'Completed' section
```
