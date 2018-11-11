
import { BookmarkHandlers } from './bookmarkHandlers';

let bookmarkHandlers = new BookmarkHandlers()
var bookmarkRoutes = [
    {
        path:'/bookmarks',
        method: 'POST',

        // btw, we don't add () at the end bc we are registering method call backs. 
        // If we add (), typescript will show error: param number mismatch
        handler: bookmarkHandlers.createBookmarkHandler 
    },
    {
        path:'/bookmarks/{id}',
        method: 'GET',
        handler: bookmarkHandlers.getBookmarkHandler
    },
    {
        path:'/bookmarks',
        method: 'GET',
        handler: bookmarkHandlers.getBookmarksHandler
    },
    {
        path:'/bookmarks/{id}',
        method: 'PATCH',
        handler: bookmarkHandlers.updateBookmarkHandler
    },
    {
        path:'/bookmarks/{id}',
        method: 'DELETE',
        handler: bookmarkHandlers.deleteBookmarkHandler
    }

];

module.exports = bookmarkRoutes;
