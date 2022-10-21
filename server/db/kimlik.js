import mongoose from "mongoose";

const kimlikSchema = mongoose.Schema({
    name: {
        type: String
    }
})

const hakem = mongoose.model('hakem', kimlikSchema, 'hakemler')
export default hakem