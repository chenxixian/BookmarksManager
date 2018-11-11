
import { Bookmark } from "../models/bookmark";
import { ResponseToolkit } from "hapi";

let joi: any = require("joi");

/**
 * We have the same validation for create an update: name, url
 *  same goes for get or delete because we only need the id
 *
 * If request is not valid, we automatically respond to the user with invalid field(s) msg.
 */
export class BookmarkValidor {

    public validatePayloadHasNameAndUrl(bookmark: Bookmark, h: ResponseToolkit): any {
        let errors: any;

        let bookmarkSchema: any = joi.object().keys({
            name: joi.string().min(3).max(300).required(),
            url: joi.string().min(3).max(300).required()
        });

        joi.validate(bookmark, bookmarkSchema, function(err: any, val: any) {
            errors = err;
        });

        return errors;
    }

    public validateRequestUrlHasId(id: string, h: ResponseToolkit): any {
        let bookmarkSchema: any = joi.object().keys({
            id: joi.string().min(3).max(300).required()
        });

        joi.validate(id, bookmarkSchema, function(err: any, val: any) {
            if (err) {
                return err;
            }
        });
    }

}