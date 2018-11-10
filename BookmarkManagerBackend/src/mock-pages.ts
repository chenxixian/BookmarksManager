import { Page } from './models/page';
import { Folder } from './models/folder';
import { Bookmark } from './models/bookmark';

const PAGES = 10;
const FOLDERS = 40;
const BOOKMARKS = 6;

function generatePages( countPages: number,
                        folderCount: number,
                        countBookmarks: number): Page[] {

    const pages: Page[] = [];
    for ( let i = 0; i < countPages; i++) {
        const p = new Page();
        p.id = i;
        p.name = `page name ${1}`;
        p.description = `page description ${i}`;
        p.folders = generateFolders(folderCount, countBookmarks);
        pages.push(p);
    }
    return pages;

}

function generateFolders(folderCount: number, countBookmarks: number): Folder[] {

    const folders: Folder[] = [];
    for ( let i = 0; i < folderCount; i++) {
        const f = new Folder();
        f.id = i;
        f.name = `folder name ${i}`;
        f.bookmarks = generateBookmarks(countBookmarks);
        folders.push(f);
    }
    return folders;
}

function generateBookmarks(countBookmarks: number): Bookmark[] {

    const bookmarks: Bookmark[] = [];
    for ( let i = 0; i < countBookmarks; i++) {
        const b = new Bookmark();
        b.id = i;
        b.name = `bookmark name ${i}`;
        b.url = 'google.com';
        bookmarks.push(b);
    }
    return bookmarks;
}

export const MOCKED_PAGES: Page[] = generatePages(PAGES, FOLDERS, BOOKMARKS);
