
// import mongoose from 'mongoose';

// export default class AppBaseModelClass<T extends mongoose.Document> {
//   private _model: mongoose.Model<mongoose.Document>;

//   constructor(schemaModel: mongoose.Model<mongoose.Document>) {
//     this._model = schemaModel;
//   }

//   create = async (item: T | T[]) => await this._model.create(item);
//   retrieve = async (cond: Object) => await this._model.find(cond).exec();
//   findById = async (_id: string) => await this._model.findById(_id).exec();
//   findOne = async (cond: Object, fields: Object) => await this._model.findOne(cond, fields).exec();
//   retrieveWithFields = async (cond: Object, fields: Object) => await this._model.find(cond, fields).exec();
//   retrieveLeanWithFields = async (cond: Object, fields: Object) => await this._model.find(cond, fields).lean().exec();
//   retrieveWithOptions = async (cond: Object, fields: Object, options: Object) => await this._model.find(cond, fields, options).exec();

//   update = async (_id: mongoose.Types.ObjectId, item: T) => await this._model.update({ _id }, item).exec();
//   updateWithOptions = async (cond: Object, fields: Object, options: Object) => await this._model.update(cond, fields, options).exec();

//   // delete = async (_id: string) => await this._model.remove({ _id: this.toObjectId(_id) }).exec();
//   // deleteWithOptions = async (cond: Object) => await this._model.remove(cond).exec();

//   findByIdWithFields = async (_id: string, projection: string) => await this._model.findById(_id, projection).exec();
//   findOneLean = async (cond: Object, fields: Object) => await this._model.findOne(cond, fields).lean().exec();

//   // query = async (cond: Object, modifiers: any) => {
//   //   const findQuery = this._model.find(cond);
//   //   const findQueryKeys = Object.keys(modifiers);
//   //   findQueryKeys.forEach((key) => {
//   //     if (key === 'select') {
//   //       findQuery.select(modifiers[key]);
//   //     }
//   //     if (key === 'skip') {
//   //       findQuery.skip(modifiers[key]);
//   //     }
//   //     if (key === 'limit') {
//   //       findQuery.limit(modifiers[key]);
//   //     }
//   //     if (key === 'sort') { findQuery.sort(modifiers[key]); } }); if (callback) findQuery.exec(callback); else return await findQuery.exec();
//   // }
//   // private toObjectId = (_id: string): mongoose.Types.ObjectId => { return mongoose.Types.ObjectId.createFromHexString(_id); }
//   // findByIdAndUpdate = async (_id: string, update: Object) => { if (callback) this._model.findByIdAndUpdate(_id, update, { new: true }, callback); else return await this._model.findByIdAndUpdate(_id, update, { new: true }).exec(); }
//   // findOneAndUpdate = async (conditions: Object, update: Object) => { if (callback) this._model.findOneAndUpdate(conditions, update, { new: true }, callback); else return await this._model.findOneAndUpdate(conditions, update, { new: true }).exec(); }
//   // count = async (cond: Object) => { if (callback) this._model.count(cond); else return await this._model.count(cond).exec(); }
//   // remove = async (callback?: (error: any, result: any) => void) => { if (callback) this._model.remove({}, err => callback(err, null)); else return await this._model.remove({}).exec(); }
//   // removeWithCondition = async (cond: Object) => await this._model.remove(cond).exec();
//   // aggregate = async (cond: any[]) => { if (callback) this._model.aggregate(cond, callback); else return await this._model.aggregate(cond).exec(); } distinct = async (field: string, cond: Object) => { if (callback) this._model.distinct(field, <any>cond, callback); else return await this._model.distinct(field, <any>cond).exec(); }
//   /** * Bulk insert mongoose method * Refer mongoose docs for the details * * @memberof BaseModel */
//   // insertMany = async (docs: any[], options?: { ordered?: boolean, rawResult?: boolean }) => { return await this._model.insertMany(docs, options); }
//   // findAndUpdate = async (_id: string, item: T) => { try { const findByIdResult = await this.findById(_id); return this.update(findByIdResult._id, item); } catch (err) { return err; } }
//   // updateWithoutCallback = async (_id: string, item: any) => { try { const findByIdResult = await this.findById(_id); return this.update(findByIdResult._id, item); } catch (err) { return err; } }

// }
