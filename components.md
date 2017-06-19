When building components, split them into two categories.

* Container components
* Presentational components.

# Presentational Components:
## Examples: Page, Sidebar, Story, UseInfo, List

* How things look
* CAN contain both presentational and container components inside (these will each have DOM markup of their own)
* Allow containment (everything it needs is in this.props.children)
* No dependancies to rest of app or stores
* Doesn't specify how data is loaded or mutated
* Receives data and callbacks via props
* Rarely have their own state. If they do, it's UI state instead of data.


# Container components
## Examples: UsersPage, FollowersSidebar, StoryContainer, FollowedUserList

* How things working
* Don't usually have DOM markup
* Provide data for presentational components
* Call flux (redux) actions
* ARE stateful
* Generated using higher order components i.e connect()
