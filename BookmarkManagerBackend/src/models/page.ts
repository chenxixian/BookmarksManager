import { Folder } from './folder';
export class Page {
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    folders: Folder[] | undefined;
}
