import { Request, ResponseToolkit } from "hapi";
import { BookmarkService } from "./bookmarkService";
import { Bookmark } from "../models/bookmark";
import { BookmarkValidor } from "./bookmarkValidator";

let boom: any = require("boom");

export class BookmarkHandlers {

    constructor() {
        // todo: figure out why I cant do init a service as private member so all methods can use it
        // at the moment, I initialize services in each method, not cute
        // look at DI
    }

    public createBookmarkHandler(request: Request, h: ResponseToolkit): any {
        let bookmarkService: BookmarkService = new BookmarkService();
        let bookmarkValidator: BookmarkValidor = new BookmarkValidor();

        var bookmark: Bookmark = request.payload as Bookmark;

        // validate data
        var errors: any = bookmarkValidator.validatePayloadHasNameAndUrl(bookmark, h);
        if (errors) {
            return boom.badRequest(errors.details[0].message); // bad-request;
        }

        return bookmarkService.createBookmark(bookmark);
    }

    public getBookmarkHandler(request: Request, h: ResponseToolkit): any {
        let bookmarkService: BookmarkService = new BookmarkService();

        let id: string = encodeURIComponent(request.params.id);

        // validate data
        let bookmark: Bookmark = bookmarkService.getBookmark(id);
        if (!bookmark) {
            return boom.notFound(`bookmark with id not found: ${id}`);
        }

        return bookmark;
    }

    public getBookmarksHandler(request: Request, h: ResponseToolkit): any {
        let bookmarkService: BookmarkService = new BookmarkService();

        return bookmarkService.getBookmarks();
    }

    public updateBookmarkHandler(request: Request, h: ResponseToolkit): any {
        let bookmarkService: BookmarkService = new BookmarkService();
        let bookmarkValidator: BookmarkValidor = new BookmarkValidor();

        let id: string = encodeURIComponent(request.params.id);
        var bookmark: Bookmark = request.payload as Bookmark;

        // validate data
        var errors: any = bookmarkValidator.validatePayloadHasNameAndUrl(bookmark, h);
        if (errors) {
            return boom.badRequest(errors.details[0].message); // bad-request;
        }

        errors = bookmarkValidator.validateRequestUrlHasId(id, h);
        if (errors) {
            return boom.badRequest(errors.details[0].message); // bad-request;
        }

        // verify resource with that id exists in db
        let bookmarkInDb: Bookmark = bookmarkService.getBookmark(id);
        if (!bookmarkInDb) {
            return boom.notFound(`bookmark with id not found: ${id}`);
        }

        bookmark.id = id;
        return bookmarkService.updateBookmark(bookmark);
    }

    public deleteBookmarkHandler(request: Request, h: ResponseToolkit): any {
        let bookmarkService: BookmarkService = new BookmarkService();
        let bookmarkValidator: BookmarkValidor = new BookmarkValidor();

        let id: string = encodeURIComponent(request.params.id);

        // validate data
        var errors: any = bookmarkValidator.validateRequestUrlHasId(id, h);
        if (errors) {
            return boom.badRequest(errors.details[0].message); // bad-request;
        }

        let bookmark: Bookmark = bookmarkService.getBookmark(id);
        if (!bookmark) {
            return boom.notFound(`bookmark with id not found: ${id}`);
        }

        bookmarkService.deleteBookmark(id);
        return h.response().code(204); // return no-content bc resource got deleted
    }

}