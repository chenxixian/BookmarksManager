import { Bookmark } from "../models/bookmark";
import { InMemoryDb } from "../InMemoryDb";

let IN_MEMORY_DB: InMemoryDb = require("../InMemoryDb");
let boom: any = require("boom");

export class BookmarkRepository {

    public createBookmark(bookmark: Bookmark): Bookmark {
        return IN_MEMORY_DB.createBookmark(bookmark);
    }

    public getBookmark(id: string): Bookmark {
        return  IN_MEMORY_DB.getBookmark(id);
    }

    public getBookmarks(): Bookmark[] {
        return IN_MEMORY_DB.getBookmarks();
    }

    public updateBookmark(bookmark: Bookmark): Bookmark {
        return IN_MEMORY_DB.updateBookmark(bookmark);
    }

    public deleteBookmark(id: string): void {
        return IN_MEMORY_DB.deleteBookmark(id);
    }
}