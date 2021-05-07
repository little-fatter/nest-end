import { Model, Document } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Cat } from '../interfaces/cat.interface';
import { CreateCatDto } from '../dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CAT_MODEL')
    private catModel: Model<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }
  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
  async deleteById(id: string) {
    return this.catModel.deleteOne({ _id: id });
  }
  async query(options) {
    return this.catModel.find(options).where('id').gt(0).exec();
  }
  async updateOne(filter,option) {
    return this.catModel.updateOne(filter,option)
  }
}