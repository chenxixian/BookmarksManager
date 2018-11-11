import { Folder } from './folder';
export class Page {
    id: string | undefined;
    name: string | undefined;
    description: string | undefined;
    folders: Folder[] | undefined;
}
