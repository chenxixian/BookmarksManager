
import { Bookmark } from "../models/bookmark";
import { BookmarkRepository } from "./bookmarkRepository";

export class BookmarkService {

    private bookmarkRepository: BookmarkRepository;
    constructor() {
        this.bookmarkRepository = new BookmarkRepository();
    }

    public createBookmark(bookmark: Bookmark): Bookmark {
        return this.bookmarkRepository.createBookmark(bookmark);
    }

    public getBookmark(id: string): Bookmark {
        return this.bookmarkRepository.getBookmark(id);
    }

    public getBookmarks(): Bookmark[] {
        return this.bookmarkRepository.getBookmarks();
    }

    public updateBookmark(bookmark: Bookmark): Bookmark {
        return this.bookmarkRepository.updateBookmark(bookmark);
    }

    public deleteBookmark(id: string): void {
        return this.bookmarkRepository.deleteBookmark(id);
    }
}