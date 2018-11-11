import { Bookmark } from './bookmark';
export class Folder {
    id: string | undefined;
    pageId: string | undefined;
    name: string | undefined;
    bookmarks: Bookmark[] | undefined;
}
