# angular-reddit

github URL: https://github.com/nathan-chmielewski/angular-reddit

# user-stories
* See user-stories.txt for user stories for all scenarios from homework instructions.

# reddit-clone
* All functionality has been implemented from the book's implementation.
* Added a 'role' attribute to Article model to delineate user and admin, of string type.
* Added button text 'flag' to flag posts.
* When posts are flagged, a red flag appears next to the button text.
* When an article is marked as flagged, its vote count is downvoted to equal one less than the lowest post.
* I decided not to freeze vote counts or voting functionality for flagged posts as it felt like it opened up a series of problems/implementation decisions beyond the scope of this exercise that I wrestled with longer than I'd like to admit.
* If an article is flagged and then upvoted to have a Points total higher than a nonflagged post, it remains at its position at the bottom of the list, which will affect the Points total change when another article is flagged. 
* The most recently flagged post is at the bottom. If there are multiple flagged posts, the most recently flagged post is at the end of the list. Once an article is flagged, its Points do not affect its position in the list.