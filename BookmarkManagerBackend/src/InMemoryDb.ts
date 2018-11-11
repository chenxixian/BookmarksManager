import { Page } from "./models/page";
import { Folder } from "./models/folder";
import { Bookmark } from "./models/bookmark";

var aguid: any = require("aguid");

export class InMemoryDb {
    private pages: Page[];
    private folders: Folder[];
    private bookmarks: Bookmark[];

    constructor() {
        this.pages = [];
        this.folders = [];
        this.bookmarks = [];
    }

    // #region bookmarks
    public createBookmark(bookmark: Bookmark): Bookmark {
        bookmark.id = aguid();
        this.bookmarks.push(bookmark);
        return bookmark;
    }

    public getBookmark(id: string): Bookmark | undefined {
        for(let i: number = 0; i < this.bookmarks.length; i++) {
            let item: Bookmark = this.bookmarks[i];
            if (id === item.id) {
                return item;
            }
        }
        console.log(`error - bookmark not found: ${id}`);
        return undefined;
    }

    public getBookmarks(): Bookmark[] {
        return this.bookmarks;
    }

    public updateBookmark(bookmark: Bookmark): Bookmark | undefined {
        for(let i: number = 0; i < this.bookmarks.length; i++) {
            let item: Bookmark = this.bookmarks[i];
            if (bookmark.id === item.id) {
                item.name = bookmark.name;
                item.url = bookmark.url;
                return item;
            }
        }
        console.log(`error - bookmark not found: ${bookmark.id}`);
        return undefined;
    }

    public deleteBookmark(id: string): void {
        for(let i: number = 0; i < this.bookmarks.length; i++) {
            let item: Bookmark = this.bookmarks[i];
            if (id === item.id) {
                this.bookmarks.splice(i, 1);
                return;
            }
        }
        console.log(`error - bookmark not found: ${id}`);
    }
    // #endregion bookmarks

    // #region folders
    public createFolder(folder: Folder): Folder {
        folder.id = aguid();
        this.folders.push(folder);
        return folder;
    }

    public getFolder(id: string): Folder | undefined {
        for(let i: number = 0; i < this.folders.length; i++) {
            let item: Folder = this.folders[i];
            if (id === item.id) {
                return item;
            }
        }
        console.log(`error - folder not found: ${id}`);
        return undefined;
    }

    public getFolders(): Folder[] {
        return this.folders;
    }

    public updateFolder(folder: Folder): Folder | undefined {
        for(let i: number = 0; i < this.folders.length; i++) {
            let item: Folder = this.folders[i];
            if (folder.id === item.id) {
                item.name = folder.name;
                return item;
            }
        }
        console.log(`error - folder not found: ${folder.id}`);
        return undefined;
    }

    public deleteFolder(id: string): void {
        for(let i: number = 0; i < this.folders.length; i++) {
            let item: Folder = this.folders[i];
            if (id === item.id) {
                this.folders.splice(i, 1);
                return;
            }
        }
        console.log(`error - folder not found: ${id}`);
    }
    // #endregion folders

    // #region pages
    public createPage(page: Page): Page {
        page.id = aguid();
        this.pages.push(page);
        return page;
    }

    public getPage(id: string): Page | undefined {
        for(let i: number = 0; i < this.pages.length; i++) {
            let item: Page = this.pages[i];
            if (id === item.id) {
                return item;
            }
        }
        console.log(`error - page not found: ${id}`);
        return undefined;
    }

    public getPages(): Page[] {
        return this.pages;
    }

    public updatePage(page: Page): Page | undefined {
        for(let i: number = 0; i < this.pages.length; i++) {
            let item: Page = this.pages[i];
            if (page.id === item.id) {
                item.name = page.name;
                return item;
            }
        }
        console.log(`error - page not found: ${page.id}`);
        return undefined;
    }

    public deletePage(id: string): void {
        for(let i: number = 0; i < this.pages.length; i++) {
            let item: Page = this.pages[i];
            if (id === item.id) {
                this.pages.splice(i, 1);
                return;
            }
        }
        console.log(`error - page not found: ${id}`);
        return undefined;
    }
    // #endregion pages
}

let IN_MEMORY_DB: InMemoryDb = new InMemoryDb();
module.exports = IN_MEMORY_DB;