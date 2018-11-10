import { Bookmark } from './bookmark';
export class Folder {
    id: number | undefined;
    name: string | undefined;
    bookmarks: Bookmark[] | undefined;
}
