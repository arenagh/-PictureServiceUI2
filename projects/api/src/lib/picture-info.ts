export class PictureInfo {
    id: string;
    fileId: string;
    title: string;
    author: string;
    description: string;
    tagList:  string[];
    created: Date;
    downloaded: Date
    pictureSize: { width: number, height: number}
    size: number;
    referer: string;
    source: string;
    temporary: boolean;
}
