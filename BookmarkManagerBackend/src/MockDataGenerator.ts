import { Page } from './models/page';
import { Folder } from './models/folder';
import { Bookmark } from './models/bookmark';

var aguid = require('aguid');

export class MockDataGenerator {

    constructor() { }

    public generatePages(countPages: number, folderCount: number, countBookmarks: number): Page[] {
        const pages: Page[] = [];
        for (let i = 0; i < countPages; i++) {
            const p = new Page();
            p.id = aguid();
            p.name = `page name ${1}`;
            p.description = `page description ${i}`;
            p.folders = this.generateFolders(folderCount, countBookmarks);
            pages.push(p);
        }
        return pages;
    }

    public generateFolders(folderCount: number, countBookmarks: number): Folder[] {
        const folders: Folder[] = [];
        for (let i = 0; i < folderCount; i++) {
            const f = new Folder();
            f.id = aguid();
            f.name = `folder name ${i}`;
            f.bookmarks = this.generateBookmarks(countBookmarks);
            folders.push(f);
        }
        return folders;
    }
    
    public generateBookmarks(countBookmarks: number): Bookmark[] {
        const bookmarks: Bookmark[] = [];
        for (let i = 0; i < countBookmarks; i++) {
            const b = new Bookmark();
            b.id = aguid();
            b.name = `bookmark name ${i}`;
            b.url = 'google.com';
            bookmarks.push(b);
        }
        return bookmarks;
    }
}